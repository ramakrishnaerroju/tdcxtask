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

const TaskListWrapper = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    setLoading(true);
    axios
      .getTasks()
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        setTaskList(data.tasks);
        // show toast
        CommonService.notifySuccess(data.msg);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container mt-4">
        <div>
          <div className="list-group card">
            {taskList.length > 0 &&
              taskList.map((task) => {
                return <TaskList task={task} />;
              })}
          </div>
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
