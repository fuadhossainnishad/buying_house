import React from 'react'
import Upper from './Upper'
import Lower from './Lower'
// import CoverImageAnimation from '../CoverImageAnimation'

export default function Header() {
  return (
    <header className='sticky top-0 w-full bg-white z-50'>
      <Upper />
      <Lower />
      {/* <CoverImageAnimation /> */}
    </header>
  )
}
