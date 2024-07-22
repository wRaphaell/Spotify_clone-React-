import { useState } from 'react'
import './App.css'
import { TopLeft } from './Components/TopLeft/TopLeft'
import BottomLeft from './Components/BottomLeft/BottomLeft'
import Bottom from './Components/Bottom/Bottom'
import Middle from './Components/Middle/Middle'

function App() {

  return (
    <>
      <TopLeft />
      <BottomLeft />
      <Bottom/>
      <Middle/>
    </>
  )
}

export default App

