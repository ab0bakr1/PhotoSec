import React from 'react'
import Footer from '../../../footer/Footer'
import Header from '../../../Header/Header'
import { Container } from 'react-bootstrap'
import Exhibition from '../../../../IMG/exhibition1.jpg'
import Exhibition2 from '../../../../IMG/exhibition2.jpg'
import Exhibition3 from '../../../../IMG/exhibition3.jpg'
import Exhibition4 from '../../../../IMG/exhibition4.jpg'
import './Filters.css'

const PortfolioExhibition = () => {
  return (
    <>
    <Header />
    <section className='Filters'>
      <Container>
        <div className='Filters-cards'>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Exhibition} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Exhibition2} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Exhibition3} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Exhibition4} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
        </div>
      </Container>
    </section>
    <Footer />
    </>  )
}

export default PortfolioExhibition