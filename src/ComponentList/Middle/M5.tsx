import React from 'react';
import Productpromo from './Productpromo';
import Product from './Product';

import suit from '@/assets/Image/suit.jpg';
import iphone from '@/assets/Image/iphone.png'
export default function M5() {
    return (
        <main className='flex gap-12 justify-between'>
            <Productpromo
                src={suit}
                alt='suit'
                brand='Best Promotion'
                desc1='Top Offer'
                desc2='Comfort Solution'
                price='From:$499.00'
            />
            <Product
                src={iphone}
                alt='iphone'
                brand='Apple'
                desc1='Smartphone 14 Pro Max'
                desc2='128GB/13MP Camera-Umlocked'
                price='$380.00'
            />
             <Product
                src={iphone}
                alt='iphone'
                brand='Apple'
                desc1='Smartphone 14 Pro Max'
                desc2='128GB/13MP Camera-Umlocked'
                price='$380.00'
            />
        </main>
    );
}
