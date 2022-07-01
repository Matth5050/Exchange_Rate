export default class Rate {
    static async getRate() {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/EUR/5`);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      } catch(error) {
        return error.message;
      }
    }
  }