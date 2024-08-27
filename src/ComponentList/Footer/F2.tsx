import React from 'react'

export default function F2() {
  return (
    <main className='text-black flex flex-col items-center space-y-3'>
      <h1 className="font-semibold text-lg ">Sign Up To Newsletter</h1>
      <h1 className="font-normal text-sm text-center">Enter your email address to get $10 off your first order and free shipping.<br /> Updates information on Sales and Offers.</h1>
      <section className="flex justify-center text-sm text-blue-600 gap-2">
        <input
          type="text"
          placeholder='Your email'
          className='border py-3 pr-20 pl-5 rounded-3xl placeholder-blue-600'
        />
        <button className='border py-3 px-6 rounded-3xl'>Subscribe</button>
      </section>
    </main>
  )
}
