export default class Coin {
    static async getCoinRate() {
     try {
        const response = await fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ADA&tsyms=USD,EUR,JPY&api_key=${process.env.CRYPTO_API_KEY}`);
        if (!response.ok) {
            throw Error(response.status);
        }
        return response.json();
        } catch(error) {
        return error.message;
        }
  }
}