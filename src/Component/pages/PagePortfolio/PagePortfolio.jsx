import React from 'react'
import "./PagePortfolio.css"
import Header from "../../Header/Header"
import Footer from "../../footer/Footer"
import { Container } from 'react-bootstrap'
import Cafe from '../../../IMG/Cafe1.jpg'
import boat from '../../../IMG/boat1.jpg'
import car from '../../../IMG/car1.jpg'
import conference from '../../../IMG/conference1.jpg'
import events from '../../../IMG/events1.jpg'
import exhibition from '../../../IMG/exhibition1.jpg'
import masjid from '../../../IMG/masjid1.jpg'
import products from '../../../IMG/products1.jpg'
import restaurant from '../../../IMG/restaurant1.jpg'
import sea from '../../../IMG/sea1.jpg'
import stadium from '../../../IMG/stadium1.jpg'
import trip from '../../../IMG/trip1.jpg'
import { Link } from 'react-router-dom'

const PagePortfolio = () => {
  return (
    <>
    <Header />
    <section className='PagePortfolio'>
      <Container>
        <div className='PagePortfolio-cards'>
          <Link to="/Portfolio/Cafe" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>Cafe</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={Cafe} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
          <Link to="/Portfolio/boat" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>boat</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={boat} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
          <Link to="/Portfolio/cars" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>cars</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={car} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
          <Link to="/Portfolio/conference" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>conference</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={conference} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
          <Link to="/Portfolio/events" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>events</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={events} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
          <Link to="/Portfolio/exhibition" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>exhibition</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={exhibition} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
          <Link to="/Portfolio/masjid" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>masjid</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={masjid} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
          <Link to="/Portfolio/products" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>products</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={products} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
          <Link to="/Portfolio/restaurant" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>restaurant</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={restaurant} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
          <Link to="/Portfolio/sea" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>sea</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={sea} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
          <Link to="/Portfolio/stadium" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>stadium</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={stadium} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
          <Link to="/Portfolio/trip" className="PagePortfolio-card">
            <div className='PagePortfolio-info'>
              <h3>trip</h3>
            </div>
            <div className='PagePortfolio-img'>
              <img src={trip} style={{height:"100%",width:"100%"}} />
            </div>
          </Link>
        </div>
      </Container>
    </section>
    <Footer />
    </>
    )
}

export default PagePortfolio