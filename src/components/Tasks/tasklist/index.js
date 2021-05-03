import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import axios from "./../../../axios/axios";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import CommonService from "./../../../common/commonService";

const override = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TaskListWrapper = ({ addTask, reFetchTasks }) => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, [reFetchTasks]);

  const fetchTasks = () => {
    setLoading(true);
    axios
      .getTasks()
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        setTaskList(data.tasks);
        // show toast
        // CommonService.notifySuccess(data.msg);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const onDeleteTask = (id) => {
    setLoading(true);
    axios
      .deleteTask(id)
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        // show toast
        CommonService.notifySuccess(data.msg);
        fetchTasks();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const onEditTask = (updatedTask) => {
    setLoading(true);
    axios
      .editTask(updatedTask)
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        // show toast
        // CommonService.notifySuccess(data.msg);
        fetchTasks();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const checkboxHandleChange = (event, task) => {
    task.completed = event.target.checked;
    onEditTask(task);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex align-items-center">
          <div class="me-auto p-2">
            <p className="heading m-0">Tasks</p>
          </div>

          <div class="p-2">
            <input
              type="search"
              placeholder="Search"
              id="search"
              aria-label="Search"
            />
          </div>

          <div className="p-2">
            <button
              className="btn btn-sm btn-primary"
              type="button"
              onClick={addTask}
            >
              New Task
            </button>
          </div>
        </div>
        <div className="list-group card">
          {taskList.length > 0 &&
            taskList.map((task) => {
              return (
                <TaskList
                  task={task}
                  deleteTask={onDeleteTask}
                  checkboxHandleChange={checkboxHandleChange}
                />
              );
            })}
        </div>
      </div>
      <div className="centerDiv">
        <BeatLoader
          loading={loading}
          size={25}
          css={override}
          margin={2}
          color={"green"}
        />
      </div>
    </>
  );
};

export default TaskListWrapper;
