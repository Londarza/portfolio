"use client";
import React from 'react'
//styles
import './About.scss'
import images from '@/constants/constants'


import { motion } from 'framer-motion'
import Image from 'next/image';

const abouts = [
  { title: 'Web developer', description: 'Soy un gran desarrollador full stack orientado al frontend', urlIMG: images.about01},
  { title: 'Front end', description: 'React, NextJs, Vite, Typescript, Tailwind Css, SCSS, Framer Motion, React Native', urlIMG: images.about02},
  { title: 'Back end', description: 'NodeJs, ExpressJs, modelo MVC, Typescript', urlIMG: images.about03},
  { title: 'Data Base', description: 'PostgreSQL, Sequelize, MySQL, MongoDB, Mongoose', urlIMG: images.about04},
]
export const About = () => {
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
        src={about.urlIMG} 
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
