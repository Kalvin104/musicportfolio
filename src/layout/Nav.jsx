import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='navbar'>
        <NavLink className='tab' id='home' to=''>Home</NavLink>
        <NavLink className='tab' id='musician' to='/musician'>Musician</NavLink>
        <NavLink className='tab' id='producer' to='/producer'>Producer</NavLink>
        <NavLink className='tab' id='tuition' to='/tuition'>Guitar Tuition</NavLink>
    </nav>
  )
}
