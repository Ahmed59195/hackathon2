import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl my-10 flex justify-center'>All Products</h1>
    <div className='mr-40 ml-40 flex flex-row space-x-9'>
      <Image src="/Images/Products.png" alt='product' height={377} width={312}/>
      <Image src="/Images/Products (1).png" alt='product' height={377} width={312}/>
      <Image src="/Images/Products (2).png" alt='product' height={377} width={312}/>
      <Image src="/Images/Products (3).png" alt='product' height={377} width={312}/>
      </div>
      <div className='mr-40 ml-40 flex flex-row space-x-9'>
      <Image src="/Images/Product Image.png" alt='product' height={377} width={312}/>
      <Image src="/Images/Category.png" alt='product' height={377} width={312}/>
      <Image src="/Images/Category (2).png" alt='product' height={377} width={312}/>
      <Image src="/Images/card (3).png" alt='product' height={377} width={312}/>
      </div>
    </div>
  )
}

export default page