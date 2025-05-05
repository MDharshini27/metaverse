import React from 'react'
import BannerPng from '/src/assets/banner1.png';
import { BiPlayCircle} from "react-icons/bi";

const Banner = ({togglePlay}) => {
  return (
    <div className=" py-0 md:py-6 relative">
    <div className='container'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-0 place-items-center pr-0 md:pr-18'>
            <div>
                <img src={BannerPng} alt="" className='max-w-[300px]' />
            </div>
  <div className='space-y-5 order-2 sm:order-1 lg:pr-18 text-white pl-4 md:pl-0 md:relative'>
  <h1 className="text-3xl font-semibold">
    GET READY TO ENJOY VR{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#00C2FF] to-[#DD0BFF]">
      MOVIES WITH OUR PLATFORM
    </span>
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam asperiores distinctio impedit eius nisi qui laborum velit ipsum nihil quibusdam!
  </p>
  <div className='flex gap-6'>
    <button className='primary-btn'>
        Get Started
    </button>
    <button onClick={togglePlay} className='flex items-center gap-2 cursor-pointer '>
        {" "}
        <BiPlayCircle className='text-3xl' />
        See Demo
    </button>
  </div>
  <div className='h-[250px] w-[250px] bg-gradient-to-r from-[#00C2FF] to-[#DD0BFF] rounded-full absolute  blur-3xl opacity-50 md:left-[400px] bottom-[150px] md:bottom-[10px]'></div>
</div>
</div>
</div>
</div>
  )
}

export default Banner
