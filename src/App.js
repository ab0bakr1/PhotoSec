import './App.css';
import Header from "./Component/Header/Header";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About';
import Portfolio from './Component/portfolio/Portfolio';
import Team from './Component/team/Team';
import Contact from './Component/Contact/Contact';
import Footer from './Component/footer/Footer';
AOS.init();

function App() {
  return (
    <div className="App" data-aos="fade-right">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
