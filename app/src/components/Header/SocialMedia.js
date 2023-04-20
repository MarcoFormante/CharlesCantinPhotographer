import React from 'react'
import FacebookLogo from './FacebookLogo.svg'
import InstagramLogo from './InstagramLogo.svg'
import SocialLink from './SocialLink'


const SocialMedia = () => {
  return (
    <div className='social-media__container'>
        <SocialLink href="https://www.facebook.com" logo={FacebookLogo} alt="Visitez ma page Facebook"/>
        <SocialLink href="https://www.instagram.com" logo={InstagramLogo} alt="Visitez ma page Instagram"/>
    </div>
  )
}

export default SocialMedia


