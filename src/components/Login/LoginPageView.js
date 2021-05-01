import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.id) {
    errors.id = "Required";
  }

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length <= 2) {
    errors.name = "Name must be more than 2 characters";
  }

  return errors;
};

const LoginView = ({ onLogin }) => {
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
    },
    validate,
    onSubmit: (values) => {
      onLogin(values);
    },
  });
  return (
    <div className="container-fluid">
      <div className="centerDiv">
        <div className="card cardWidth">
          <div className="card-body">
            <h5 className="card-title mb-4">Login</h5>
            <form onSubmit={formik.handleSubmit}>
              <input
                className="form-control  mb-2"
                id="id"
                name="id"
                placeholder="Id"
                aria-label="id"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.id}
              />
              {formik.errors.id ? <div>{formik.errors.id}</div> : null}

              <input
                className="form-control  mb-2"
                id="name"
                name="name"
                placeholder="Name"
                aria-label="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}

              <div className="d-grid mb-4">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginView;
