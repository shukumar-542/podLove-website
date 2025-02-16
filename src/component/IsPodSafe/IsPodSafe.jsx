import React from 'react'
import bg from "../../assets/isSafe.png";
const IsPodSafe = () => {
  return (
    <div style={{backgroundImage : `url(${bg})`}}>
      <div className='container mx-auto text-white py-10 px-4 md:px-0'>
        <h1 className='text-2xl font-bold mb-5'>Is PodLove Safe?</h1>
        <p className='max-w-[690px] leading-7'>PodLove is the most secure and trusted platform for every loving person.. With encrypted servers, PCI-compliant security, and advanced third-party firewalls, your data and payment information remain protected from any threats. No other platform offers the same level of security and reliability as Pod Love.</p>
      </div>
    </div>
  )
}

export default IsPodSafe