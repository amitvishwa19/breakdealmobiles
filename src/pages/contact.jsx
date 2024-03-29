import React, { useState } from 'react'
import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import { Loader } from 'lucide-react';
//import { toast } from 'sonner';

export default function Contact() {
    const [formData, setFormData] = useState({ mobile: '', email: '', message: '' })
    const [processing, setProcessing] = useState(false)

    const handleFormSubmit = () => {
        //setProcessing(true)
        console.log(formData)
        //toast.success('Your Inquiry submited , we will connect you shortly')
    }



    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div>
                <div className='p-8'>
                    <div className={`bg-primary ${styles.flexStart}`}>
                        <div className={`${styles.boxWidth}`}>
                            <Business />
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col gap-4">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Mobile</label>
                            <input
                                disabled={processing}
                                value={formData.mobile}
                                type="text" id="mobile"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Mobile numbe with country code"
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input
                                disabled={processing}
                                type="email"
                                id="email"
                                value={formData.email}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="sm:col-span-2" >
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea
                                disabled={processing}
                                value={formData.message}
                                id="message" rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a inquiry..."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />

                        </div>
                        <button onClick={() => { handleFormSubmit() }} disabled={processing} type="submit" className="flex  item-center w-full py-3 px-5 text-sm  text-center text-slate-800 font-semibold rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-gray-200 ">
                            {processing && <Loader className='h-4 w-4 mt-0.5 mr-2 animate-spin' />}
                            Send message
                        </button>

                    </div>
                </div>
            </div>


        </div>


    )
}
