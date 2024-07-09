import React from 'react'
import banner1 from '../assets/images/pic_a.jpg'
import Socials from '../components/Socials'
import Artists from '../components/Artists'

export default function Homepage() {
  return (
    <main>
      <div style={{display: 'flex'}}>
        <div>
          <img id='home-banner' src={banner1} alt=''></img>
        </div>
        <div id='home-container'>
            <p>James Wickham is a professional Guitarist and Producer / Audio Engineer based in Bristol.
            <br></br><br></br>
            Having spent most of his life playing both electric and acoustic guitar and exploring a wide-variety of genres, particularly in the Rock and Metal genres, James fell in love with his passion of live music. Having attending Reading and Download festival as a teenager and then countless small local gigs across the country, James fell in love live music performances and interesting soundscapes.
            <br></br><br></br>
            With 15+ years experience studying and playing guitar, James has spent his years in Bristol performing all around the city at local venues such as the Exchange, Crofters Rights, Ill Repute and many more.

            </p>
        </div>
      </div>
      <Artists />
    </main>
  )
}
