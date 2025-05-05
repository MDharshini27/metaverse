import React , {useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Quotes from './components/Quotes/Quotes'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Features from './components/Features/Features'
import AppStore from './components/AppStore/AppStore'
import Footer from './components/Footer/Footer'
import PopUpPlayer from './components/PopUpPlayer/PopUpPlayer'

const App = () => {
  const [isPlay ,setIsPlay] =useState(false);

  const togglePlay =() =>{
    setIsPlay(!isPlay);
  };
  return (
    <main className='overflow-x-hidden bg-black'>
      <Navbar />
      <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Features />
      <AppStore />
      <Footer />
      <PopUpPlayer isPlay={isPlay} togglePlay={togglePlay}/>
    </main>
  )
}

export default App


