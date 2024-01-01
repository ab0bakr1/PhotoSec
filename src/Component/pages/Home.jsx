import React from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../footer/Footer'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Portfolio from '../portfolio/Portfolio'
import Team from '../team/Team'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <>
     <Header />
     <Hero />
     <About />
     <Portfolio />
     <Team />
     <Contact />
     <Footer />
    </>
  )
}

export default Home