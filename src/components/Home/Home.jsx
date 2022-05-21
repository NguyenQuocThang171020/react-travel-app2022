import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video from "../../asset/Vietnam - Cinematic SOLO travel.mp4";
import Navbar from "../Navbar/Navbar";
import "./about.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import slide1 from "../../asset/slide1.jpg";
import slide2 from "../../asset/slide2.jpg";
import slide3 from "../../asset/slide3.jpg";
import slide4 from "../../asset/slide4.jpg";
import slide5 from "../../asset/slide5.jpg";
import slide6 from "../../asset/slide6.jpg";
import slide7 from "../../asset/slide7.jpg";
import slide8 from "../../asset/slide8.jpg";
import slide9 from "../../asset/slide9.jpg";
import slide10 from "../../asset/slide10.jpg";
import contact from "../../asset/contact1.png";

import avatar1 from '../../asset/avatar1.jpg'
import avatar2 from '../../asset/avatar2.jpg'
import avatar3 from '../../asset/avatar3.jpg'
import avatar4 from '../../asset/avatar4.jpg'
import avatar5 from '../../asset/avatar5.jpg'
import avatar6 from '../../asset/avatar6.jpg'
import avatar7 from '../../asset/avatar7.jpg'
import avatar8 from '../../asset/avatar8.jpg'
import avatar9 from '../../asset/avatar9.jpg'
import avatar10 from '../../asset/avatar10.jpg'

import "swiper/css";
import "swiper/css/effect-cards";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate= useNavigate()
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 2000,
    });
  }, []);
  return (
    <div className="home">
    <div className="about-container">
      <div className="video-container" data-aos="fade-down">
        <div className="video">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <div className="text" data-aos="fade-right">
            <h1>Let's share moments together</h1>
            <p>What are you waiting for?</p>
            <button onClick={()=>navigate('/tour')}>Les't Go</button>
          </div>
        </div>
        <div className="nav">
          <Navbar />
        </div>
      </div>
      <div className="intro-home" data-aos="fade-in">
        <div className="intro-title">
          <h2>
            Service <span> Offer </span>{" "}
          </h2>
        </div>
        <div className="introduce">
          <div className="intro-text" data-aos="fade-right">
            <p>
              <span>In</span>troduce
            </p>
            <p className="text-intro">
              Let's share moments and preserve memories with family and friends
            </p>
            <button>Start</button>
          </div>
          <div className="intro-img" data-aos="fade-left">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
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
              <SwiperSlide>
                <img src={slide8} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide9} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide10} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="image-cut-container" data-aos="fade-in">
        <div className="image-cut-title">
          <h2>
            <span> About </span> Us{" "}
          </h2>
        </div>
        <div className="image-cut">
          <div className="image-cut-img" data-aos="fade-right">
            <img className="img1" src={slide6} alt="" />
            <img className="img2" src={slide2} alt="" />
          </div>
          <div className="img-cut-text" data-aos="fade-left">
            <h3>Travel Point</h3>
            <h1>We helping you find your dream vacation</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              eaque dolore quasi maiores ratione! Quam a et rem perferendis
              tempora ab, cupiditate impedit neque dolore ex ipsa quaerat, nihil
              maxime.
            </p>
            <div className="btn">
              <p>
                <span>100+</span>
                Holiday Package
              </p>{" "}
              <p>
                <span>201</span>
                Luxury Hotel
              </p>{" "}
              <p>
                <span>120M+</span>
                Sactisfied Traveler
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="contact-home" data-aos="fade-in">
        <div className="contact-intro-title">
          <h2>
            Contact <span> us </span>{" "}
          </h2>
        </div>
        <div className="contact">
          <div className="contact-img" data-aos="fade-right">
            <img src={contact} alt="" />
          </div>
          <div className="contact-from" data-aos="fade-left">
            <form>
              <label>Email</label>
              <input type="email" placeholder="Email..." />
              <label>Phone</label>
              <input type="text" placeholder="Phone..." />
              <label>Subject</label>
              <textarea
                cols={50}
                rows={10}
                type="text"
                placeholder="subject..."
              />
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>
      <div className="review-mobile" data-aos="fade-in">
        <div className="review-intro-title">
          <h2>
            Review from<span> Customer </span>{" "}
          </h2>
        </div>
        <div className="review" data-aos="zoom-in">
          <Splide
            options={{
              perPage: 1,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar1} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar2} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar3} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar4} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar5} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar6} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar7} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar8} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar9} alt="" />
                </div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar10} alt="" />
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <div className="review-home" data-aos="fade-in">
        <div className="review-intro-title">
          <h2>
            Review from<span> Customer </span>{" "}
          </h2>
        </div>
        <div className="review" data-aos="zoom-in">
          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar1} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar2} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar3} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar4} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar5} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar6} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar7} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar8} alt="" />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar9} alt="" />
                </div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="review-all">
                <div className="text-review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, aspernatur vero totam iste temporibus quia culpa
                  et reprehenderit illo. Ab alias et officia minus inventore
                  facilis quisquam illum neque dolorum.
                </div>
                <div className="img-review">
                  <img src={avatar10} alt="" />
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
    <div className='footer'>
    <Footer/>
  </div>
  </div>
  );
};

export default Home;
