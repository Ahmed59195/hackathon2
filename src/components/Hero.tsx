import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='mr-40 ml-40 bg-gray-200 h-200 w-100'>
      <h1 className='pt-40 flex align-middle justify-left pl-40 text-left font-bold text-6xl size-70'>Best Furniture <br />
Collection for Your <br />
interior.</h1>
<div>
<Image className="flex justify-end" src="/Images/Product Image.png" alt='Product' height={584} width={434}/>
</div>

    </div> 
  )
}

export default Hero