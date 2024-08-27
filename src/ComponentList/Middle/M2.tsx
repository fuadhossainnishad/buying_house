'use client'

import React, { useState } from 'react';
import categories from './Category';

type CategoryType={
    category:string;
    subcategories:string[];
}

export default function M2() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);

    return (
        <main className="flex text-black ">
            <ul className="w-full max-h-[475px] overflow-y-auto scroll-smooth shadow-md rounded-lg p-5 px-10 pr-12">
                {categories.map((categ, index) => (
                    <li
                        key={index}
                        onClick={() => setSelectedCategory(categ)}
                        className="cursor-pointer text-sm  p-3 border-b hover:bg-gray-100"
                    >
                        <strong>{categ.category}</strong>
                    </li>
                ))}
            </ul>

                {selectedCategory && (
            <div className="w-[15%] p-6 border rounded-lg absolute z-10 left-[550px] bg-white text-sm">
                        <h2 className="text-md font-bold mb-2">{selectedCategory.category}</h2>
                        <ul>
                            {selectedCategory.subcategories.map((subcategory, subIndex) => (
                                <li key={subIndex} className="p-1 ">
                                    {subcategory}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
        </main>
    );
}
