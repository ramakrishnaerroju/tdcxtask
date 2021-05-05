import React from "react";

const LandingPage = ({ profileImage, name, logoutCallback }) => {
  return (
    <nav className="navbar navbar-light bg-light custom-nav ">
      <div className="container">
        <span>
          <a className="navbar-brand " href="#">
            <img
              className="avatar"
              src={profileImage}
              alt="Profile"
              width="30"
              height="24"
            />
          </a>
          <span>{name}</span>
        </span>

        <button
          className="btn btn-light"
          type="button"
          onClick={logoutCallback}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
export default LandingPage;
