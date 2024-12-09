import React from 'react'
import Image from 'next/image'
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <footer className='relative bg-white py-8 px-10 text-gray-700 flex justify-center'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='flex flex-row justify-between items-start'>
                    <Image className="" src={"/Images/Logo Icon.png"} alt='Comforty' height={5} width={40}/><h3 className='ml-2'><b>Comforty</b></h3>
                
                <div  className='mt-10 mr-80 pt-2'>
                <p>Vivamus tristique odio sit amet velit semper,<br />
                    eu posuere turpis interdum. <br />
                    Cras egestas purus </p><br />
                    <div className='flex space-x-4 items-end mr-10 mt-15 '>
                <MdFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaPinterest />
                <FaYoutube />
                </div>
                </div>  
               
                </div>

                <div>
                    <h3 className='text-gray-500 font-bold'>CATEGORY</h3><br />
                    <ul className='text-black'>
                        <li>Sofa</li>
                        <li>Armchair</li>
                        <li>Wing Chair</li>
                        <li><u>Desk Chair</u></li>
                        <li>wooden Chair</li>
                        <li>Park Bench</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-gray-500 font-bold'>SUPPORT</h3><br />
                    <ul className='text-black'>
                        <li>Help & Support</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Help</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-gray-500 font-bold'>NEWSLETTER</h3><br />
                    <div className=''>
                    <textarea className="rounded-lg h-12 w-60 text-xl" name="email" id="Email" placeholder='Your email'></textarea>
                    <button className='solid rounded-lg mx-2 px-6 py-3 bg-cyan-600 text-white text-center align-top'>Subscribe</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam tincidunt erat enim.</p>
                </div>
                    
                    </div>
<div className='mt-10 flex justify-center w-full h-full'>
<p>@ 2021 - Blogy - Designed & Develop by <b>Zakirsoft</b></p> 
    <Image src={"/Images/footer.png"} alt='footer' height={100} width={100} />
    </div>
</div>
</footer>
</div>
  )
}

export default Footer