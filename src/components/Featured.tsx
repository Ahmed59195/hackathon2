import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl my-10'>Featured Products</h1>
      <div className='mr-40 ml-40 flex space-x-9'>
        <Image src="/Images/Products.png" alt='product' height={377} width={312}/>
        <Image src="/Images/Products (1).png" alt='product' height={377} width={312}/>
        <Image src="/Images/Products (2).png" alt='product' height={377} width={312}/>
        <Image src="/Images/Products (3).png" alt='product' height={377} width={312}/>

    
      </div>
    </div>
  )
}

export default Featured