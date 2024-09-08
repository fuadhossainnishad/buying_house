'use client'

import React from 'react'
import {useState,useEffect} from 'react'

import Coverimage from './Coverimage'


export default function M1() {
  const images = [
    { src: '/assets/Image/laptop.jpg', desc: 'All Branded Laptops' },
    { src: '/assets/Image/kitchen.jpg', desc: 'Modern Kitchens' },
    { src: '/assets/Image/bicycle.jpg', desc: 'Bicycles for All' }
  ];

  const [index,setIndex]=useState(0)

  useEffect(()=>{
const interval=setInterval(()=>{
  setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
},3000);

return ()=> clearInterval(interval)
  },[images.length])

  return (
    <main className='w-[1100px] h-[47px]'>
      <Coverimage
      key={index}
      src={images[index].src}
      desc1={images[index].desc}
      />
    </main>
  )
}
