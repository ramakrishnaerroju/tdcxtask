import React from "react";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faPencilAlt, faTrashAlt);

const TaskList = ({ task, deleteTask }) => {
  return (
    <label className="list-group-item" key={task._id}>
      <input className="form-check-input me-3" type="checkbox" value="" />
      <span>{task.name}</span>
      <button
        type="button"
        className="btn btn-sm btn-light float-end ml-2"
        onClick={() => deleteTask(task._id)}
      >
        <FontAwesomeIcon icon="trash-alt" />
      </button>
      <button type="button" className="btn btn-sm btn-light float-end mr-4">
        <FontAwesomeIcon icon="pencil-alt" />
      </button>
    </label>
  );
};

export default TaskList;
