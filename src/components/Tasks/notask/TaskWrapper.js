import React from "react";
import TaskView from "./TaskView";

const TaskWrapper = ({ addTask }) => {
  return <TaskView addTask={addTask} />;
};

export default TaskWrapper;
