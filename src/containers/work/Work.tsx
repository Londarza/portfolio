"use client"

import React from 'react'
//styles
import './Work.scss'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AppWrap from '@/wrapper/AppWrap'
import { urlFor, client } from '@/client'
import Image from 'next/image'
import MotionWrap from '@/wrapper/MotionWrap'
import { IWork } from '@/app/interfaces'
import Link from 'next/link'



const Work = () => {

  const [activeFilter, setactiveFilter] = useState<string>('all')
  const [animateCard, setanimateCard] = useState<{ y: number; opacity: number }>({ y: 0, opacity: 1 })

  const [works, setWorks] = useState<IWork[]>([])
  const [filterWork, setFilterWork] = useState<IWork[]>([])

  useEffect(() => {
    const query = '*[_type == "works"]{title, description, imgUrl{asset->{_id, url}}, projectLink, codeLink, tags}';
    client.fetch(query)
      .then((data :IWork[]) => {
        setWorks(data)
        setFilterWork(data)
      })

  }, [])
  
  
  const handleWorkFilter = (item :string ) =>{
    setactiveFilter(item)
    setanimateCard({y:100, opacity: 0})

    setTimeout(() => {
      setanimateCard({y:0, opacity: 1})
      if (item === 'Todos') {
        setFilterWork(works)
      }else{
        setFilterWork(works.filter((work)=>work.tags.includes(item)))
      }
    }, 500);
  }

  return (
    <>
      <h2 className='head-text'>
        Un vistazo
        <span> a todos</span>
        <br />
        mis proyectos
        <span> principales</span>
      </h2>

      <div className='app__work-filter'>
        {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'NextAuth', 'LandBot', 'maptiler','Stripe','SweetAlert 2','Context API','js-cookie','JWT','React Native','Expo', 'Expo-av','ViteJs','Redux','Axios', 'Styled Components', 'TypeORM', 'Todos'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {
          filterWork.map((work, index) => (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app__flex'>
                <Image
                  src={urlFor(work.imgUrl).url()}
                  alt={work.title}
                  width={300}
                  height={200}
                  className="app__work-image-IMG"
                />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <Link
                    href={work.projectLink}
                    rel='noreferrer'>

                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </Link>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
            </div>
          ))

        }
      </motion.div>


    </>
  )
}


export default AppWrap(MotionWrap(Work, 'app__works') , 'Work', 'app__primarybg')