import React from 'react'
import "./Contact.css"
import { Col, Row } from 'react-bootstrap'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <section id='Contact' className='contact'>
        <Row xl={2} lg={1} style={{width:"100%"}}>
            <Col xl={8} lg={12} className='contact-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4624.170112040914!2d40.43783385072735!3d21.826823439766365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa!4v1703090505682!5m2!1sar!2ssa" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
            <Col className='Contact-info' xl={4} lg={12}>
                <h2>contact us</h2>
                <div className="contact-item">
                  <span><FontAwesomeIcon icon={faLocationDot} />Saudi Arabia, Jeddah</span>
                  <span><FontAwesomeIcon icon={faPhone} />+96655555555</span>
                  <span><FontAwesomeIcon icon={faEnvelope} />abobakralmshhor@gmail.com</span>
                </div>
                <div className="contact-socail">
                  <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
                  <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </Col>
        </Row>
    </section>
  )
}

export default Contact