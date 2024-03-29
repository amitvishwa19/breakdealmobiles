import React from 'react'
import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import { discount, robot, pro_max } from "../assets";
import { quotes } from "../assets";
import { mobiles } from '@/constants';

import { BackgroundGradient } from '@/components/ui/BackgroundGradient';
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




            <div className='p-14  mb-10'>
                {
                    mobiles.map((item, index) => {
                        return (
                            <div key={index} className=' mb-10 '>

                                <div className="flex items-center w-full justify-center">
                                    <h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
                                        <span className="text-gradient">{item.model}</span>{" "}
                                    </h1>
                                    <div className="ss:flex hidden md:mr-4 mr-0">

                                    </div>
                                </div>
                                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-2'>
                                    {

                                        item.variant.map((model, index) => {
                                            return (

                                                <BackgroundGradient key={index} className="rounded-[22px] max-w-sm p-2 sm:p-10 bg-white dark:bg-zinc-900  h-full w-full mx-auto">
                                                    <div className='flex justify-center'>
                                                        <img
                                                            src={model?.image}
                                                            alt="jordans"
                                                            height="120"
                                                            width="120"
                                                            className="object-cover "
                                                        />
                                                    </div>
                                                    <div className=''>
                                                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 flex justify-center">
                                                            {model.model} ({model.storage})
                                                        </p>
                                                    </div>

                                                    <div className='flex justify-center'>
                                                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 ">
                                                            <span>Buy now </span>
                                                            <span className="bg-zinc-700 rounded-full text-xl px-2 py-0 text-white">
                                                                ₹ {model.price}
                                                            </span>
                                                        </button>
                                                    </div>
                                                </BackgroundGradient>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
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


export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];


const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
