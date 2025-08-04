import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import AuthButton from '../component/AuthButton/AuthButton'
import bg from "../assets/interest.png";
import { useUpdateUserInfoMutation } from '../redux/Api/AuthApi';
import { toast } from 'sonner';



const interest = [
    "Reading","Cooking","Fitness","Music","Traveling","Hiking","Gardening","Photography","Board Games","Yoga & Meditation","Writing","Bird Watching","Volunteering","DIY & Crafts", "Podcasts", "Painting/ Drawing"
  ];

const Interest = () => {
  const navigate = useNavigate()
    const [updateInterest, { isLoading }] = useUpdateUserInfoMutation();
    const [selected, setSelected] = useState([]);
    // Select item
    const toggleSelect =(field)=>{
        setSelected((prev)=> prev.includes(field) ? prev.filter((item)=> item !== field) :  [...prev , field])
    }

    const handleInterest = ()=>{
      const data = {
        interests: selected,
        isProfileComplete : true
      };
  
      updateInterest(data)
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message)
        
        navigate('/subscription-plan')
      })
      .catch((error) => {
        toast.error(error?.data?.message)
      });
    }


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
      <div className="bg-white shadow-2xl shadow-[#F26828] rounded-md  p-5 md:p-10 col-span-12 md:col-span-5 z-10 mx-2 md:mx-0">
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
        {/* <Link to={"/connection-progress"}> */}
          <AuthButton disabled={isLoading} handleOnClick={()=> handleInterest()} className={"py-2"}>Next</AuthButton>
        {/* </Link> */}
      </div>

      {/* Space after content */}
      <div className="md:col-span-6"></div>
    </div>
  </div>
  )
}

export default Interest