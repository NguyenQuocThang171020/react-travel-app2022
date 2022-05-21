import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTicket, getAllUser, getTicket } from "../../redux/apiRequest";
import "./admin.scss";
import moment from "moment";
import AOS from "aos";
import "aos/dist/aos.css";
const Admin = () => {
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.ticket.getTicket?.ticket);
  const user = useSelector((state) => state.user.getAllUser?.currentUser);
  const loadingUser = useSelector((state) => state.user.getAllUser?.isLoading);
  const loadingTicket = useSelector(
    (state) => state.ticket.getTicket?.isLoading
  );
  const loadingDelete = useSelector(
    (state) => state.ticket.deleteTicket?.isLoading
  );
  useEffect(() => {
    getAllUser(dispatch);
    getTicket(dispatch);
  }, []);
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 1000,
      easing: "ease",
    });
  }, []);
  const [active, setActive] = useState("dashboard");
  return (
    <div className="admin">
      <div className="dashboard" data-aos="fade-right">
        <p
          className={active === "dashboard" ? "active" : ""}
          onClick={() => setActive("dashboard")}
        >
          Dashboard
        </p>
        <p
          className={active === "user" ? "active" : ""}
          onClick={() => setActive("user")}
        >
          User
        </p>
      </div>
      <div className="management" data-aos="fade-left">
        {loadingTicket || loadingUser || loadingDelete === true ? (
          <div className="loading">
            <div className="load"></div>
            <p>loading...</p>
          </div>
        ) : (
          <div></div>
        )}
        {active === "dashboard" ? (
          <div className="ticket-container">
            <div className="title-ticket">
              <h3>MANAGEMENT</h3>
            </div>
            {ticket?.length === 0 ? (
              <div>Ticket is empty</div>
            ) : (
              <>
                {ticket?.map((item, index) => {
                  return (
                    <div
                      className="management-ticket"
                      key={index}
                    >
                      <div className="img-ticket">
                        <img src={item.hotel?.image[0]} alt="" />
                      </div>
                      <div className="info">
                        <p>
                          <span>Name :</span> Name :{item.username}
                        </p>
                        <p>
                          <span>Email :</span>
                          {item.email}
                        </p>
                        <p>
                          <span>Phone :</span>
                          {item.phone}
                        </p>
                        <p>
                          <span>Quantity :</span>
                          {item.quantity}
                        </p>
                        <p className="price">
                          <span>Price :</span>
                          {(item.price * 1000).toLocaleString("vi-VN")} VND
                        </p>
                        <p>
                          <span>Created :</span>
                          {moment(item.createAt)
                            .subtract(10, "days")
                            .calendar()}
                        </p>
                      </div>
                      <div className="btn">
                        <button
                          onClick={() => {
                            deleteTicket(dispatch, item._id);
                            getTicket(dispatch);
                          }}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        ) : (
          <div className="user-container" >
            <div className="title-user">
              <h3> ALL USER </h3>
            </div>
            {user?.map((item, index) => {
              return (
                <div className="all-user" key={index} >
                  <p>
                    <span>Name :</span>
                    {item.username}
                  </p>
                  <p>
                    <span>Email :</span>
                    {item.email}
                  </p>
                  <p>
                    <span>Phone :</span>
                    {item.phone}
                  </p>
                  <p>
                    <span>Created :</span>
                    {moment(item.createAt).subtract(10, "days").calendar()}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
