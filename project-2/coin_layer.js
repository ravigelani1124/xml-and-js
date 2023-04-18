const apiKey = '8f30c98d22c9b61b326f604e64cc20e7';

// Define the endpoint URL with HTTPS
const endpointUrl = `http://api.coinlayer.com/api/live?access_key=8f30c98d22c9b61b326f604e64cc20e7`;

// Select the HTML elements
const bitcoinRateElement = document.querySelector('#bitcoin-rate');
const ethereumRateElement = document.querySelector('#ethereum-rate');
const litecoinRateElement = document.querySelector('#litecoin-rate');

// Fetch the data from the CoinLayer API
fetch(endpointUrl)
  .then(response => response.json())
  .then(data => {
    // Get the exchange rates for Bitcoin, Ethereum, and Litecoin
    const bitcoinRate = data.rates.BTC;
    const ethereumRate = data.rates.ETH;
    const litecoinRate = data.rates.LTC;

    countriesData = data.rates;
    
    // Display the exchange rates on the HTML page
    bitcoinRateElement.textContent = `${bitcoinRate} `;
    ethereumRateElement.textContent = `${ethereumRate}`;
    litecoinRateElement.textContent = `${litecoinRate} `;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
