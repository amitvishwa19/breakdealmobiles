import React from 'react'
import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";

export default function About() {
    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className='p-8'>
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <CardDeal />
                        <CTA />
                    </div>
                </div>

                <div>

                </div>
            </div>


        </div>
    )
}
