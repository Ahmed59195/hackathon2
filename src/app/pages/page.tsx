import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { TfiCup } from "react-icons/tfi";
import { LuBadgeCheck } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";


const page = () => {
  return (
    <div>
      <div className='mt-20 mb-10 font-bold text-2xl text-black bg-white h-100 w-100 flex justify-center'>Get In Touch With Us</div>
      <p className='flex justify-center mb-30'>For More Information About Our Product & Services. Please Feel Free To Drop Us An <br /> Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

<div className='mx-40 my-20'>
  <div className='mb-10'>
  <FaLocationDot className='size-8' />
  <h1 className='font-bold text-xl'>
  Address
</h1>
<p>236 5th SE Avenue, New York NY10000, United States</p>
</div>

<div className='mb-10'>
<FaPhoneFlip className='size-6' />
<h1 className='font-bold text-xl'>Phone</h1>
<p>Mobile: +(84) 546-6789
Hotline: +(84) 456-6789</p></div>

<div>
<FaClock className='size-7'/>
<h1 className='font-bold text-xl'>Working Time</h1>
<p>Monday-Friday: 9:00 - 22:00
Saturday-Sunday: 9:00 - 21:00</p>
</div>
</div>

<div className='h-70 w-100 mx-40 mt-20 bg-slate-100 flex justify-around'>
  <div>
  <TfiCup className='size-5' /><h1 className='font bold text-xl text-black'>High Quality</h1>
  <p>crafted from top materials</p>
  </div>

  <div>
  <LuBadgeCheck className='size-5'/>
    <h1 className='font bold text-xl text-black'>Warranty Protection</h1>
    <p>Over 2 years</p>
  </div>
  
  <div>
  <MdSupportAgent className='size-5'/>
    <h1 className='font bold text-xl text-black'>24 / 7 Support</h1>
    <p>Dedicated support</p>
  </div>

</div>
</div>
    
    
  )
}

export default page