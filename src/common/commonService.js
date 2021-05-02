import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

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

  static notifySuccess = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
}
