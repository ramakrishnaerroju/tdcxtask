import axios from "axios";
import { API_KEY } from "./../constants";
import UserData from "./../userdata";

const instance = axios.create({
  baseURL: "https://dev-dl.tdcx.com:3092",
  headers: {
    "content-type": "application/json",
    // Authorization: "3cc807d6d9b876e2",
  },
});

const axiosObj = {
  baseURL: "https://dev-dl.tdcx.com:3092",
  addTask: (payload) =>
    instance({
      method: "POST",
      url: "/tasks",
      data: {
        name: payload.task,
      },
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${UserData.token}`,
      },
    }),
  getTasks: () =>
    instance({
      method: "GET",
      url: "/tasks",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${UserData.token}`,
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
  deleteTask: (id) =>
    instance({
      method: "DELETE",
      url: `/tasks/${id}`,
      headers: {
        Authorization: `Bearer ${UserData.token}`,
      },
    }),
};
export default axiosObj;
