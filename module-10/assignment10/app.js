const clientId = '718655d1b26e45a49d78ad7009671cfc';
const clientSecret = '5d29fc77ee0a4e8091f6aae51419567d';

const getToken = async () => {
	const result = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
		},
		body: 'grant_type=client_credentials',
	});

	const data = await result.json();
	return data.access_token;
};

const getTracks = async (token, playlistId) => {
	const result = await fetch(
		`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
		{
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token },
		}
	);

	const data = await result.json();
	return data.items;
};

const getGenres = async (token) => {
	const result = await fetch(
		`https://api.spotify.com/v1/browse/categories?locale=sv_US`,
		{
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token },
		}
	);

	const data = await result.json();
	return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
	const limit = 10;

	const result = await fetch(
		`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
		{
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token },
		}
	);

	const data = await result.json();
	return data.playlists.items;
};

const TrackUI = (tracks) => {
	return tracks
		.map(({ track: { name, artists } }) => {
			const artistsList = artists
				.map((artist) => `${artist.name}`)
				.join(', ');
			return `<div style="margin-bottom:0.5rem; color:black">${name} - ${artistsList}</div>`;
		})
		.join(``);
};

const loadGenres = async () => {
	const token = await getToken();
	const genres = await getGenres(token);
	const list = document.getElementById(`genres`);

	genres.map(async ({ name, id, icons: [icon], href }) => {
		const playlists = await getPlaylistByGenre(token, id);
		let playlistsList = await Promise.all(
			playlists.map(
				async ({
					id,
					name,
					external_urls: { spotify },
					images: [image],
				}) => {
					let tracks = await getTracks(token, id);
					return `<li>
								<a href="${spotify}" alt="${name}" target="_blank">
									<img src="${image.url}" width="180" height="180"/>
								</a>
								<div style="max-height: 150px; overflow-y:auto">
								${TrackUI(tracks)}
								</div>
							</li>`;
				}
			)
		);
		playlistsList = playlistsList.join(``);

		if (playlists) {
			const html = `
						<article class="genre-card">
							<img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
							<div>
							<h2>${name}</h2>
							<ol>
								${playlistsList}
							</ol>
							</div>
						</article>`;

			list.insertAdjacentHTML('beforeend', html);
		}
	});
};

loadGenres();
