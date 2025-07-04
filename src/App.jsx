import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Layout/Header'
import Main from './Layout/Main'
import Footer from './Layout/Footer'
// import ParticlesBackground from './components/ParticlesBackground'
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';


function App() {
  return (
    <>
    {/* <ParticlesBackground></ParticlesBackground> */}
    <Header></Header>
    <Main></Main>
    <Footer></Footer>

    </>
  )
}

export default App
