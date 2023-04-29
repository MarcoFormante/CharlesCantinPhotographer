import React, { useEffect, useState } from 'react'
import FacebookLogo from './FacebookLogo.svg'
import InstagramLogo from './InstagramLogo.svg'
import SocialLink from './SocialLink'


const SocialMedia = () => {
  

  return (
    <div className='social-media__container'>
      <SocialLink linkName="facebook" href="https//:www.facebook.com" iconImg={FacebookLogo} alt={`Visitez ma page facebook}`} />
      <SocialLink linkName="instagram" href="https//:www.instagram.com"  iconImg={InstagramLogo} alt={`Visitez ma page instagram`} />
    </div>
          
      
  )
}

export default SocialMedia


