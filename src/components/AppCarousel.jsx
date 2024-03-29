import React from 'react'
import Autoplay from "embla-carousel-autoplay"



import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { mobiles } from '@/constants'
import { BackgroundGradient } from './ui/BackgroundGradient'



export function AppCarousel() {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )


    return (
        <Carousel
            className=' text-white h-full'
            plugins={[plugin.current]}
        >
            <CarouselContent className='text-white'>
                {
                    mobiles.map((item, index) => {
                        return (
                            <CarouselItem key={index} className=' flex flex-col p-20 items-center'>

                                <div className=' grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-2'>


                                    {
                                        item?.variant.slice(0, 4).map((model, index) => {
                                            return (
                                                <div key={index} className=''>

                                                    {/* <img src={model?.image} alt={model?.model} className="" width={100} height={100} /> */}

                                                    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 aspect-video h-full w-full">
                                                        <img
                                                            src={model?.image}
                                                            alt="jordans"
                                                            height="120"
                                                            width="120"
                                                            className="object-contain"
                                                        />
                                                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                                            {model.model}
                                                        </p>

                                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                            {model.storage}

                                                        </p>
                                                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                                            <span>Buy now </span>
                                                            <span className="bg-zinc-700 rounded-full text-xl px-2 py-0 text-white">
                                                                ₹ {model.price}
                                                            </span>
                                                        </button>
                                                    </BackgroundGradient>

                                                </div>
                                            )
                                        })
                                    }

                                </div>

                            </CarouselItem>
                        )
                    })
                }
                {/* <CarouselItem>..ssdsdfsdf.</CarouselItem>
                <CarouselItem>..sdfsdfsfd.</CarouselItem>
                <CarouselItem>..sdfsdfdf.</CarouselItem> */}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
