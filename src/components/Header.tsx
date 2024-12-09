import React from 'react'
import Image from 'next/image'
import { FaCheck } from "react-icons/fa6";
import { BsCartDash } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div>
        <header>
    
    <div className="relative w-[1920px] h-[203px] left-0 top-0 flex flex-col items-center p-0 bg-white">
<div className="relative w-[1920px] h-[45px] flex flex-row justify-between items-center p-[14px_300px] gap-[798px] bg-[#272343]">
<div className="flex flex-row items-center gap-[8px] m-auto w-[255px] h-[16px] opacity-70">
  <div className="w-[16px] h-[16px]"></div>
  <p className="w-[231px] h-[14px] text-[13px] leading-[110%] text-white capitalize font-inter">
    
  <FaCheck className='flex items-start' />
    Free shipping on all orders over $50
  </p>
</div>

<div className="flex flex-row items-start gap-[24px] m-auto w-[202px] h-[17px] opacity-70">
  <p className="w-[24px] h-[17px] text-[13px] leading-[130%] text-center text-white font-inter">ENG
  <RiArrowDropDownLine className='flex'/>
  </p>

  <div className="w-[7px] h-[3.5px]"></div>

  <div className="flex flex-row items-center gap-[6px] w-[41px] h-[17px]">
  <p className="w-[28px] h-[17px] text-[13px] leading-[130%] text-center text-white font-inter">Faq</p>
  <div className="w-[7px] h-[3.5px]"></div>
</div>

  <div className="flex flex-row items-start gap-[6px] w-[87px] h-[17px]">
  <div className="w-[16px] h-[16px] opacity-70"></div>
  <p className="w-[65px] h-[17px] text-[13px] leading-[130%] text-center text-white font-inter"><BsExclamationCircle className='flex items-center space-x-2'/>
  Need Help</p>
</div>

</div>

  </div>

  
  <div className='bg-gray-200 h-20 w-full pt-5 flex justify-around'>
  <div className='flex'>
    <Image className="h-10 w-50" src={"/Images/Vector.png"} alt='Comforty' height={10} width={50}/>
    <h1 className='font-bold text-4xl'>Comforty</h1>
    </div>
    <div><button className='flex items-center justify-between px-4 h-10 w-30 solid rounded-lg bg-white text-black '><BsCartDash className='flex justify-center' />Cart <p className='bg-blue-400 text-white tex-sm solid px-2 rounded-full'> 2</p></button>
    
    </div>
    </div>
</div>

</header>

</div> )
}

export default Header

