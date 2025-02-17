import React from 'react'

const AuthButton = ({children , handleOnClick , className}) => {
  return (
    <button className={`bg-gradient-to-t to-[#F69568] from-[#D46836] w-full  text-white  px-4 md:px-6 rounded-md shadow-3xl text-[18px]  cursor-pointer ${className}`} onClick={handleOnClick}>{children}</button>
  )
}

export default AuthButton