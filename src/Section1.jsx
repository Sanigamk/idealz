import React from 'react'
import sectionImg from '../src/hello.png'
import img2 from '../src/img2.webp'
import img3 from '../src/blkcar.webp'
import './App.css'


const Section1 = () => {
    return (
        <>
            <div className='p-1 mt-6'>
                <img className='rounded-[25px]' src={sectionImg} alt="section" />
            </div>
            <div className='mt-5'>
                <h1 className='font-bold text-2xl'>Popular Campaigns</h1>
                <div className='flex pt-7 justify-between items-center'>
                    <div>
                        <img className='h-44' src={img2} alt="section1" />
                    </div>
                    <div className=' rounded-[25px] w-[36rem] h-[176px] hello flex justify-start items-center pl-[50px]'>
                        <h2 className='text-white font-bold '>FOLLOW IDEALS WHATSUPP CHANNEL</h2>
                    </div>
                </div>

            </div>
            <div>
                <h1 className='font-bold text-2xl pt-6'>Explore Campaigns</h1>

                <div className='flex justify-between items-center p-[50px] bg-slate-100 rounded-3xl mt-4'>
                    <div className='bg-white'>
                        <img className='rounded-3xl h-[250px] w-[450px]' src={img3} alt="" />
                    </div>
                    <div>
                        <h1 className='text-red-500 text-[100px] font-extrabold italic'>Win</h1>
                        <div>
                            <div>
                                <h3 className='font-extrabold text-[30px]'>The all-new Mercedes-AMG G63</h3>
                                <h3>Buy a Shopping Card and make it yours!</h3>
                                <h3 className='text-blue-500 text-[20px] font-bold'>AED200.00</h3>

                            </div>

                            <button>

                            </button>
                        </div>
                        <div className='flex gap-3 '>

                            <button className='p-3 border border-slate-500 hover:bg-gray-400 rounded-lg'>Price  Details</button>
                            <button className='p-3 text-white bg-blue-700 rounded-lg'>Add to Cart</button>
                            <span className='text-[10px]'>Draw Date: 31 December, 2024 or earlier <br /> based on the time passed.</span>
                            <button>  </button>

                        </div>



                    </div>
                </div>
            </div>


        </>

    )
}

export default Section1