import React from 'react'
import Footer from '../../../footer/Footer'
import Header from '../../../Header/Header'
import { Container } from 'react-bootstrap'
import Conference from '../../../../IMG/conference1.jpg'
import Conference2 from '../../../../IMG/conference2.jpg'
import Conference3 from '../../../../IMG/conference3.jpg'
import './Filters.css'


const PortfolioConference = () => {
  return (
    <>
    <Header />
    <section className='Filters'>
      <Container>
        <div className='Filters-cards'>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Conference} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Conference2} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Conference3} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
        </div>
      </Container>
    </section>
    <Footer />
    </>  )
}

export default PortfolioConference