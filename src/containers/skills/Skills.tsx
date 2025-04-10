"use client"
import React, { useEffect, useState } from 'react'
//styles
import './Skills.scss'
import {Tooltip} from 'react-tooltip'
import { motion } from 'framer-motion'
import AppWrap from '@/wrapper/AppWrap'
import MotionWrap from '@/wrapper/MotionWrap'
import { urlFor, client } from '@/client'
import Image from 'next/image'
import { IExperience, ISkill } from '@/app/interfaces'


const Skills = () => {
  const [experiences, setexperiences] = useState<IExperience[]>([])
  const [skills, setSkills] = useState<ISkill[]>([])

  useEffect(() => {
    const expQuery = '*[_type == "experiences"]{year, works[]{name, company, desc}}';

    const skillsQuery = '*[_type == "skills"]{name, bgColor, icon{asset->{_id, url}}}';

    client.fetch(expQuery)
      .then((data: IExperience[]) => {
        console.log('experiences',data);
        const sortedData = data.sort((a, b) => Number(b.year) - Number(a.year));
        setexperiences(sortedData)
      })
    client.fetch(skillsQuery)
      .then((data: ISkill[]) => {
        setSkills(data)
      })

      
  }, [])

  return (
    <>
      <h2 className='head-text'> Skills y Experiencias</h2>


      {/* skills seccion*/}
      <div className='app__skills-container'>
        <motion.div className='app__skills-list' >
          {skills?.map((skill, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
            >

              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <Image
                  className='app__skills-image'
                  src={urlFor(skill.icon).url()}
                  alt={skill.name}
                  width={300}
                  height={200}
                />

              </div>
              <p className='p-text'> {skill.name}</p>
            </motion.div>



          ))



          }
        </motion.div>


        {/* experience seccion*/}

        <div className="app__skills-exp">
          {experiences?.map((experience,index) => (
            <motion.div
              className="app__skills-exp-item"
              key={index+experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work,index) => (
                  <React.Fragment key={index + work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                      key={index}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      style={{ backgroundColor: '#000', color: '#fff' }}
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </>
  )
}


export  default AppWrap(MotionWrap(Skills, 'app__skills') , 'Skills', 'app_whitebg')