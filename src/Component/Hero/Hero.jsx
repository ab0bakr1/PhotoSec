import React, { useRef, useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "./Hero.css"
import { Col, Row, } from 'react-bootstrap';
import hero1 from "../../IMG/hero.jpg"
import hero2 from "../../IMG/hero2.jpg"
import hero3 from "../../IMG/hero3.jpg"
import hero4 from "../../IMG/hero4.mp4"
// import required modules
import { Navigation } from 'swiper/modules';

const Hero = () => {
  return (
    <section id='Home'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Row md={1} xl={2} >
            <Col md={12} xl={4}>
              <div className='hero-info'>
                <h2>Photographic studio</h2>
                <p>To photograph celebrations, weddings and events in a professional and flexible manner</p>
                <a href="#">read more</a>
              </div>
            </Col>
            <Col md={12} xl={8} className='hero-img' >
              <img src={hero1} style={{height:"100%",width:"100%"}}/>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row md={1} xl={2} >
            <Col md={12} xl={4}>
              <div className='hero-info'>
                <h2>Photographic studio</h2>
                <p>A professional and cooperative team for all occasions</p>
                <a href="#">read more</a>
              </div>
            </Col>
            <Col md={12} xl={8} className='hero-img' >
              <img src={hero2} style={{height:"100%",width:"100%"}}/>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row lg={1} xl={2} >
            <Col lg={12} xl={4}>
              <div className='hero-info'>
                <h2>Photographic studio</h2>
                <p>To photograph celebrations, weddings and events in a professional and flexible manner</p>
                <a href="#">read more</a>
              </div>
            </Col>
            <Col lg={12} xl={8} className='hero-img' >
              <video autoPlay loop muted playsInline src={hero4} style={{height:"100%",width:"100%",objectFit:"cover"}} />
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row lg={1} xl={2} >
            <Col lg={12} xl={4}>
              <div className='hero-info'>
                <h2>Photographic studio</h2>
                <p>To photograph celebrations, weddings and events in a professional and flexible manner</p>
                <a href="#">read more</a>
              </div>
            </Col>
            <Col lg={12} xl={8} className='hero-img'>
              <img src={hero3} style={{height:"100%",width:"100%"}}/>
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero