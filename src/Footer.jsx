import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='flex justify-around mt-5 bg-slate-300 rounded-2xl p-[50px] '>
            <div className='flex gap-[100px]'>
                <div>
                    <h1 className='font-bold'>Quick Links</h1>
                    <h3 className='first'>About Idealz</h3>
                    <h3 className='first'>My Account</h3>
                    <h3 className='first'>Active Tickets</h3>

                </div>
                <div>
                    <h1 className='font-bold'>Customer Service</h1>
                    <h3 className='first'>Contact Us</h3>
                    <h3 className='first'>FAQs</h3>
                    <h3 className='first'>How it Works</h3>

                </div>
            </div>
            <div >

                <div className='flex gap-[20px]'>
                    <span className='rounded-full hover:bg-orange-400 p-2'><FaFacebookF size={30} /></span>
                    <span className='rounded-full hover:bg-orange-400 p-2'>< FaXTwitter size={30} /></span>
                    <span className='rounded-full hover:bg-orange-400 p-2'>< FaLinkedinIn size={30} /></span>
                    <span className='rounded-full hover:bg-orange-400 p-2'><FaInstagram size={30} /></span>

                </div>
                <span>
                    Download the Idealz app for the <br /> ultimate shopping experience!
                </span>


            </div>
        </div>
    )
}

export default Footer