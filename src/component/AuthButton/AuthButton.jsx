import React from 'react'

const AuthButton = ({children , handleOnClick , className}) => {
  return (
    <button className={`bg-gradient-to-t from-[#3E0A0A] via-[#EF8559]  to-[#FFA175] w-full  text-white  px-4 md:px-6 shadow-inner shadow-white border border-[#EF8559] rounded-md shadow-3xl text-[18px]  cursor-pointer ${className}`} onClick={handleOnClick}>{children}</button>
  )
}

export default AuthButton

