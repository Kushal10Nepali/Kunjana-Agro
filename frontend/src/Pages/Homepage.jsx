import React from 'react'
import Header from "../components/Layout/Header.jsx"
import Footer from "../components/Layout/Footer.jsx"
import Hero from "../components/Layout/Hero.jsx"
import ContactUs from "../components/Layout/ContactUs.jsx"
import Services from "../components/Layout/Services.jsx"

const Homepage = () => {
  return (
    <div>
        <Header />
        <Hero/>
        <Services/>
        
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Homepage