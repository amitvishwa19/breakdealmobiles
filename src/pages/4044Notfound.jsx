import React from 'react'
import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>


            <div className='absolute flex flex-col items-center justify-center text-slate-300 font-bold text-4xl inset-0'>
                Oops ! Page not found
                <spin className='font-semibold text-xl mt-4'>
                    <Link to={'/'}>Go back home</Link>
                </spin>
            </div>


        </div>
    )
}
