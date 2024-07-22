import React from 'react'
import './MiddleElements.scss'
import firstCover from '../../assets/img1.jpg'

export default function MiddleElements() {
  return (
    <div className="ElementsContainer">
      <div className="MadeFor">
        <span className="Mid">Made For raph</span>
        <div className="FullLign">
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
        </div>
      </div>
      <div className="PopularRadio">
        <span className="Mid">Popular radio</span>
        <div className="FullLign">
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
        </div>
      </div>
      <div className="RecentlyPlayed">
        <span className="Mid">Recently played</span>
        <div className="FullLign">
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
        </div>
      </div>
      <div className="PopularArtists">
        <span className="Mid">Popular artists</span>
        <div className="FullLign">
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
        </div>
      </div>
      <div className="PopularAlbums">
        <span className="Mid">Popular albums</span>
        <div className="FullLign">
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
        </div>
      </div>
      <div className="NotMiss">
        <span className="Mid">A ne pas manquer</span>
        <div className="FullLign">
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
        </div>
      </div>
    </div>
  )
}
