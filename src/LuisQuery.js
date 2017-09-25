export default class LuisQuery {

  constructor() {
    this.LUIS_URL =
      "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/4c7b2108-85f7-4a47-b509-f7ef053de4d8?subscription-key=d73b4400d6d745c6b06758e474492522&verbose=true&timezoneOffset=0&spellCheck=true&q=";
  }

  getIntent = (payload) => {
    const query_url = this.LUIS_URL + payload;
    require("https").request(query_url, response => {
      console.log("response is ..");
      console.log(response);
    });
  }

  getQuery = (payload) => {
    if (payload === "" || payload === undefined || payload === null) {
      throw new Error("Payload error: Either empty or undefined");
    }
    return this.LUIS_URL + payload;
  }
}
