import React from 'react'
import Footer from '../../../footer/Footer'
import Header from '../../../Header/Header'
import { Container } from 'react-bootstrap'
import Sea from '../../../../IMG/sea1.jpg'
import Sea2 from '../../../../IMG/sea2.jpg'
import Sea3 from '../../../../IMG/sea3.jpg'
import Sea4 from '../../../../IMG/sea4.jpg'
import './Filters.css'

const PortfolioSea = () => {
  return (
    <>
    <Header />
    <section className='Filters'>
      <Container>
        <div className='Filters-cards'>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Sea} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Sea2} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Sea3} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Sea4} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
        </div>
      </Container>
    </section>
    <Footer />
    </>  )
}

export default PortfolioSea