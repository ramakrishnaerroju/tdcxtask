import React, { useState } from "react";
import LoginView from "./LoginPageView";
import axios from "../../axios/axios";
import UserData from "../../userdata";

const LoginPage = () => {
  const [loginData, setLoginData] = useState("");

  const onLogin = (data) => {
    axios
      .doLogin(data)
      .then((response) => {
        setLoginData(response.data.token);
        UserData.setToken(response.data.token.token);
        UserData.setName(response.data.token.name);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <LoginView onLogin={onLogin}></LoginView>;
};
export default LoginPage;
