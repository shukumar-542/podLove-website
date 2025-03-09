import React from 'react'
import video from '../../assets/videoPlayback.mp4'
import { Button } from '../Shared/Button/Button'
const HeroSection = () => {
  return (
    <section className="relative w-full md:h-[80vh] flex items-center justify-center">
    {/* Background Video */}
    <video
      className="absolute top-0 left-0 w-full h-full  md:object-fill"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black opacity-30 z-0 pointer-events-none"></div>

    {/* Hero Content */}
    <div className="relative z-10 text-white text-center space-y-5">
      <h1 className="md:text-4xl leading-10 font-poppins font-semibold max-w-6xl">Join a space where love is honest and meaningful. 
      </h1>
      <p className='text-2xl md:text-4xl pb-10'>Ready for love?</p>
      {/* <p className="mt-4 md:text-[32px] font-poppins mb-10 max-w-[550px] text-[#FEFEFE] mx-auto">Join a space where love is honest and meaningful. 
      Ready for love?</p> */}
      <Button className={'text-[30px] py-3 px-6'}>Find your Match</Button>
    </div>

    {/* Overlay (Optional for readability) */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
  </section>
  )
}

export default HeroSection