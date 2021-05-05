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

const TaskWrapper = ({ closeEditTaskPopup, task }) => {
  // const [loading, setLoading] = useState(false);

  const onTaskSubmit = (data) => {
    // before sending this up the chain make changes in object
    const modifiedTask = { ...task };
    modifiedTask.name = data;
    closeEditTaskPopup(modifiedTask);
  };

  return (
    <div>
      <TaskView onTaskEditSubmit={onTaskSubmit} task={task} />
      {/* <BeatLoader
        loading={loading}
        size={25}
        css={override}
        margin={2}
        color={"green"}
      /> */}
    </div>
  );
};

export default TaskWrapper;
