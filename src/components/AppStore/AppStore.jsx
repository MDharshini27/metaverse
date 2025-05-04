import React from 'react'
import AppStorePng from '/src/assets/website/app_store.png';
import PlayStorePng from '/src/assets/website/play_store.png';


const AppStore = () => {
  return (
    <>
    <div className='container text-white max-h-[150px] md:max-h-[200px] pb-20'>
        <div className='space-y-6 max-w-xl mx-auto'>
        <h1 className='text-2xl text-center
         sm:text-4xl font-semibold'>Get Started with our app</h1>
        <p className='text-center '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        magnam harum accusantium odit?
        </p>
        <div className='flex flex-wrap justify-center items-center flex-row gap-4'>
            <a href="#">
                <img src={AppStorePng} alt="" className='w-[40vw] md:max-w-[10vw]'/>
            </a>
            <a href="#">
                <img src={PlayStorePng} alt="" className=' w-[40vw] md:max-w-[10vw]' />
            </a>
        </div>
        </div>
    </div>
    </>
  )
}

export default AppStore
