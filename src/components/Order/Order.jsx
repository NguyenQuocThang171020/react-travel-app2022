import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { detailHotel, postTicket } from "../../redux/apiRequest";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./order.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Order = () => {
  const user = useSelector((state) => state.user.login?.user);
  const detail = useSelector((state) => state.hotel.detailHotel?.hotel);
  const loadingDetail = useSelector(
    (state) => state.hotel.detailHotel?.isLoading
  );
  const loadingPostTicket = useSelector(
    (state) => state.ticket.postTicket?.isLoading
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const [quantity, setQuantity] = useState(1);
  const frimaryPrice = Number(detail?.price);
  const [price, setPrice] = useState(frimaryPrice);
  const [modal, setModal] = useState(false);
  const handleOrder = (e) => {
    e.preventDefault();
    const newTicket = {
      username: user?.username,
      hotel: detail?._id,
      email: user?.email,
      phone: user?.phone,
      quantity: quantity,
      price: price,
    };
    postTicket(dispatch, newTicket);
    setInterval(() => {
      if(loadingPostTicket === true ){
        setModal(false)
      }
      else{
        setModal(true)
      }
    }, 1000);
  };
  const handleSubtract = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
      setPrice(price - frimaryPrice);
    }
  };
  const handleAdd = () => {
    setQuantity(quantity + 1);
    setPrice(price + frimaryPrice);
  };
  const handleModal = () => {
    navigate("/");
    setModal(false);
  };
  return (
    <div className="order-page" data-aos="fade-down">
      {(loadingDetail || loadingPostTicket) === true ? (
        <div className="loading">
          <div className="load"></div>
          <p>loading...</p>
        </div>
      ) : (
        <div></div>
      )}
      <div className="nav" data-aos="fade-right">
        <Navbar />
      </div>
      <div className="form" data-aos="fade-left">
        {modal && (
          <div className="modal">
            <div className="notice">NOTICE</div>
            <div className="success">
              <p>Successfull</p>
            </div>
            <div className="btn">
              <button onClick={handleModal}>OK</button>
            </div>
          </div>
        )}
        <form onSubmit={handleOrder}>
          <label>User </label>
          <input type="text" value={user?.username} readOnly />
          <label>Email</label>
          <input type="email" value={user?.email} readOnly />
          <label>Phone</label>
          <input type="text" value={user?.phone} readOnly />
          <label>Hotel</label>
          <input type="text" value={detail?.name} readOnly />
          <label>Quantity</label>
          <div className="quantity">
            <p onClick={handleSubtract} className="">
              {" "}
              -{" "}
            </p>
            <p>{quantity}</p>
            <p onClick={handleAdd}> + </p>
          </div>
          <label>Price</label>
          <p>{(price * 1000).toLocaleString("vi-VN")} VND</p>
          <button type="submit" className="order-btn">
            OK
          </button>
        </form>
      </div>
      <div className="footer" data-aos="fade-in">
        <Footer />
      </div>
    </div>
  );
};

export default Order;
