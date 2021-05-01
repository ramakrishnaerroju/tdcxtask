export default class CommonService {
  static async setLogin(loginData) {
    sessionStorage.setItem("tdcxSessionData", JSON.stringify(loginData));
  }
  static async getLogin() {
    return JSON.parse(sessionStorage.getItem("tdcxSessionData") || {});
  }
}
