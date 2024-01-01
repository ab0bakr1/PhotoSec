import React from 'react'
import "./Footer.css"
import { Col, Row } from 'react-bootstrap'
import { faLinkedin, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
        <div className='footer-logo'>
            <h1>photo<span>sec</span></h1>
        </div>
        <div className='footer-info'>
            <p>Copyright &copy; 2023. All Rights Reserved</p>
            <p>Designed and developed by Abobakr almashhor</p>
            <div className='footer-socail'>
                <a href='https://www.linkedin.com/in/abobakr-almashhor/' target='_blank'><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href='https://www.facebook.com/profile.php?id=100068290724398' target='_blank'><FontAwesomeIcon icon={faSquareFacebook}/></a>
                <a href='https://github.com/ab0bakr1' target='_blank'><FontAwesomeIcon icon={faSquareGithub}/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer