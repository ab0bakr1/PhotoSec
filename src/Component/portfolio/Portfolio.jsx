import React from 'react'
import "./Portfolio.css"
import Portfolio1 from "../../IMG/Portfolio1.jpg"
import Portfolio2 from "../../IMG/Portfolio2.jpg"
import Portfolio3 from "../../IMG/Portfolio3.jpg"
import Portfolio4 from "../../IMG/Portfolio4.jpg"
import Portfolio5 from "../../IMG/Portfolio5.jpg"
import Portfolio6 from "../../IMG/Portfolio6.jpg"
import Portfolio7 from "../../IMG/Portfolio7.jpg"
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PagePortfolio from '../pages/PagePortfolio/PagePortfolio'

const Portfolio = () => {
  return (
    <section id='Portfolio' className='Portfolio mt-5 pt-5'>
        <Container style={{textAlign:"center"}}>
            <h2 className="text-center font-bold">Portfolio</h2>
            <Row>
                <div class="Portfolio-box1">
                    <div className='Portfolio-img'>
                        <img src={Portfolio1} style={{width:"100%",height:"100%"}} alt="" />
                    </div>
                    <div className='Portfolio-img'>
                        <img src={Portfolio2} style={{width:"100%",height:"100%"}} alt="" />
                    </div>
                    <div className='Portfolio-img'>
                        <img src={Portfolio6} style={{width:"100%",height:"100%"}} alt="" />
                    </div>
                </div>
                <div className='Portfolio-img2'>
                        <img src={Portfolio5} style={{width:"100%",height:"100%"}} alt="" />
                </div>
                <div class="Portfolio-box1">
                    <div className='Portfolio-img'>
                        <img src={Portfolio4} style={{width:"100%",height:"100%"}} alt="" />
                    </div>
                    <div className='Portfolio-img'>
                        <img src={Portfolio3} style={{width:"100%",height:"100%"}} alt="" />
                    </div>
                    <div className='Portfolio-img'>
                        <img src={Portfolio7} style={{width:"100%",height:"100%"}} alt="" />
                    </div>
                </div>
            </Row>
            <Link to="/Portfolio" className='mt-5' href="">see more</Link>
        </Container>
    </section>
    )
}

export default Portfolio