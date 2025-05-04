import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Quotes from './components/Quotes/Quotes'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Features from './components/Features/Features'
import AppStore from './components/AppStore/AppStore'
import Footer from './components/Footer/Footer'
// import AOS from "aos";
// import "aos/dist/aos.css";


const App = () => {
  return (
    <main className='overflow-x-hidden bg-black'>
      <Navbar />
      <Hero />
      <Quotes />
      <Banner />
      <Banner2 />
      <Features />
      <AppStore />
      <Footer />
    </main>
  )
}

export default App


