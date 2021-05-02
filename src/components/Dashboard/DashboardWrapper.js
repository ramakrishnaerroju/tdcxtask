import React, { useEffect, useState } from "react";
import NavBar from "./DashboardView";
import CommonService from "./../../common/commonService";
import axios from "../../axios/axios";
import { Redirect, useHistory } from "react-router-dom";
import { size } from "lodash";
import NoTask from "../Tasks/notask/TaskWrapper";
import CreateTask from "../Tasks/addtask/TaskWrapper";
import UserData from "./../../userdata";
import TaskList from "./../Tasks/tasklist";

const DashBoard = () => {
  const [loginData, setLoginData] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const history = useHistory();
  const [notask, setNoTask] = useState(true);
  const [createTask, setCreateTask] = useState(false);

  useEffect(() => {
    const setData = async () => {
      const user = (await CommonService.getLogin()) || {};
      setLoginData(user);
    };
    setData();
  }, []);

  useEffect(() => {
    const setData = async () => {
      if (size(loginData) > 0) {
        const { token, image } = loginData;
        const profileImage = axios.baseURL + image;
        setProfileImage(profileImage);
        UserData.token = token?.token;
      }
    };
    setData();
  }, [loginData]);

  const logoutCallback = () => {
    CommonService.removeLogin();
    history.push("/login");
  };

  useEffect(() => {
    if (size(loginData) === 0) {
      return <Redirect to="/login" />;
    } else {
      return <Redirect to="/dashboard" />;
    }
  }, [loginData]);

  setTimeout(() => {
    if (size(loginData) === 0) {
      return <Redirect to="/login" />;
    }
  }, 100);

  const createTaskCallBack = () => {
    setCreateTask(true);
    setNoTask(false);
  };

  return (
    <div>
      <NavBar
        profileImage={profileImage}
        logoutCallback={logoutCallback}
      ></NavBar>
      {/* <div className="centerDiv task-container">
        {notask && <NoTask addTask={createTaskCallBack} />}
        {createTask && <CreateTask />}
      </div> */}

      <TaskList />
    </div>
  );
};
export default DashBoard;
