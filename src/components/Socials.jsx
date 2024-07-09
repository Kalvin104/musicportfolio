import React from 'react'
import { SocialIcon } from 'react-social-icons'

import ReactDOM from 'react-dom'

export default function Socials() {

  return (
    <>
        <div className='socials-container'>
            <SocialIcon url='https://www.instagram.com/beanobeans/'></SocialIcon>
            <SocialIcon url='https://www.threads.net/@beanobeans'></SocialIcon>
            <SocialIcon url='https://linktr.ee/beanobeans'></SocialIcon>
        </div>
    </> 

  )
}
