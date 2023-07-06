import React from 'react'
import Header from "../components/Layout/Header.jsx"
import Footer from "../components/Layout/Footer.jsx"
import Hero from "../components/Layout/Hero.jsx"
import Products from "../components/Layout/Products.jsx"

const Homepage = () => {
  return (
    <div>
        <Header />
        <Hero/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Homepage