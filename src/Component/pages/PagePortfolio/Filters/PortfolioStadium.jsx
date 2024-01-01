import React from 'react'
import Footer from '../../../footer/Footer'
import Header from '../../../Header/Header'
import { Container } from 'react-bootstrap'
import Stadium from '../../../../IMG/stadium1.jpg'
import Stadium2 from '../../../../IMG/stadium2.jpg'
import Stadium3 from '../../../../IMG/stadium3.jpg'
import './Filters.css'
const PortfolioStadium = () => {
  return (
    <>
    <Header />
    <section className='Filters'>
      <Container>
        <div className='Filters-cards'>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Stadium} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Stadium2} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Stadium3} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
        </div>
      </Container>
    </section>
    <Footer />
    </>  )
}

export default PortfolioStadium