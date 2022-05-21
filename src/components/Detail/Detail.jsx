import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./detail.scss";
import Navbar from "../Navbar/Navbar";
import { detailHotel } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = useSelector((state) => state.hotel.detailHotel?.hotel);
  const loading = useSelector((state) => state.hotel.detailHotel?.isLoading);
  console.log(loading);
  const user = useSelector((state)=>state.user.login?.user)
  const params = useParams();
  useEffect(() => {
    detailHotel(dispatch, params.id);
  }, []);
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 1000,
      easing: "ease",
    });
  }, []);
  return (
    <div className="detail-page">
      {(loading === true) ?(
        <div className="loading">
          <div className="load"></div>
          <p>loading...</p>
        </div>
      ):<div></div>}
      <div className="nav" data-aos="fade-down">
        <Navbar />
      </div>
      <div className="detail" data-aos="fade-down">
        <div className="hotel-all">
          <div className="hotel-name" data-aos="fade-down">
            <h3>{detail?.name}</h3>
          </div>
          <div className="hotel-image" data-aos="fade-in">
            {detail?.image.map((img, index) => {
              return <img src={img} alt="" key={index} data-aos="fade-left" />
            })}
          </div>
          <div className="price" data-aos="fade-right">
            <p>{detail?.price} VND</p>
          </div>
          <div className="btn-hire" data-aos="fade-right">
           {(detail?.state ==="Còn phòng")? <button onClick={()=> {if(!user){navigate('/login')} else{navigate(`/order/${detail?._id}`)}}}>Hire Hotel</button>:<></>}
          </div>
        </div>
      </div>
      <div className="footer" data-aos="fade-in">
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
