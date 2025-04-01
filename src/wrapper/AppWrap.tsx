import NavigationDots from '@/components/NavigationDots'
import SocialMedia from '@/components/SocialMedia'
import React from 'react'


const AppWrap = (Component: React.ComponentType, idName: string, classNames: string) => {
  const HOC: React.FC = () => {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
          <Component />
          <div className='copyright'>
            <p className='p-text'>2025 Lautaro Ondarza </p>
            <p className='p-text'>Todos los derechos reservados.</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

  return HOC;
};

export default AppWrap;