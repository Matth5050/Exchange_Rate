export default class Rate {
    static async getRate(country1,country2, amount) {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.CURRENCY_API_KEY}/pair/${country1}/${country2}/${amount}`);
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      } catch(error) {
        return error.message;
      }
    }
}