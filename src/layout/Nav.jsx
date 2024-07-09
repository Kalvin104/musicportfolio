import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {



  return (
    <nav className='navbar'>
        <NavLink className='nav-button' id='home' to=''>Home</NavLink>
        <NavLink className='nav-button' id='musician' to='/musician'>Musician</NavLink>
        <NavLink className='nav-button' id='producer' to='/producer'>Producer</NavLink>
        <NavLink className='nav-button' id='tuition' to='/tuition'>Guitar Tuition</NavLink>
    </nav>
  )
}
