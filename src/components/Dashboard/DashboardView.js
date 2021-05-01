import React from "react";

const DashBoard = ({ profileImage }) => {
  return (
    <nav className="navbar navbar-light bg-light custom-nav ">
      <div className="container">
        <a className="navbar-brand " href="#">
          <img
            className="avatar"
            src={profileImage}
            alt="Profile Image"
            width="30"
            height="24"
          />
        </a>
        <button className="btn btn-light" type="button">
          Logout
        </button>
      </div>
    </nav>
  );
};
export default DashBoard;
