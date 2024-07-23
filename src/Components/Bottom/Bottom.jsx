import React from 'react'
import './Bottom.scss'
import exep from '../../assets/alb0.jpeg'
import play from '../../assets/play.png'
import prev from '../../assets/prev.png'
import next from '../../assets/next.png'
import shuffle from '../../assets/shuffle.png'
import loop from '../../assets/loop.png'
import speaker from '../../assets/speaker.png'
import volume from '../../assets/volume.png'
import zoom from '../../assets/zoom.png'
import mic from '../../assets/mic.png'
import plays from '../../assets/plays.png'
import queue from '../../assets/queue.png'

export default function Bottom() {
  return (
    <div className="BottomContainer">
      <div className="LBottomPart">
        <div className="ImgLB">
          <img src={exep} alt="Img" />
        </div>
        <div className="LBDesc">
          <span className="LBTitle">Name</span>
          <span className="LBName">SuperCoolName</span>
        </div>
      </div>
  
      <div className="MBottomPart">
        <div className="TopMBPart">
          <img src={shuffle} alt="Img" className="TopMBPartBtnWeak" />
          <img src={prev} alt="Img" className="TopMBPartBtn" />
          <img src={play} alt="Img" className="WeirdBtn" />
          <img src={next} alt="Img" className="TopMBPartBtn" />
          <img src={loop} alt="Img" className="TopMBPartBtnWeak" />
        </div>
  
        <div className="BottomMBPart">
          <span className="FirstDigit">0:02</span>
          <div className="TimeBar"></div>
          <span className="SecondDigit">2:28</span>
        </div>
      </div>

      <div className="RBottomPart">
        <img src={plays} alt="" className="RBottomImg" />
        <img src={mic} alt="" className="RBottomImg" />
        <img src={queue} alt="" className="RBottomImg" />
        <img src={speaker} alt="" className="RBottomImg" />
        <img src={volume} alt="" className="RBottomImgSound" />
        <div className="SoundBar">

        </div>
        <img src={zoom} alt="" className="RBottomImg" />
      </div>
    </div>
  )
}
