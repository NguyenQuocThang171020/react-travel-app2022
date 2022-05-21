import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./register.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/apiRequest";
const Register = () => {
  const error = useSelector((state) => state.user.register?.isError);
  const register = useSelector((state)=>state.user?.register);
  console.log(register);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 2000,
      easing: "ease",
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      registerUser(dispatch, values);
      setModal(true);
    },
  });
  const [modal, setModal] = useState(false);
  return (
    <div className="register-page">
      {(register?.isLoading === true) ?  (
        <div className="loading">
          <div className="load"></div>
          <p>loading...</p>
        </div>
      ):(
        <div className="modal">
        {modal ?
          (error ? (
            <div className="modal-page">
            <div className="title">
              <h3>Notice</h3>
            </div>
            <div className="content">
                <p>{error}</p>
            </div>
            <div className="btn">
              <button onClick={() =>setModal(false)}>OK</button>
            </div>
            </div> 
          ) : (
            <div className="modal-page">
            <div className="title">
              <h3>Notice</h3>
            </div>
            <div className="content">
            <p>Register Success</p>
            </div>
            <div className="btn">
            <button onClick={() => {navigate("/login");setModal(false)}}>OK</button>
            </div>
            </div> 
          )):<div></div>
        }
      </div>
      )}
      
      <div className="form" data-aos="fade-down">
        <p className="title-register" data-aos="fade-right">
          Register
        </p>
        <div className="register">
          <div className="image">
            <img
              src="https://i.pinimg.com/originals/fa/5c/bd/fa5cbd65ca53560dd0e52efadd0b748b.gif"
              alt=""
            />
          </div>
          <form onSubmit={formik.handleSubmit} data-aos="fade-left">
            <div>
              <label> Usename</label>
              <input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.errors.username && <p>{formik.errors.username}</p>}
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && <p>{formik.errors.email}</p>}
            </div>
            <div>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.errors.phone && <p>{formik.errors.phone}</p>}
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && <p>{formik.errors.password}</p>}
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
              />
              {formik.errors.confirm_password && (
                <p>{formik.errors.confirm_password}</p>
              )}
            </div>
            <div>
              <button type="submit" data-aos="fade-in">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="btn-login">
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
