import video from '../../assets/videoplayback.mp4'
import { Button } from '../Shared/Button/Button'
import { useNavigate } from 'react-router'

const HeroSection = () => {
  const token = localStorage.getItem("podlove-token");
  const nagivate = useNavigate();
  const handleClick = () => {
    if (!token) {
      nagivate("/sign-up");
    } else {
      nagivate("/home");
    }
  }

  return (
    <section className="relative w-full h-[40vh] md:h-[80vh] flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full  object-fill"
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
      <div className=" z-10 text-white text-center space-y-5 mt-10 mb-4">
        <h1 className="md:text-4xl md:leading-10 font-poppins font-semibold max-w-6xl ">PodLove, Blind-Match Video-Podcast Dating for Grown Folks
        </h1>
        {/* <h1 className="md:text-4xl md:leading-10 font-poppins font-semibold max-w-6xl ">Join a space where love is honest and meaningful.
        </h1> */}
        <p className='text-2xl md:text-4xl md:pb-10'>Ready for love?</p>
        {/* <p className="mt-4 md:text-[32px] font-poppins mb-10 max-w-[550px] text-[#FEFEFE] mx-auto">Join a space where love is honest and meaningful. 
      Ready for love?</p> */}
        <Button handleOnClick={handleClick} className={'md:text-[30px] py-3 px-6'}>Find your Match</Button>
      </div>

      {/* Overlay (Optional for readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
    </section>
  )
}

export default HeroSection