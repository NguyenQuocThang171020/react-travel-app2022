import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import { SiYourtraveldottv } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/apiRequest";
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoCloseOutline} from 'react-icons/io5'
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.login?.user);
  const handleLogout = () => {
    logoutUser(dispatch, navigate);
  };
  const [menu,setMenu] =useState(false)
  return (
    <div className="nav-page">
      <div className="logo-text">
        <p >
          <span>
            <SiYourtraveldottv />
          </span>{" "}
          Travel
        </p>
      </div>
      <div className="nav-menu">
        <Link className="link" to="/">
          home
        </Link>
        <Link className="link" to="/tour">
          tour
        </Link>
        {user ? (
          <div className="user">
            <p>{user?.username}</p>
            <button onClick={handleLogout}>logout</button>
          </div>
        ) : (
          <Link className="link" to="/login">
            login
          </Link>
        )}
      </div>
      <div className="nav-mobile">
          <p onClick={()=>setMenu(!menu)} className='hamburger'><GiHamburgerMenu/></p>
          {menu ? (
          <div className="menu">
            <div className="close">
              <button onClick={()=>setMenu(false)}><IoCloseOutline/></button>
            </div>
            <ul>
            <li><Link className="link" to="/">home</Link></li>
            <li> <Link className="link" to="/tour">tour</Link></li>
          </ul>
            {user ? (  
            <div className="user">
              <p>{user?.username}</p>
              <button onClick={handleLogout}>logout</button>
            </div>
            ):(
              <div className="user">
                <button onClick={()=>navigate('/login')}>login</button>
              </div>
            )}  
          </div>
          ):(<></>)}
      </div>
    </div>
  );
};

export default Navbar;
