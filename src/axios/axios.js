import axios from "axios";
import { API_KEY } from "./../constants";

const instance = axios.create({
  baseURL: "https://dev-dl.tdcx.com:3092",
  headers: {
    "content-type": "application/json",
    // Authorization: "3cc807d6d9b876e2",
  },
});

export default {
  addTask: () =>
    instance({
      method: "GET",
      url: "/login",
      params: {
        search: "parameter",
      },
    }),
  doLogin: ({ name }) =>
    instance({
      method: "POST",
      url: "/login",
      data: {
        apiKey: API_KEY,
        name,
      },
      headers: {
        "content-type": "application/json",
      },
    }),
};
