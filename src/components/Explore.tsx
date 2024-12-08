import React from 'react'
import Image from 'next/image'

const Explore = () => {
  return (
    <div><h1 className='rotate-90 flex justify-end items-start'>EXPLORE NEW AND POPULAR STYLES</h1>
    <div className='mr-40 ml-40'>
      <Image src="/Images/item-category 1 (1).png" alt='product' height={648} width={648}/>
      </div>
      <div className='mr-40 ml-40 flex space-x-9'>
      <Image src="/Images/card (4).png" alt='product' height={312} width={312}/>
      <Image src="/Images/card (3).png" alt='product' height={312} width={312}/>
      <Image src="/Images/card (1).png" alt='product' height={312} width={312}/>
      <Image src="/Images/card (2).png" alt='product' height={377} width={312}/>
     </div>
  </div>
  )
}

export default Explore