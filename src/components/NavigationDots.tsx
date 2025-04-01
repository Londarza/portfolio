import { NavigationDotsProps } from '@/app/interfaces'
import React from 'react'

const NavigationDots : React.FC<NavigationDotsProps> = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['Home', 'About', 'Work' , 'Skills','Testimonials','Contact'].map((item, index) => (
        
          <a 
          key={index}
          className='app__navigation-dot'
          style={active === item ? {backgroundColor:'#313bac' }:{}}
          href={`#${item}`} 
          />
        
      ))}

    </div>
  )
}

export default NavigationDots