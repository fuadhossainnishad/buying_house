'use client'

import React from 'react'
import {useState,useEffect} from 'react'

import Coverimage from './Coverimage'
import laptop from '@/assets/Image/laptop.jpg'
import kitchen from '@/assets/Image/kitchen.jpg'
import bicycle from '@/assets/Image/bicycle.jpg'


export default function M1() {
  const images = [
    { src: laptop, desc: 'All Branded Laptops' },
    { src: kitchen, desc: 'Modern Kitchens' },
    { src: bicycle, desc: 'Bicycles for All' }
  ];

  const [index,setIndex]=useState(0)

  useEffect(()=>{
const interval=setInterval(()=>{
  setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
},3000);

return ()=> clearInterval(interval)
  },[images.length])

  return (
    <main className='relative w-[1100px] h-[475px]'>
      <Coverimage
      key={index}
      src={images[index].src}
      desc1={images[index].desc}
      />
    </main>
  )
}
