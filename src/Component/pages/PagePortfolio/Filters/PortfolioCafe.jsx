import React from 'react'
import Footer from '../../../footer/Footer'
import Header from '../../../Header/Header'
import { Container } from 'react-bootstrap'
import Cafe from '../../../../IMG/Cafe1.jpg'
import Cafe2 from '../../../../IMG/Cafe2.jpg'
import Cafe3 from '../../../../IMG/Cafe3.jpg'
import Cafe4 from '../../../../IMG/Cafe4.jpg'
import Cafe5 from '../../../../IMG/Cafe5.jpg'
import './Filters.css'

const PortfolioCafe = () => {
  return (
    <>
    <Header />
    <section className='Filters'>
      <Container>
        <div className='Filters-cards'>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Cafe} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Cafe2} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Cafe3} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Cafe4} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
          <div className='Filters-card'>
            <div className='Filters-img'>
              <img src={Cafe5} style={{height:"100%",width:"100%"}} />
            </div>
          </div>
        </div>
      </Container>
    </section>
    <Footer />
    </>
  )
}

export default PortfolioCafe