import React from 'react'
import { Col, Row } from 'react-bootstrap'
import about from '../../IMG/about.jpg'
import "./About.css"

const About = () => {
  return (
    <section id='About' className='about' style={{backgroundColor:"#A24218"}}>
        <Row md={1} xl={2} className='w-100'>
            <Col md={12} xl={8} className='about-img'>
              <img src={about} style={{height:"100%",width:"100%"}}/>
            </Col>
            <Col md={12} xl={4} style={{backgroundColor:"#A24218"}}>
              <div className='about-info'>
                <h2>about us</h2>
                <p>Capture the Moment is a photography and video company that specializes in creating stunning visual content for any occasion. Whether you need a professional photographer or videographer for your wedding, corporate event, family portrait, or personal project, we have the skills and experience to deliver high-quality results.</p>
                <a href="#">read more</a>
              </div>
            </Col>
          </Row>
    </section>
  )
}

export default About