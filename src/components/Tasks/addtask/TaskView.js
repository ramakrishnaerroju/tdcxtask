import React, { useState } from "react";

const TaskView = ({ onTaskSubmit }) => {
  const [userinput, setInput] = useState("");
  return (
    <div className="card cardWidth text-center">
      <div className="card-body">
        <div className="d-flex">
          <h5 className="card-text mb-2">+ New Task</h5>
        </div>

        <input
          className="form-control mb-3"
          id="task"
          name="task"
          aria-label="task"
          placeholder="enter task"
          type="text"
          onChange={(event) => setInput(event.target.value)}
        />
        <div className="d-grid mb-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onTaskSubmit(userinput)}
          >
            + Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskView;
