import React from 'react'
import Navbar from './Navbar.jsx'
import SearchBar from './SearchBar.jsx'

const Header = () => {
  return (
    <div>
      <SearchBar/>
      <Navbar/>
    </div>
  )
}

export default Header