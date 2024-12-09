import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='mx-20 my-20'>
      <h1  className='font-bold text-2xl flex justify-start mb-10'>Bag</h1>
      <div className='mb-10 flex'>
      <Image className='mr-10' src={"/Images/Frame (1).png"} alt='p1' height={150} width={150}/>
      <div>
      <p className='mb-10'>Library Stool Chair</p>
  
      <p className='mb-5'>Ashen Slate/Cobalt Bliss</p>

      <p>Size L</p>
      <p>Quantity 1</p>
      </div>
      </div>

      <div className='space-y-5 flex'>
      <Image className='mr-10' src={"/Images/Frame.png"} alt='p1' height={150} width={150}/>
      <div>
      <p className='mb-10'>Library Stool Chair</p>
  
      <p className='mb-5'>Ashen Slate/Cobalt Bliss</p>

      <p>Size L</p>
      <p>Quantity 1</p>
      </div>
      </div>

    </div>
  )
}

export default page