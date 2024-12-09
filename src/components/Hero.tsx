import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
    <div className='mr-40 ml-40 bg-gray-200 h-200 w-100 flex justify-between px-20 py-20'>
      <h1 className='pt-40 flex align-middle justify-left pl-40 text-left font-bold text-6xl size-70'>Best Furniture <br />
Collection for Your <br />
interior.</h1>

<Image className="flex justify-end" src="/Images/Product Image.png" alt='Product' height={584} width={434}/>

</div>

</div>
  )
}

export default Hero