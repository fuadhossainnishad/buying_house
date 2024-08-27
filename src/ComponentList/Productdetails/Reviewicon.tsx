'use client'

import React,{SetStateAction} from 'react'
import { FaStar } from 'react-icons/fa';

type Icontype={
    rating:number;
    setRating:React.Dispatch<React.SetStateAction<number>>;
}

const Reviewicon = ({rating , setRating}:Icontype) => (
    <div className="flex">
        {[...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                size={16}
                onClick={() => setRating(index + 1)}
                // onMouseOver={() => setRating(index + 1)}
                // onMouseLeave={() => setRating(rating)}
                onClickCapture={() => setRating(rating)}
                color={index < rating ? '#ffc107' : '#e4e5e9'}
                style={{ cursor: 'pointer' }}
            />
        ))}
    </div>
);

export default Reviewicon