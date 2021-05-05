import React, { useState, createRef } from "react";

const TaskView = ({ onTaskEditSubmit, task }) => {
  const [userinput, setInput] = useState(task.name || "");
  const inputRef = createRef();

  return (
    <div className="card cardWidth text-center">
      <div className="card-body">
        <div className="d-flex">
          <h5 className="card-text mb-2">Edit task</h5>
        </div>

        <input
          className="form-control mb-3"
          id="task"
          name="task"
          aria-label="task"
          placeholder="enter task"
          type="text"
          value={userinput}
          ref={inputRef}
          onChange={(event) => setInput(event.target.value)}
        />
        <div className="d-grid mb-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              inputRef.current.value = "";
              onTaskEditSubmit(userinput);
            }}
          >
            + Edit Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskView;
