import React from 'react'
import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import { discount, robot, pro_max } from "../assets";
import { quotes } from "../assets";
//import { useResolvedPath } from 'react-router-dom';

export default function Product() {
    //const path = useResolvedPath()



    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>



            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className='md:columns-4 p-8'>
                        <ProductCard name='IPhone 10' orignal='14000' ourprice='60000' />
                        <ProductCard name='IPhone 10 A' orignal='14000' ourprice='60000' />
                        <ProductCard name='IPhone 11' orignal='14000' ourprice='60000' />
                        <ProductCard name='IPhone 12' orignal='14000' ourprice='60000' />
                        <ProductCard name='IPhone 10' orignal='14000' ourprice='60000' />
                        <ProductCard name='IPhone 10 A' orignal='14000' ourprice='60000' />
                        <ProductCard name='IPhone 11' orignal='14000' ourprice='60000' />
                        <ProductCard name='IPhone 12' orignal='14000' ourprice='60000' />
                        <ProductCard name='IPhone 10' orignal='14000' ourprice='60000' />
                        <ProductCard name='IPhone 10 A' orignal='14000' ourprice='60000' />
                        <ProductCard name='IPhone 11' orignal='14000' ourprice='60000' />
                        <ProductCard name='IPhone 12' orignal='14000' ourprice='60000' />


                    </div>
                </div>
            </div>

            <div className='columns-4 p-8'>

            </div>


        </div>
    )
}




function ProductCard({ name, orignal, ourprice }) {
    return (
        <div className="feedback-card font-poppins rounded-lg">
            <div className='flex flex-col justify-center -md p-4'>
                <div className='flex rounded-md relative mb-4  text-gray-100 '>
                    <img src={pro_max} alt="" className='w-40 h-40 ' />

                    <div className='flex flex-col gap-4'>
                        <span className='text-lg font-semibold'>{name}</span>
                        <span className='flex line-through bg-red-400 items-center justify-center rounded-lg p-1'>
                            Rs {orignal}
                        </span>

                        <span className='flex  bg-green-400 items-center justify-center rounded-lg p-1 '>
                            Rs {ourprice}
                        </span>
                    </div>

                </div>
                <div className=' flex py-2 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none justify-center cursor-pointer'>
                    Get it now
                </div>
            </div>

        </div>
    )
}
