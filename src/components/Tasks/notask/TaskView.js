import React from "react";

const TaskView = ({ addTask }) => {
  return (
    <div className="card cardWidth text-center">
      <div className="card-body">
        <h2 className="card-text">You have no task.</h2>
        <button className="btn btn-primary " type="button" onClick={addTask}>
          + New Task
        </button>
      </div>
    </div>
  );
};

export default TaskView;
