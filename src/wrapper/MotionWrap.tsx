import React from 'react'
import {motion} from 'framer-motion'
const MotionWrap = (Component:React.FC, classNames:string) => function HOC(): JSX.Element {
  return (
    <motion.div
    whileInView={{opacity:[0,0,1], y:[100,50,0]}}
    transition={{duration:0.6}}
    className={`${classNames} app__flex`}>
        <Component/>
    </motion.div>
  )
}


export default MotionWrap