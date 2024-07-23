import React from 'react'
import './MiddleElements.scss'
import firstCover from '../../assets/img1.jpg'
import { PopRadiojs } from '../../assets/assets'
import { Artistsjs } from '../../assets/assets'
import { PopularAlbumsjs } from '../../assets/assets'
import { PasManquer } from '../../assets/assets'

export default function MiddleElements() {
  return (
    <div className="ElementsContainer">
      <div className="MadeFor">
        <div className="topSongContainer">
          <span className="Mid">Made For raph</span>
        </div>
        <div className="FullLign">
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
        </div>
      </div>

      <div className="PopularRadio">
            <div className="topSongContainer">
              <span className="Mid">Popular radio</span>
              <span className="MidRightSpan">Show all</span>
            </div>
            <div className="FullLign">
                {PopRadiojs.map((radio) => (
                    <div className="SongContainer" key={radio.id}>
                        <img src={radio.image} alt={radio.name} className="Cover"/>
                        <span className="Title">{radio.name}</span>
                        <span className="artists">{radio.desc}</span>
                    </div>
                ))}
            </div>
        </div>
      
      <div className="RecentlyPlayed">
        <div className="topSongContainer">
          <span className="Mid">Recently played</span>
          {/* <span className="MidRightSpan">Show all</span> */}
        </div>
        <div className="FullLign">
          <div className="SongContainer">
            <img src={firstCover} alt="Img" className="Cover"/>
            <span className="Title">Daily Mix 1</span>
            <span className="artists">Mitroglou</span>
          </div>
        </div>
      </div>

      <div className="PopularArtists">
        <div className="topSongContainer">
          <span className="Mid">Popular artists</span>
          <span className="MidRightSpan">Show all</span>
        </div>
        <div className="FullLign">
          {Artistsjs.map((artistss) => (
            <div className="SongContainer" key={artistss.id}>
              <img src={artistss.image} alt="Img" className="CoverArtist"/>
              <span className="Title">{artistss.name}</span>
              <span className="artists">{artistss.desc}</span>
            </div>
          ))}
        </div>
      </div>
    
      <div className="PopularAlbums">
        <div className="topSongContainer">
          <span className="Mid">Popular albums</span>
          <span className="MidRightSpan">Show all</span>
        </div>
        <div className="FullLign">
          {PopularAlbumsjs.map((popalb) => (
          <div className="SongContainer" key={popalb.id}>
            <img src={popalb.image} alt="Img" className="Cover"/>
            <span className="Title">{popalb.name}</span>
            <span className="artists">{popalb.desc}</span>
          </div>
          ))}
        </div>
      </div>

      <div className="NotMiss">
        <div className="topSongContainer">
          <span className="Mid">A ne pas manquer</span>
          <span className="MidRightSpan">Show all</span>
        </div>
        <div className="FullLign">
          {PasManquer.map((missjs) => (
          <div className="SongContainer" key={missjs.id}>
            <img src={missjs.image} alt="Img" className="Cover"/>
            <span className="Title">{missjs.name}</span>
            <span className="artists">{missjs.desc}</span>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
