import React from 'react'
import Logo from '../../images/logo.png'
import './styles.css'

const Architects = () => {
  return (
    <div className='archContainer'>
        <div className="archWrapper">
            <div className="archHeader">
                <img src={Logo} alt="" className='logo'/>
            </div>
            <div className="archHero"></div>
        </div>
    </div>
  )
}

export default Architects