export default class CommonService {
  static async setLogin(loginData) {
    localStorage.setItem("tdcxSessionData", JSON.stringify(loginData));
  }
  static async getLogin() {
    return JSON.parse(localStorage.getItem("tdcxSessionData") || {});
  }

  static removeLogin() {
    localStorage.removeItem("tdcxSessionData");
  }
}
