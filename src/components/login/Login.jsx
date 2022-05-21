import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/apiRequest";
const Login = () => {
  const error = useSelector((state) => state.user.login?.isError);
  const userLogin = useSelector((state) => state.user.login?.user);
  const login = useSelector((state) => state.user.login?.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 2000,
      easing: "ease",
    });
  }, []);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: user,
      password: password,
    };
    loginUser(dispatch, newUser);
  };
  if (userLogin) {
    navigate("/");
  }
  return (
    <div className="login-page">
      {(login === true) ?(
        <div className="loading">
          <div className="load"></div>
          <p>loading...</p>
        </div>
      ):<div></div>}
      <div className="login" data-aos="fade-down">
        <div className="logo-login" data-aos="zoom-in">
          Login
        </div>
        <form onSubmit={handleLogin} data-aos="fade-left">
          <label> Username</label>
          <input
            type="text"
            placeholder="username..."
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label> Password</label>
          <input
            type="password"
            placeholder="password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </form>
        <div className="register-btn">
          <button
            className="register"
            onClick={() => navigate("/register")}
            data-aos="fade-in"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
