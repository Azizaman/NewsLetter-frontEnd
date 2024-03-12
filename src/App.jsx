import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Analytics } from './components/Analytics'
import { NewsLetter } from './components/NewsLetter'
import {Footer} from './components/Footer'
import { Cards } from './components/Cards'




function App() {
  

  return (
    <>
      <NavBar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App
