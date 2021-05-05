import React, { useEffect, useState, createRef } from "react";
import NavBar from "./DashboardView";
import CommonService from "./../../common/commonService";
import axios from "../../axios/axios";
import { Redirect, useHistory } from "react-router-dom";
import { size } from "lodash";
import NoTask from "../Tasks/notask/TaskWrapper";
import CreateTask from "../Tasks/addtask/TaskWrapper";
import EditTask from "../Tasks/edittask/TaskWrapper";
import UserData from "./../../userdata";
import TaskList from "./../Tasks/tasklist";

const DashBoard = () => {
  const [loginData, setLoginData] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState(null);
  const history = useHistory();
  const [notask, setNoTask] = useState(false);
  const [createTask, setCreateTask] = useState(false);
  const [editTaskPopup, openCloseEditPopup] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(null);
  const wrapperRef = React.createRef();
  const editWrapperRef = React.createRef();
  const [reFetchTasks, setReFetchTasks] = useState(false);

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
        let { token, image } = loginData;
        let { name } = token;
        const profileImage = axios.baseURL + image;
        setProfileImage(profileImage);
        setName(name);
        UserData.token = token?.token;
        UserData.name = name;
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

  const createTaskCallBack = (event) => {
    if (
      event &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      setCreateTask(!createTask);
      setNoTask(false);
      setReFetchTasks(!reFetchTasks);
    }
  };

  const closeCreateTaskPopup = () => {
    setCreateTask(false);
    setReFetchTasks(!reFetchTasks);
  };

  const closeEditTaskPopup = (updatedTask) => {
    openCloseEditPopup(false);
    setUpdatedTask(updatedTask);
  };

  const openEditPopup = (currentTask) => {
    setUpdatedTask(currentTask);
    openCloseEditPopup(true);
  };

  const editTaskCallBack = (event) => {
    if (
      event &&
      editWrapperRef.current &&
      !editWrapperRef.current.contains(event.target)
    ) {
      openCloseEditPopup(false);
      // setReFetchTasks(!reFetchTasks);
    }
  };

  return (
    <div>
      <NavBar
        profileImage={profileImage}
        name={name}
        logoutCallback={logoutCallback}
      ></NavBar>
      <div
        className={
          notask ? "centerDiv task-container" : "centerDiv task-container hide"
        }
      >
        {notask && <NoTask addTask={createTaskCallBack} />}
      </div>
      <div
        className={
          createTask
            ? "centerDiv task-container overlay"
            : "centerDiv task-container overlay hide"
        }
        onClick={(event) => createTaskCallBack(event)}
      >
        <div ref={wrapperRef}>
          {createTask && <CreateTask closeCreateTask={closeCreateTaskPopup} />}
        </div>
      </div>
      <div
        className={
          editTaskPopup
            ? "centerDiv task-container overlay"
            : "centerDiv task-container overlay hide"
        }
        onClick={(event) => editTaskCallBack(event)}
      >
        <div ref={editWrapperRef}>
          {editTaskPopup && (
            <EditTask
              closeEditTaskPopup={closeEditTaskPopup}
              task={updatedTask}
            />
          )}
        </div>
      </div>
      <TaskList
        addTask={createTaskCallBack}
        reFetchTasks={reFetchTasks}
        openEditPopup={openEditPopup}
        editedTask={updatedTask}
      />
    </div>
  );
};
export default DashBoard;
