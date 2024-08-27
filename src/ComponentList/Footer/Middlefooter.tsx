import React from 'react'
import Link from 'next/link'

import Socialicon from './Socialicon'
import facebook from '@/assets/Icon/facebook (1).png'
import linkedin from '@/assets/Icon/linkedin (1).png'
import pinterest from '@/assets/Icon/pinterest3.png'
import twitter from '@/assets/Icon/twitter.png'
import email from '@/assets/Icon/email4.png'
import whatsapp from '@/assets/Icon/social2.png'

export default function Middlefooter() {

  const icons = [
    { src: linkedin, alt: 'LinkedIn' },
    { src: facebook, alt: 'Facebook' },
    { src: pinterest, alt: 'Pinterest' },
    { src: whatsapp, alt: 'WhatsApp' },
    { src: twitter, alt: 'Twitter' },
    { src: email, alt: 'Email' }
  ]

  const services = [
    'My Account',
    'About Us',
    'My Cart',
    'Wishlist',
    'Privacy Policy',
    'Store Location'
  ]

  const categories = [
    'Smartphone',
    'Computer & Laptop',
    'Kitchen Appliance',
    'Suits & Blazer',
    'Bicycle',
    'Cameras'
  ]

  return (
    <main className='p-4 flex justify-between items-center text-black text-sm'>
      <section className='space-y-2 font-semibold'>
        <h1 className='text-lg'>Contact Us</h1>
        <div>
          <h1 className='font-normal'>Got Question? Call us 24/7</h1>
          <h1 className='text-lg'>+8801627408824</h1>
          <h1 className='text-md'>Email:fuadhossainbk01@gmail.com</h1>
        </div>
        <h1>somewhere, Dhaka, Bangladesh</h1>
        <div className='flex gap-2'>
          {
            icons.map((icon, index) => (
              <Socialicon key={index} src={icon.src} alt={icon.alt} />

            ))
          }
        </div>
      </section>

      <section className="flex flex-col space-y-2 space-x-1">
        <h1 className='text-lg font-semibold'>Customer Service</h1>
        {
          services.map((service, index) => (
            <Link key={index} href='/' className="hover:text-violet-300">
              {service}
            </Link>
          ))
        }
      </section>

      <section className="flex flex-col space-y-2  space-x-1">
        <h1 className='text-lg font-semibold'>Hot Categories</h1>
        {
          categories.map((category, index) => (
            <Link key={index} href='/' className="hover:text-violet-300">
              {category}
            </Link>
          ))
        }
      </section>

      <section className='space-y-2 bg-slate-500/50 p-10 py-8 rounded-2xl'>
        <h1>Yet, haven&apos;t any account?</h1>
        <button className="border-2 py-3 px-8 rounded-3xl hover:text-white  hover:border-green-300">Create Account</button>
      </section>
    </main>
  )
}
