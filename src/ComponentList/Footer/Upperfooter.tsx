
import React from 'react'
import Image from 'next/image'

import delivery from '@/assets/Icon/delivery.png'
import payment from '@/assets/Icon/payment.png'
import ret from '@/assets/Icon/return.png'
import help from '@/assets/Icon/help.png'

export default function Upperfooter() {
  return (
    <main className='bg-slate-300 flex justify-evenly items-center p-6'>
  <section className='flex items-center'>
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={delivery}
        alt="delivery"
        width={60}
        style={{
          height: 'auto',
        }}
        className=''
      />
      <h1>Fast Delivery</h1>
      <h1>Deliver in 24 hours max!</h1>
    </div>
  </section>
  <div className='border border-r-1 h-16 '></div>

  <section className='flex items-center'>
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={payment}
        alt="payment"
        width={50}
        style={{
          height: 'auto',
        }}
        className=''
      />
      <h1>Safe Payment</h1>
      <h1>Bkash, Rocket, Visa...</h1>
    </div>
  </section>
  <div className='border border-r-1 h-16'></div>

  <section className='flex items-center'>
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={ret}
        alt="ret"
        width={50}
        style={{
          height: 'auto',
        }}
        className=''
      />
      <h1>Free Returns</h1>
      <h1>Free returns within 15 days</h1>
    </div>
  </section>
  <div className='border border-r-1 h-16'></div>

  <section className='flex items-center'>
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={help}
        alt="help"
        width={50}
        style={{
          height: 'auto',
        }}
        className=''
      />
      <h1>Help Center</h1>
      <h1>Dedicated 24/7 support</h1>
    </div>
  </section>
</main>

  )
}
