import React, { useState } from "react";
import TaskView from "./TaskView";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import axios from "./../../../axios/axios";
import CommonService from "./../../../common/commonService";

const override = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TaskWrapper = () => {
  const [loading, setLoading] = useState(false);

  const onTaskSubmit = (data) => {
    if (data.length > 0) {
      setLoading(true);
      const requestPayload = {
        task: data,
      };
      axios
        .addTask(requestPayload)
        .then(({ data }) => {
          console.log(data);
          setLoading(false);
          // show toast
          CommonService.notifySuccess(data.msg);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <TaskView onTaskSubmit={onTaskSubmit} />
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

export default TaskWrapper;
