"use client"

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className='relative flex justify-left bg-white text-gray-800 font-inter size-14px h-12 py-0 px-40 align-top gap-10 mt-0 mr-10'>
            <div><Link href="/" className='hover:text-blue-600'>Home</Link></div>
            <div><Link href="/shop" className='hover:text-blue-600'>Shop</Link></div>
            <div><Link href="/product" className='hover:text-blue-600'>Product</Link></div>
            <div><Link href="/pages" className='hover:text-blue-600'>Pages</Link></div>
            <div><Link href="/about" className='hover:text-blue-600'>About</Link></div>
            <div><p className='ml-80 flex'>Contact: (808) 555-0111</p></div>
        </nav>
        
    </div>
  )
}

export default Navbar