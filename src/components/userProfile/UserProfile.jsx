import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.png'

import Data from '../../users.json'
import { FaFilePdf } from "@react-icons/all-files/fa/FaFilePdf";
import { RiArrowGoBackFill } from "@react-icons/all-files/ri/RiArrowGoBackFill";


import './styles.css'

const UserProfile = (props) => {
  const navigate = useNavigate()
    const {userId} = useParams()
 
    let userMatch = userId - 1
    
  
  return (
    <div className="userProfileContainer">
      <div className="userHeaderWrapper">
            <div className="userHeader">
                <img src={Logo} alt="" className='logo'/>
            </div>
            <div className="userHero"></div>
        </div>
      <div className="userProfileWrapper">
        <div className="userProfileCard">
          <div className="userProfileHeader">
            <button onClick={() => navigate(-1)} className='userCardBack'><RiArrowGoBackFill/></button>
            <div>
              <img className="userImage" src={Data[userMatch].image} alt="" />
            </div>
            <div className="userName">{Data[userMatch].name}</div>
          </div>
          <div className="userProfileHero">
            <div className='heroTitles'>Projects</div>
              
                {Data[userMatch]?.projects.map((res) => (
                    <div className="experienceType projects" key={res.shopping_mall}><a rel='noreferrer' href={res.shopping_mall} target='_blank'><FaFilePdf/>{res.project_title + '.pdf'}</a></div>      
                ))}
              
          
            <div className="experienceType">
              <div className="heroTitles">Experiences</div>
              {Data[userMatch]?.experience.map(res => 
              <div className="experienceType" key={res.company}><li>{res.years} years {res.company}</li></div>
                )}
            </div>
            <div className="experienceType">
            <div className="heroTitles">Skills</div>
              {Data[userMatch]?.skills.map(res => 
              <div className="experienceType" key={res}><li>{res}</li></div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile