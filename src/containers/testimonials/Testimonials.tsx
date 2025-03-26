"use client"
//externals
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
//styles
import './Testimonials.scss'
//internals

import AppWrap from '@/wrapper/AppWrap'
import MotionWrap from '@/wrapper/MotionWrap'
import { urlFor, client } from '@/client'
import Image from 'next/image'


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [brands, setBrands] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)


  useEffect(() => {
    const testimonialsQuery = `*[_type == "testimonials"]{
      name, 
      company, 
      feedback, 
      "imageUrl": imageURL.asset->url
    }`;

    const brandsQuery = `*[_type == "brands"]{
      name, 
      "imgUrl": imgUrl.asset->url
    }`;

    client.fetch(testimonialsQuery)
      .then((data) => {
        console.log('experiences', data);

        setTestimonials(data)
      })
    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data)
      })


  }, [])

  const test = testimonials[currentIndex]
  const handleOnClick = (index: number) => { setCurrentIndex(index) }
  return (
    <>
      {testimonials.length && (<>
        <div className='app__testimonial-item app__flex'>
          <Image
            src={urlFor(test.imageUrl).url()}
            alt={test.name}
            width={300}
            height={300}
            className='app__testimonial-item-img'
          />
          <div className='app__testimonial-content'>
            <p className='p-text'>{test.feedback}</p>
            <div></div>
          </div>
          <h4 className='bold-text'>{test.name}</h4>
          <h5 className='p-text'>{test.company}</h5>
        </div>
        <div className='app__testimonial-btns app__flex'>
          <div className='app__flex' onClick={() => handleOnClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
          </div>

          <div className='app__flex' onClick={() => handleOnClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
          </div>
        </div>

        <div  className='app__testimonials-brands app__flex'>
        {brands.map((brand)=>(
          <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5, type:'tween'}}
            key={brand.name}
          >
              <Image 
              src={urlFor(brand.imgUrl).url()}
              alt={brand.name}
              width={300}
              height={300}
              className='app__testimonials-brands-img'
              
              />
          </motion.div>

        ))}
        </div>
      </>)}


    </>
  )
}


export default AppWrap(MotionWrap(Testimonials, 'app__testimonials'), 'Testimonials', 'app__primarybg') 