import React from 'react'
import HeroPng from '/src/assets/hero.png';
import { BiPlayCircle} from "react-icons/bi";

const Hero = ({togglePlay}) => {
  return (
    <>
    <div className='bg-black text-white py-2 md:py-16 overflow-hidden duration-300 '>
      <div className="container min-h-[300px] flex relative">
        <div className='grid grid-cols-1 sm:grid-cols-2  gap-8 md:gap-28 place-items-center relative z-10 pt-4 pl-4 md:pl-8 pr-2 md:pr-0'>
            <div className='space-y-5 order-2 sm:order-1'>
              <h1 className="text-4xl font-semibold">
                GET READY TO ENJOY VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#00C2FF] to-[#DD0BFF]">
                  GAMES WITH OUR PLATFORM
                </span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam asperiores distinctio impedit eius nisi qui laborum velit ipsum nihil quibusdam!
              </p>
              <div className='flex gap-6'>
                <button className='primary-btn'>
                    Get Started
                </button>
                <button onClick={togglePlay} className='flex items-center gap-2 cursor-pointer'>
                    {" "}
                    <BiPlayCircle className='text-3xl' />
                    See Demo
                </button>
              </div>
            </div>
            <div className='order-1 sm:order-2 md:absolute md:right-0 pr-14'>
                <img src={HeroPng} alt="" className=' w-96 md:w-80 '/>
            </div>
        </div>
        <div className='h-[250px] w-[250px] bg-gradient-to-r from-[#00C2FF] to-[#DD0BFF] rounded-full  blur-3xl animated-wrapper'></div>
      </div>
    </div>
    </>
  )
}

export default Hero
