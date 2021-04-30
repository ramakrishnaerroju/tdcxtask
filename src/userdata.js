export default class UserData {
  token = "";
  name = "";

  static setToken(token) {
    this.token = token;
  }

  static getToken() {
    return this.token;
  }

  static setName(name) {
    this.name = name;
  }

  static getName() {
    return this.name;
  }
}
