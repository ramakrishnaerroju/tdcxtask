import React from "react";
import TaskView from "./TaskView";

const TaskWrapper = ({ onTaskSubmit }) => {
  return <TaskView onTaskSubmit={onTaskSubmit} />;
};

export default TaskWrapper;
