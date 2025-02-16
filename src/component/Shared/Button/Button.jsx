import React from 'react'

export const Button = ({children , handleOnClick , className}) => {
  return (
    <button className={`bg-gradient-to-r to-[#FEB491] from-[#F26828] text-white  px-4 md:px-6 rounded-full shadow-3xl text-[18px]  border-2 border-[#F26828] cursor-pointer ${className}`} onClick={handleOnClick}>{children}</button>
  )
}
