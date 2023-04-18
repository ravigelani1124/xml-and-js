const curr = document.querySelector("select");
//const date = document.querySelector("input");
const btn = document.querySelector("button");

const date = '2023-04-17'; // Update the date to the historical date you want to retrieve
//const baseCurrency = 'EUR'; // Set the base currency to EUR
const endpoint = `http://api.coinlayer.com/${date}?access_key=91826e35c2542cf1c83425e99198b524&base=${curr}`;
const call = () => {
fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const coinsList = document.getElementById('coins');

    for (const [symbol, value] of Object.entries(data.rates)) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${symbol}: ${value}`;
      coinsList.appendChild(listItem);
    }
  })
  .catch(error => console.error(error));
}
btn.addEventListener('click',call);

