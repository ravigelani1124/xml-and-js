fetch(
	'http://api.coinlayer.com/list?access_key=d92b85b3b90dfaa4874dc4f247188c60'
)
	.then((response) => response.json())
	.then((data) => {
		let cryptoList = data.crypto; // Get the list of all cryptocurrencies

		// Loop through the data and create a card element for each cryptocurrency
		for (let symbol in cryptoList) {
			let crypto = cryptoList[symbol];
			let card = createCryptoCard(crypto);

			// Add the card element to the page
			document.getElementById('crypto-card').appendChild(card);
		}

		// Add event listener to search input field
		let searchInput = document.getElementById('search-input');
		searchInput.addEventListener('input', function () {
			let searchQuery = searchInput.value.toLowerCase(); // Get the search query entered by user
			let filteredCryptoList = filterCryptoList(cryptoList, searchQuery); // Filter the list based on search query

			// Remove existing cards from the page
			let cryptoCardContainer = document.getElementById('crypto-card');
			while (cryptoCardContainer.firstChild) {
				cryptoCardContainer.removeChild(cryptoCardContainer.firstChild);
			}

			// Create card elements for filtered cryptocurrencies and add them to the page
			for (let symbol in filteredCryptoList) {
				let crypto = filteredCryptoList[symbol];
				let card = createCryptoCard(crypto);

				cryptoCardContainer.appendChild(card);
			}
		});
	})
	.catch((error) => console.error(error));

// Helper function to create a card element for a cryptocurrency
function createCryptoCard(crypto) {
	let card = document.createElement('div');
	card.className = 'card';
	card.innerHTML = `
        <img src="${crypto.icon_url}" alt="${crypto.symbol} icon">
        <h2>${crypto.name_full}</h2>
        <p>Symbol: ${crypto.symbol}</p>
        <p>Max Supply: ${crypto.max_supply}</p>`;
	return card;
}

// Helper function to filter the list of cryptocurrencies based on search query
function filterCryptoList(cryptoList, searchQuery) {
	return Object.values(cryptoList).filter((crypto) => {
		return (
			crypto.name.toLowerCase().includes(searchQuery) ||
			crypto.symbol.toLowerCase().includes(searchQuery)
		);
	});
}
