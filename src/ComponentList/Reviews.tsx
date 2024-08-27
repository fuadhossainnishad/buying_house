'use client' 
import React, {useState } from 'react';
import Reviewicon from './Productdetails/Reviewicon';

export default function Reviews() {
  // State to manage ratings
  const [qualityRating, setQualityRating] = useState(0);
  const [priceRating, setPriceRating] = useState(0);
  const [servicesRating, setServicesRating] = useState(0);

  

  return (
    <main>
      <section className="flex">
        <h1>Review For:</h1>
        <h1>Something</h1>
      </section>
      <section className="">
        <div className='flex items-center gap-2'>
          <h1>Quality*:</h1>
          <Reviewicon rating={qualityRating} setRating={setQualityRating}/>
        </div>
        <div className='flex items-center gap-2'>
          <h1>Price*:</h1>
          <Reviewicon rating={priceRating} setRating={setPriceRating}/>

        </div>
        <div className='flex items-center gap-2'>
          <h1>Our Services*:</h1>
          <Reviewicon rating={servicesRating} setRating={setServicesRating}/>
        </div>
      </section>
      <section className="">
        <section className="flex">
          <div>
            <h1>Name</h1>
            <input type="text" />
          </div>
          <div>
            <h1>Summary</h1>
            <input type="text" />
          </div>
        </section>
        <div>
          <h1>Review*:</h1>
          <input type="text" />
        </div>
        <button className=''>Submit</button>
      </section>
    </main>
  );
}
