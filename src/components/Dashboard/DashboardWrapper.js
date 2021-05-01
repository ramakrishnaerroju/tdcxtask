import React, { useEffect, useState, useRef } from "react";
import NavBar from "./DashboardView";
import CommonService from "./../../common/commonService";
import axios from "../../axios/axios";
import { Redirect, useHistory } from "react-router-dom";
import { size } from "lodash";
import NoTask from "../Tasks/notask/TaskWrapper";
import CreateTask from "../Tasks/addtask/TaskWrapper";

const DashBoard = () => {
  const [loginData, setLoginData] = useState({});
  const profileImage = useRef(null);
  const history = useHistory();
  const [notask, setNoTask] = useState(true);
  const [createTask, setCreateTask] = useState(false);

  useEffect(() => {
    const setData = async () => {
      const user = (await CommonService.getLogin()) || {};
      setLoginData(user);
      profileImage.current = axios.baseURL + loginData.image;
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

  const onTaskSubmit = (values) => {
    alert(values);
  };

  return (
    <div>
      <NavBar
        profileImage={profileImage.current}
        logoutCallback={logoutCallback}
      ></NavBar>
      <div className="centerDiv task-container">
        {notask && <NoTask addTask={createTaskCallBack} />}
        {createTask && <CreateTask onTaskSubmit={onTaskSubmit} />}
      </div>
    </div>
  );
};
export default DashBoard;
