import React from 'react';
import './TopLeft.scss';

// Import des images
import homeImage from '../../assets/home.png';
import searchImage from '../../assets/search.png';

export const TopLeft = () => {
  return (
    <div className='TopLeftContainer'>
        <div className='TopLeftHome'>
            <img className='HomeImg' src={homeImage} alt="Home" />
            <span className='HomeSpan'>Home</span>
        </div>
        <div className='TopLeftSearch'>
            <img className='SearchImg' src={searchImage} alt="Search" />
            <span className='SearchSpan'>Search</span>
        </div>
    </div>
  );
};

