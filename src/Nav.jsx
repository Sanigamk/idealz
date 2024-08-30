import React from 'react'
import logo from "../src/logo.webp"

const Nav = () => {
  return (
    <div className='bg-white h-[50px] w-[100%] shadow-2xl shadow-slate-400 rounded-xl flex items-center justify-between'>
        <div className='p-2'>
            <img className="w-24" src={logo} alt="name"/>
        </div>
        <div className='flex gap-[20px]'>
            <p>need help?Contact us</p>
            <a href='' className=' text-blue-800 font-bold'>Call 0800-idealz</a>
            <div className='w-[2px] bg-black'></div>
            <select name="" id="">
                <option value="">aus</option>
                <option value="">ind</option>

            </select>            
            <div className='w-[2px] bg-black'></div>
            <p className='hover:text-orange-500'>Arab</p>
            <div className='w-[2px] bg-black'></div>
            <button className='hover:text-orange-500' >register/login</button>
        </div>
        
    </div>
  )
}

export default Nav