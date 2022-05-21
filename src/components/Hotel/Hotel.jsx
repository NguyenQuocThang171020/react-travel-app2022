import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar/Navbar";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import slide1 from "../../asset/hotel1.jpg";
import slide2 from "../../asset/hotel2.jpg";
import slide3 from "../../asset/hotel3.jpg";
import slide4 from "../../asset/hotel4.jpg";
import slide5 from "../../asset/hotel5.jpg";
import slide6 from "../../asset/hotel6.jpg";
import slide7 from "../../asset/hotel7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../Footer/Footer";
import "./hotel.scss";
import { getHotel } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
const Hotel = () => {
  const hotel = useSelector(
    (state) => state.hotel.getHotel?.currentHotel?.hotel
  );
  const loading = useSelector(
    (state) => state.hotel.getHotel?.isLoading
  );
  SwiperCore.use([Autoplay]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 1000,
      easing: "ease",
    });
  }, []);
  const params = useParams();
  useEffect(() => {
    getHotel(dispatch, params.id);
  }, []);
  return (
    <div className="hotel-page">
      {(loading === true) ?(
        <div className="loading">
          <div className="load"></div>
          <p>loading...</p>
        </div>
      ):<div></div>}
      <div className="slide-show" data-aos="fade-down">
        <div className="slide">
          <Swiper
            loop={true}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          >
            <SwiperSlide>
              <img src={slide1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide7} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="nav" data-aos="fade-in">
          <Navbar />
        </div>
      </div>
      <div className="hotel-title" data-aos="zoom-in-up">
        HOTEL
      </div>
      <div className="list-hotel" data-aos="zoom-in">
        {hotel?.map((item, index) => {
          return (
            <div className="hotel-all" key={index} data-aos="fade-down">
              <div className="img-hotel" data-aos="fade-right">
                <img src={item.image[0]} alt="" />
              </div>
              <div className="info-hotel" data-aos="fade-left">
                <div className="hotel-name">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <p className="price">{item.price} VND</p>
                  {item.state === "Hết phòng" ? (
                    <p className="terrible">{item.state}</p>
                  ) : (
                    <p className="good">{item.state}</p>
                  )}
                </div>
                <div className="btn-more">
                  <button onClick={() => navigate(`/detail/${item._id}`)}>
                    More Image
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer" data-aos="fade-in">
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
