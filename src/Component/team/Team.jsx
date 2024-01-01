import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Team.css"
import team1 from "../../IMG/team1.jpg"
import team2 from "../../IMG/team2.jpg"
import team3 from "../../IMG/team3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Team = () => {
  return (
    <section id='Team' className='mt-5 pt-5 team'>
        <Row xl={2} lg={1} style={{width:"100%"}}>
          <Col className='team-info' xl={4} lg={12} style={{backgroundColor:"#A24218"}}>
            <h3 className="text-center">The team</h3>
            <p className="text-center">Our team of experts are here to help you with any questions or concerns.</p>
          </Col>
          <Col className='team-box' xl={8} lg={12}>
            <div className="team-img">
              <img src={team1} style={{width:"100%",height:"100%"}} />
              <div className='team-name'>
                <h3>John Doe</h3>
                <div className='team-socail'>
                  <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
                  <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              </div>
            </div>
            <div className="team-img">
              <img src={team2} style={{width:"100%",height:"100%"}} />
              <div className='team-name'>
                <h3>Abobakr Almashhor</h3>
                <div className='team-socail'>
                  <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
                  <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              </div>
            </div>
            <div className="team-img">
              <img src={team3} style={{width:"100%",height:"100%"}} />
              <div className='team-name'>
                <h3>Ali Saleh</h3>
                <div className='team-socail'>
                  <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
                  <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
    </section>
  )
}

export default Team