"use client";
import React from 'react'
//styles
import './Header.scss'
import { motion } from 'framer-motion'
import images from '@/constants/constants'
import Image from 'next/image';
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100,0], opacity:[0,1]}}
      transition={{duration:1.5}}
      className='app__header-info'
      >

        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>
              👋
            </span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hola! Soy </p>
              <h1 className='head-text'>Lautaro</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Full Stack Dev </p>
            <p className='p-text'>Front-End ReactJs, NextJs </p>
          </div>
        </div>

      </motion.div>
      
      <motion.div
       whileInView={{opacity:[0,1]}}
       transition={{duration:1.5, delayChildren:0.5}}
       className='app__header-img'>

        <Image src={images.profile} alt="profile-img" />
        <motion.img
         whileInView={{scale:[0,1]}}
         transition={{duration:1.5, ease:'easeInOut'}}
         className='overlay_circle'
         src={images.circle}
         alt='profile_circle'>
          
         </motion.img>
      </motion.div>

      <motion.div
       whileInView={{opacity:[0,1]}}
       transition={{duration:1.5, delayChildren:0.5}}
       className='app__header-info'>

      </motion.div>
    </div>
  )
}

export default Header