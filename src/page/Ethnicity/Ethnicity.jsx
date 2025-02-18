import React, { useState } from 'react'
import { Link } from 'react-router';
import AuthButton from '../../component/AuthButton/AuthButton';
import { Checkbox } from 'antd';
import bg from '../../assets/ethnicity.png'
const options = ["African American / Black", "Asian", "Caucasian/White", "Hispanic/Latino", "Middle Eastern", "Native American" ,  "Pacific Islander" ,"Other"];

const Ethnicity = () => {
    const [selectedBodyType, setSelectedBodyType] = useState([]);
      const [preferredBodyType, setPreferredBodyType] = useState([]);
  
      const handleBodyTypeChange = (checkedValues) => {
          setSelectedBodyType(checkedValues);
        };
      
        const handlePreferredBodyTypeChange = (checkedValues) => {
          setPreferredBodyType(checkedValues);
        };
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
          Ethnicity
        </h1>
        <p className="text-center font-poppins text-[14px]  my-10">
        cultural expression and identification of people of different geographic regions,
 including their customs, history, language, and religion.
        </p>
      
        {/* <p className='text-md text-center'>Please select one</p> */}
        <div className="mb-4">
      <p className="font-semibold">What your body type?</p>
      <p className="text-sm text-gray-500">Please select one</p>
      <Checkbox.Group 
        options={options} 
        value={selectedBodyType} 
        onChange={handleBodyTypeChange} 
        className="flex flex-wrap gap-3 mt-2"
      />


    {/* Preferred Body Type Selection */}
    <div className='my-10'>
      <p className="font-semibold">Preferred Body Type</p>
      <p className="text-sm text-gray-500">Please select one</p>
      <Checkbox.Group 
        options={options} 
        value={preferredBodyType} 
        onChange={handlePreferredBodyTypeChange} 
        className="flex flex-wrap gap-3 mt-2"
      />
    </div>
    </div>
        <Link to={"/bio"}>
          <AuthButton className={"py-1"}>Next</AuthButton>
        </Link>
      </div>

      {/* Space after content */}
      <div className="md:col-span-6"></div>
    </div>
  </div>
  )
}

export default Ethnicity