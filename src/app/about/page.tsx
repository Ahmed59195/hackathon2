import React from 'react'
import Image from 'next/image'
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { PiPlantLight } from "react-icons/pi";


const page = () => {
  return (
    <div>
    <div className='flex justify-center items-center h-full w-full space-x-5'>
    <div className='bg-teal-600 w-1/2 h-80 ml-20'>
<h1 className='flex justify-center font-bold tex-5xl text-white pt-2'>About Us - Comforty</h1>
<p className='text-sm mt-10 ml-5 px-30 text-white'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
<button className='solid text-white text-sm mx-10 my-10 bg-teal-500 px-5 py-3'>View collection</button>
</div>

<div className=''>
<Image src={"/Images/Image Block.png"} alt='image' height={478} width={619}/>
</div>

</div>

<div><h1 className='mt-10 text-2xl font-bold flex justify-center'>What makes our Brand Different</h1>
<div className='mx-40 my-10 flex justify-between'>
 <div className='h-30 w-80 mx-10 bg-slate-100 text-teal-500'> 
 <TbTruckDelivery className='size-5'/>
 <h3 className='mb-5'>Next day as standard</h3>
 <p>Order before 3pm and get your order the next day as standard</p>
 </div>

  <div className='h-30 w-80 mx-10 bg-slate-100 text-teal-500'>
    <CiCircleCheck className='size-5'/>
    <h3 className='mb-5'>Made by true artisans</h3>
  <p>Handmade crafted goods made with real passion and craftmanship</p>
  </div>

 <div className='h-30 w-80 mx-10 bg-slate-100 text-teal-500'>
 <MdOutlinePayment className='size-5'/>
 <h3 className='mb-5'>Unbeatable prices</h3>
 <p>For our materials and quality you won’t find better prices anywhere</p>
 </div>

 <div className='h-30 w-80 mx-10 bg-slate-100 text-teal-500'>
 <PiPlantLight className='size-5'/>
 <h3 className='mb-5'>Recycled packaging</h3>
 <p>We use 100% recycled to ensure our footprint is more manageable</p>
 </div>
  </div>
</div>

<div className='mx-20'>
  <h1 className='flex justify-start font-bold text-2xl mb-10'>Our Popular Products</h1>
</div >
<div className='flex justify-center space-x-5' >
<Image className='' src={"/Images/Product Card.png"} alt='p1' height={462} width={630} />
<Image className='' src={"/Images/Product Card (1).png"} alt='p1' height={462} width={305} />
<Image className='' src={"/Images/Product Card (2).png"} alt='p1' height={462} width={305} />
</div>
</div>

  )
}

export default page