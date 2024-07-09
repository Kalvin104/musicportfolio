import React from 'react'
import Socials from '../components/Socials'

export default function Header() {
  return (
    <header style={{display: 'flex', gap: '50px'}}>
        <div>JAMES WICKHAM</div>
        <Socials />
    </header>
  )
}
