import React from 'react'
import './Middle.scss'
import leftarrow from '../../assets/left_arrow.png';
import rightarrow from '../../assets/right_arrow.png';
import bell from '../../assets/bell.png';
import logo from '../../assets/spotify_logo.png';
import Elements from './MiddleElements.jsx'

export default function Middle() {
  return (
    <div className="MiddleContainer">
      <div className="TopMiddle">
        <div className="TopLeftMiddle">
          <button className="LeftArrow">
            <img src={leftarrow} alt="ButtonImg"/>
          </button>
          <button className="RightArrow">
            <img src={rightarrow} alt="ButtonImg" />
          </button>
        </div>
        <div className="TopRightMiddle">
          <button className="BlButton">Explore Premium</button>
          <button className="Bell">
            <img className='base' src={bell} alt="ButtonImg" />
          </button>
          <button className="Friend"></button>
          <button className="User">
            <img className='spe' src={logo} alt="ButtonImg" />
          </button>
        </div>
      </div>
      <div className="TopBottom">
        <button className="TBbtn">All</button>
        <button className="TBbtn">Music</button>
        <button className="TBbtn">Podcasts</button>
      </div>
      <Elements/>
    </div>
  )
}
