import React from 'react'
import { Outlet } from 'react-router'

import Nav from '../layout/Nav'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

export default function root() {
  return (
    
    <>
    <div className='container'>
        <Header />
        <Nav />
        <Outlet />
    </div>
    <Footer />
    </>
  )
}
