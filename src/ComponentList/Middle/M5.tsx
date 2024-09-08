import React from 'react';
import Productpromo from './Productpromo';
import Product from './Product';

 
export default function M5() {
    return (
        <main className='flex gap-12 justify-between'>
            <Productpromo
                src='/assets/Image/suit.jpg'
                alt='suit'
                brand='Best Promotion'
                desc1='Top Offer'
                desc2='Comfort Solution'
                price='From:$499.00'
            />
            <Product
                src='/assets/Image/iphone.png'
                alt='iphone'
                brand='Apple'
                desc1='Smartphone 14 Pro Max'
                desc2='128GB/13MP Camera-Umlocked'
                price='$380.00'
            />
             <Product
                src='/assets/Image/iphone.png'
                alt='iphone'
                brand='Apple'
                desc1='Smartphone 14 Pro Max'
                desc2='128GB/13MP Camera-Umlocked'
                price='$380.00'
            />
        </main>
    );
}
