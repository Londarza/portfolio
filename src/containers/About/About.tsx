"use client";
import React, { useEffect, useState } from 'react'
//styles
import './About.scss'

//fetch
import {urlFor, client} from '@/client'
import AppWrap from '@/wrapper/AppWrap';
import MotionWrap from '@/wrapper/MotionWrap';
import { motion } from 'framer-motion'
import Image from 'next/image';
import { IAboutUs } from '@/app/interfaces';



 const About : React.FC = () => {

  const [abouts, setabouts] = useState<IAboutUs[]>([])
  useEffect(() => {
    const query = '*[_type == "abouts"]{title, description, imgUrl{asset->{_id, url}}}'

    client.fetch(query)
      .then((data: IAboutUs[])=>
        setabouts(data))
  }, [])
  
  return (
    <>
    <h2 className='head-text'>
      Se que  tener un 
      <span> buen desarrollo</span>
      <br />
      Significa tener un
      <span> buen negocio</span>
    </h2>
    <div className='app__profiles'>
      {abouts.map((about, index)=>(
       <motion.div
       key={`abouts-${index}`}
       whileInView={{opacity:1}}
       whileHover={{scale:1.1}}
       transition={{duration:0.5, type:'tween'}}
       className='app__profiles-item'
       >
        <Image 
        src={urlFor(about.imgUrl).url()} 
        alt={about.title}
        width={100}
        height={100}
        className='app__profiles-image'
        />
        <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
        <p className='p-text' style={{marginTop:10}}>{about.description}</p>
       </motion.div>
      )
      )}
    </div>
    
    </>
  )
}


export default AppWrap(MotionWrap(About, 'app__about'),'About', 'app_whitebg')