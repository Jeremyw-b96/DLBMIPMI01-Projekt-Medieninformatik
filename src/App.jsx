import { useState } from 'react'

// Internal assets
import './App.css'
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import Team from './components/Team';


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Mission />
    <Team />
    <Services />
    <Timeline />
    <Connect />
    <Footer />
    </>
  )
}

export default App