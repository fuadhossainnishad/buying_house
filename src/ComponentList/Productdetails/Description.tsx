'use client'

import React, { useState } from 'react'

export default function Description() {

    const [count, setCount] = useState(1)

    const decrease = () => {
        const current = count
        const minuscount = current - 1 > 0 ? current - 1 : 0
        setCount(minuscount)
    }

    const increase = () => {
        const current = count
        const pluscount = current + 1
        setCount(pluscount)
    }

    return (
        <main className='w-1/2 text-black flex flex-col justify-center'>
            <section className="w-[90%] space-y-4">
                <div className='space-y-2'>
                    <h1 className='text-lg font-semibold'>Smartphone 12 Pro Max 128GB/13MP Camera - Unlocked</h1>
                    <h1 className='text-2xl font-bold'>$380.00</h1>
                    <section className='flex gap-2 items-center'>
                        <h1 className='text-lg font-semibold'>Color:</h1>
                        <div className='bg-gray-800 w-5 h-5 border'></div>
                        <div className='bg-white w-5 h-5 border'></div>
                        <div className='bg-yellow-100 w-5 h-5 border'></div>
                        <div className='bg-gray-600 w-5 h-5 border'></div>
                    </section>
                </div>

                <div className='space-y-3'>
                    <h1 className='text-lg font-semibold border-b-2'>Details:</h1>
                    <h1 className=''>IPad Air with a vibrant 10.9-inch Liquid Retina display.
                        Breakthrough Apple M1 chip for faster performance,
                        making iPad Air super-powerful for creativity and mobile gaming.
                    </h1>
                    <button
                        className='border font-medium py-3 px-5 rounded-3xl bg-gray-500/50'>See More Details</button>
                </div>

                <div className='border-b-2'></div>

                <section className="space-y-2 ">
                    <div className='flex gap-1'>
                        <h1 >Availability:</h1>
                        <h1 className='font-medium'>In Stock</h1>
                    </div>
                    <div className='flex gap-1'>
                        <h1>Warranty:</h1>
                        <h1 className='font-medium'>1 Year</h1>
                    </div>
                </section>

                <div className='border-b-2'></div>

                <section className='flex items-center gap-1'>
                    <h1 className='font-medium'>Quantity:</h1>
                    <div className='flex gap-6 border-2 rounded-3xl px-6 py-2 font-medium'>
                        <button onClick={decrease}>-</button>
                        <h1 className=''>{count}</h1>
                        <button onClick={increase}>+</button>
                    </div>
                </section>

                <div className='flex gap-4 font-medium'>
                    <button className='border border-orange-600 py-3 px-16 rounded-3xl bg-teal-500/50'>Buy Now</button>
                    <button className='border border-orange-600 py-3 px-14 rounded-3xl bg-teal-500/50'>Add To Cart</button>
                </div>

                <div className='border-b-2'></div>

                <div className='flex  gap-1'>
                    <h1 className='font-medium'>Estimated Delivery:</h1>
                    <h1>20 - 30 Aug, 2024</h1>
                </div>

                <div className='flex  gap-1'>
                    <h1 className='font-medium'>Returns:</h1>
                    <h1>In 15 days of delivery</h1>
                </div>
            </section>

        </main>
    )
}
