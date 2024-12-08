import React from 'react'
import Image from 'next/image'

const Top = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl my-10'>Top Categories</h1>
      <div className='mr-40 ml-40 flex space-x-9'>
        <Image src="/Images/Category.png" alt='product' height={424} width={424}/>
        <Image src="/Images/Category (1).png" alt='product' height={424} width={424}/>
        <Image src="/Images/Category (2).png" alt='product' height={424} width={424}/>
    
      </div>
    </div>
  )
}

export default Top