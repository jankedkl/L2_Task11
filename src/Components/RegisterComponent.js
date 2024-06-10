// RegisterComponent.js.
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


//Register functional component. 
const SignUpForm = () => {
 const formik = useFormik({
      initialValues: {
        firstName: "",
        surName: "",
        userName: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        surName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        userName: Yup.string()
          .max(20, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
          )
          .required("Required"),
      }),
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  
    return (
      <div className="register">
        <form onSubmit={formik.handleSubmit}>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="input-field">
            <label htmlFor="surName">Surname</label>
            <input
              id="surName"
              name="surName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surName}
            />
            {formik.touched.surName && formik.errors.surName ? (
              <div>{formik.errors.surName}</div>
            ) : null}
          </div>
          <div className="input-field">
            <label htmlFor="userName">Username</label>
            <input
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div>{formik.errors.userName}</div>
            ) : null}
          </div>
          <div className="input-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="button-container">
            <button className="btn btn-outline-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };
  export default SignUpForm;