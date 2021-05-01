import React, { useState } from "react";
import LoginView from "./LoginPageView";
import axios from "../../axios/axios";
import UserData from "../../userdata";
import { Redirect, useHistory } from "react-router-dom";
import CommonService from "./../../common/commonService";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const override = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState("");
  const loginMessage = "Login is successful. You are logged in now!";
  let history = useHistory();

  React.useEffect(() => {
    const setData = async () => {
      await CommonService.setLogin(loginData);
    };
    setData();
  }, [loginData]);

  const notifySuccess = () => {
    toast(loginMessage, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onLogin = (data) => {
    setLoading(true);
    axios
      .doLogin(data)
      .then((response) => {
        setLoginData(response.data);
        UserData.token = response.data.token.token;
        UserData.name = response.data.token.name;
        UserData.profileUrl = response.data.image;
        console.log(response);
        setLoading(false);
        // show toast
        notifySuccess();
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const isLoggedIn = () => {
    if (loginData.length > 0) {
      return true;
    }
    return false;
  };

  if (isLoggedIn()) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-container">
      <LoginView onLogin={onLogin}></LoginView>

      <BeatLoader
        loading={loading}
        size={25}
        css={override}
        margin={2}
        color={"green"}
      />
    </div>
  );
};
export default LoginPage;
