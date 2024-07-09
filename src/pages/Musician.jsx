import React from 'react'

import banner1 from '../assets/images/banner1.png'

export default function Musician() {
  return (
    <div>
      <div className='musician'>
        <aside>
        <iframe width="1292" height="727" src="https://www.youtube.com/embed/HS-4EdrGsf8" title="Scarlett Fagan - Woodbox Session (Bristol Live Music)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </aside>
        <article>
          <p>Having played extensively for 15+ years, James Wickham has built a reputation of being a diverse guitarist that can specialise in a wide-range of genres.</p>
          <p>James has a keen ear for improvisation, having started learning blues music from a young age, inspired by Joe Bonamassa and Derek Trucks. It was around then when he took inspiration from other modern guitar players of that generation such as John Frusciante from the Red Hot Chili Peppers and Tom Morello of Rage Against The Machine, often incorporating heavy distortion and wah pedal solos for fast tempo loud rock tracks.</p>
          <p>In more recent years, James has been inspired to delve into Jazz and Soul music, having recently collaborated with Scarlett Fagan and toured around Bristol city playing both originals and covers from Scarlett's reportoire</p>
        </article>
        
      </div>
      <div className='musician2'>
 
        <article style={{width: '60vw'}}>
          <h2>Heavy rock improv</h2>
          <p>In 2023, James has been working on some live improvisation tracks. This was all recoreded in one live session. </p>
        </article>
        <iframe src="https://open.spotify.com/embed/album/1CGwpBWXYALjBoHGcWt0kh?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  )
}
