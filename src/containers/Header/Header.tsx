"use client";
import React from 'react'
//styles
import './Header.scss'
import { motion } from 'framer-motion'
import images from '@/constants/constants'
import Image from 'next/image';
import circle from '../../app/assets/circle.svg'
//import { duration } from '@mui/material';
import AppWrap from '@/wrapper/AppWrap';

//variants 

const scaleVariants = {
  whileInView:{
    scale: [0,1],
    opacity:[0,1],
    transition:{
      duration:1, 
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >

        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>
              👋
            </span>
            <div style={{ marginLeft: 20 }}>
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
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'>

        <Image src={images.profile} alt="profile-img" className='header-img-Image' />
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
        >
          <Image src={circle} alt="profile_circle" width={200} height={200} className="overlay_circle" />
        </motion.div>
      </motion.div>

      <motion.div
       variants={scaleVariants}
       whileInView={scaleVariants.whileInView}
       className='app__header-circles'
        >
          {
            [images.flutter, images.redux, images.sass].map((circle, index)=>(
              <div className='circle-cmp app__flex' key={`circle-${index}`}>
                <Image src={circle} alt="circle" className='circle-images'/>
              </div>
            ))
          }
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'Home', )