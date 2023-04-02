import React from 'react'
import { Link } from 'react-router-dom'

const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px',
    listStyle: 'none'
  };

export default function Navbar() {
  return (
    <nav style={navStyle} className='nav'>
        <img src='pokeballLogo' alt='pokeball' />
        <ul>
        <Link to='/'><li style={linkStyle}>Home</li></Link>
        <Link to='/pokemon'><li style={linkStyle}>Pokemon</li></Link>
        <Link to='/locations'><li style={linkStyle}>Locations</li></Link>
        <Link to='berries'><li style={linkStyle}>Berries</li></Link>
        </ul>
      
    </nav>
  )
}
