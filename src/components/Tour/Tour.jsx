import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import tour from '../../asset/order.jpg'
import logoTour from '../../asset/logo-tour.png'
import './tour.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTour } from '../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';
const Tour = () => {
  const dispatch = useDispatch()
  const navigate =useNavigate()
  const tour1 = useSelector((state)=>state.tour.getAllTour?.currentTour)
  const loading = useSelector((state)=>state.tour.getAllTour?.isLoading)
  useEffect(()=>{
    getAllTour(dispatch)
  },[])
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 1000,
      easing: "ease",
    });
  }, []);
  return (
    <div className='tour-page'>
      {(loading === true) && (
        <div className="loading">
          <div className="load"></div>
          <p>loading...</p>
        </div>
      )}
        <div className='nav' data-aos='fade-down'>
          <img src={tour} alt="" />
          <div className='text' data-aos='fade-right'>
              <h1>Enjoy Your Dream Vacation</h1>
              <p>We always make our customer happy by providing many choices </p>
              <img src={logoTour} alt="" />
          </div>
          <div className='nav-detail' data-aos='fade-down'>
             <Navbar />
          </div>
        </div>
        <div className='tour-title'>
            TOURS
        </div>
        <div className='tour'data-aos='zoom-in'>
            {tour1?.map((item,index)=>{
              return (
                <div className='tour-all' key={index} data-aos='fade-right' >
                    <div className='tour-name'>
                      <h3>{item.title}</h3>
                    </div>
                    <div className='tour-desc'>
                      <p>{item.desc}</p>
                    </div>
                    <div className='tour-image' data-aos='fade-right'>
                        {item?.image.map((img,index)=>
                          <img src={img} alt="" key={index} />
                        )}
                    </div>
                    <div className='button'>
                          <button onClick={()=>navigate(`/hotel/${item._id}`)}>Hotel</button>
                    </div>
                </div>
              )
            })}
        </div>
        <div className='footer' data-aos='fade-in'>
            <Footer/>
        </div>
    </div>
  )
}

export default Tour