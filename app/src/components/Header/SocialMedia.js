import React, { useEffect, useState } from 'react'
import FacebookLogo from './FacebookLogo.svg'
import InstagramLogo from './InstagramLogo.svg'
import SocialLink from './SocialLink'
import getDataUrl from '../../GetData'


const SocialMedia = () => {
  const [socialIcons, setSocialIcons] = useState();
 
  const formdata = new FormData();
  formdata.append("table","ph_icons")
  fetch("https://trueappwork.000webhostapp.com/ph_get_data.php", {
    method: "POST",
    body:formdata
  }).then(data => data.text()).then(data => {
    setSocialIcons(data.split("||").slice(0, -1))
  })
  
  

  return (
    <div className='social-media__container'>
      
      {
        socialIcons && socialIcons.map(function (icon, index) {
        console.log(icon.split("$$$")[0].toLowerCase());
          return(
            <SocialLink key={icon + index} href={`https://www.${icon.split("$$$")[0].toLowerCase()}.com`} logo={icon.split("$$$")[1]} alt={`Visitez ma page ${icon.split("$$$")[0]}`} />
          )
        })}
        
    </div>
  )
}

export default SocialMedia


