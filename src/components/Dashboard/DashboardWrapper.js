import React, { useEffect, useState } from "react";
import DashBoardView from "./DashboardView";
import { Redirect } from "react-router-dom";
import CommonService from "./../../common/commonService";
import axios from "../../axios/axios";

const DashBoard = () => {
  const [loginData, setLoginData] = useState("");
  let profileImage = axios.baseURL + loginData.image;
  console.log(axios.baseURL);
  useEffect(() => {
    const setData = async () => {
      const user = (await CommonService.getLogin()) || "";
      profileImage = axios.baseURL + loginData.image;
      setLoginData(user);
    };
    setData();
  }, []);
  if (loginData.length > 0) {
    return <Redirect to="/login" />;
  }
  return <DashBoardView profileImage={profileImage}></DashBoardView>;
};
export default DashBoard;
