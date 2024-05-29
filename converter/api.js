import axios from "axios";

const options = {
  method: "GET",
  url: "https://currency-exchange.p.rapidapi.com/exchange",
  params: {
    from: "SGD",
    to: "MYR",
    q: "1.0",
  },
  headers: {
    "X-RapidAPI-Key": "0949ae0546mshaa273642ad8f4abp1439ddjsn6593e102e36a",
    "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
