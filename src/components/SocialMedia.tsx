import Link from 'next/link'
import React from 'react'
import {BsGithub, BsLinkedin, BsBriefcase } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://github.com/Londarza' target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        </div>
        <div>
            <a href="https://linkedin.com/in/lautaro-ondarza/" target="_blank" rel="noopener noreferrer" ><BsLinkedin/></a>
        </div>
        <div>
           <Link href="/"><BsBriefcase/></Link> 
        </div>
    </div>
  
    
  )
}

export default SocialMedia