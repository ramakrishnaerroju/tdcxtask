import React from "react";

const LoginView = () => {
  return (
    <div className="container-fluid">
      <div className="loginPage">
        <div className="card cardWidth">
          <div className="card-body">
            <h5 className="card-title mb-4">Login</h5>
            <input
              class="form-control  mb-2"
              type="text"
              placeholder="Id"
              aria-label="default input example"
            ></input>
            <input
              class="form-control mb-2"
              type="text"
              placeholder="Name"
              aria-label="default input example"
            ></input>
            <div className="d-grid mb-2">
              <button type="button" class="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginView;
