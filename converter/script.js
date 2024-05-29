const currencyPairs = [
  { from: "USD", to: "RUB" },
  { from: "EUR", to: "RUB" },
  { from: "GBP", to: "RUB" },
  { from: "JPY", to: "RUB" },
  { from: "MXN", to: "RUB" },
  { from: "CNH", to: "RUB" },
];

async function fetchExchangeRates() {
  for (const pair of currencyPairs) {
    const options = {
      method: "GET",
      url: "https://currency-exchange.p.rapidapi.com/exchange",
      params: {
        from: pair.from,
        to: pair.to,
        q: "1.0",
      },
      headers: {
        "X-RapidAPI-Key": "0949ae0546mshaa273642ad8f4abp1439ddjsn6593e102e36a",
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);

      const formattedRate = parseFloat(response.data).toFixed(2);

      document
        .getElementById(`${pair.from.toLowerCase()}-rate`)
        .querySelector(".rate-value").textContent = formattedRate;
    } catch (error) {
      console.error(`Error fetching exchange rates`, error);
    }
  }
}

fetchExchangeRates();

setInterval(fetchExchangeRates, 900000);
