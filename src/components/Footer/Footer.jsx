import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { GiClockwork } from "react-icons/gi";
import { GiPositionMarker } from "react-icons/gi";
import './footer.scss'
import imageFooter from '../../asset/logo.png'
const Footer = () => {
  return (
    <div className="around-footer">
    <div className="footer-page">
      <div className="image-footer">
        <img className="img-ft" src={imageFooter} alt="" />
      </div>  
      <div className="operation">
        <div className="title">
          Contact With Us
        </div>
        <p>
          <GiPositionMarker /> Address : LongAn VN
        </p>
        <p>
          <FiMail /> Email:nagi.kusan1234@gmail.com{" "}
        </p>
        <p>
          <GiRotaryPhone /> Phone : +84 111 111 111
        </p>
        <p>
          <AiOutlineGlobal /> Website : travelapp2022.netlify.app
        </p>
        <p>
          <GiClockwork /> Operation : 8:00 AM to 8:00 PM
        </p>
      </div>
      <div className="icons">
        <a href="https://facebook.com">
          <BsFacebook className="icon1" />
        </a>{" "}
        <br />
        <a href="https://youtube.com">
          <BsYoutube className="icon2" />
        </a>
        <br />
        <a href="https://twitter.com/">
          <BsTwitter className="icon3" />
        </a>
        <br />
      </div>

     
    </div>
     <div className="copy-right">
        <p>
          <span>
            <FaRegCopyright /> Copy Right{" "}
          </span>{" "}
          2022 Thang VN , Inc.All right reserved.
        </p>
      </div>
      </div>
  );
};

export default Footer;
