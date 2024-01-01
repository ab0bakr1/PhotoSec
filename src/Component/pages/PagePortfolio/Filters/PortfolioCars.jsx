import React from 'react'
import Footer from '../../../footer/Footer'
import { Container } from 'react-bootstrap'
import Header from '../../../Header/Header'
import './Filters.css'
import car1 from '../../../../IMG/car1.jpg'
import car2 from '../../../../IMG/car2.jpg'

const PortfolioCars = () => {
  return (
    <>
    <Header />
    <section className='Filters'>
      <Container>
        <div className='Filters-cards'>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={car1} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={car2} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
        </div>
      </Container>
    </section>
    <Footer />
    </>  )
}

export default PortfolioCars