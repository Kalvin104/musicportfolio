import React from 'react'
import pic_c from '../assets/images/pic_c.jpg'

import Socials from '../components/Socials'

export default function Tuition() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{marginLeft: '40px'}}>
        <h3>I offer Guitar tuition online and locally in Bristol BS7</h3>
        <p>Please get in contact via Instagram or via jpwickham@hotmail.co.uk</p>
        <img src={pic_c}></img>  
      </div>
      <div>
        <p>Rates: £30ph</p>
        <p>Lessons can be conducted remotely via Zoom / Teams / Google Meets or done in person.</p>
      </div>
    </div>
  )
}
