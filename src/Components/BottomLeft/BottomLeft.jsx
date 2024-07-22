import React from 'react'
import './BottomLeft.scss'
import stack from '../../assets/stack.png';
import arrow from '../../assets/arrow.png';
import plus from '../../assets/plus.png';

export default function BottomLeft() {
  return (
    <div className="BlContainer">
        <div className="top">
            <div className="LeftPart">
                <img className='stack' src={stack} alt="Stack" />
                <span className='Lib'>Your Library</span>
            </div>
            <div className="RightPart">
                <img className='plus' src={plus} alt="Plus" title='Create your playlist or folder'/>
                <img className='arrow' src={arrow} alt="Arrow" title='Show more'/>
            </div>
        </div>
        <div className="Create">
            <div className="CreatePlayList">
                <span className='firstspan'>Create your first playlist</span>
                <span className='secondspan'>Its easy, we'll help you</span>
                <button className='BlButton'>Create playlist</button>
            </div>
            <div className="Podcasts">
                <span className='firstspan'>Lets find some podcasts to follow</span>
                <span className='secondspan'>We'll keep you updated on new episodes</span>
                <button className='BlButton'>Browse podcasts</button>
            </div>
        </div>
    </div>
  )
}
