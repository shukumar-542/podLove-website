import React, { useState } from 'react'
import { Link } from 'react-router'
import AuthButton from '../component/AuthButton/AuthButton'
import bg from "../assets/interest.png";


const interest = [
    "Cooking", "Travel", "Gym",
    "Books", "Photo", "Yoga",
    "Films", "Tennis", "Games",
    "Cooking", "Travel", "Gym",
    "Books", "Photo", "Yoga",
    "Films", "Tennis", "Games"
  ];

const Interest = () => {
    const [selected, setSelected] = useState([]);
    // Select item
    const toggleSelect =(field)=>{
        setSelected((prev)=> prev.includes(field) ? prev.filter((item)=> item !== field) :  [...prev , field])
    }

    console.log(selected);


  return (
    <div
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      imageRendering: "high-quality",
    }}
    className="h-[100vh]  relative "
  >
    {/* Opacity section */}
    <div className="bg-black absolute opacity-50 inset-0 z-0 "></div>
    {/* Grid divide by 12 column */}
    <div className="grid grid-cols-12 items-center justify-center h-full w-full container mx-auto">
      <div className="  md:col-span-1"></div>
      {/* Main content */}
      <div className="bg-white  rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
        <h1 className="text-center font-poppins font-semibold text-4xl">
        Interests
        </h1>
        <p className="text-center max-w-80 mx-auto mt-2">Tell others more about yourself to boost your profile and increase your sales</p>
      
        <div className='grid grid-cols-2  md:grid-cols-3 my-10 gap-5'>
            {
                interest?.map((field , index)=>(
                    <button onClick={()=> toggleSelect(field)} key={index} className={`border border-[#FFB491] font-poppins rounded-xl py-2 transition-all duration-300  ${selected.includes(field) ? "bg-[#FFB491] "  :""}`}>{field}</button>
                ))
            }
        </div>
        <Link to={"/connection-progress"}>
          <AuthButton className={"py-1"}>Next</AuthButton>
        </Link>
      </div>

      {/* Space after content */}
      <div className="md:col-span-6"></div>
    </div>
  </div>
  )
}

export default Interest