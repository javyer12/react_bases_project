'use client';
import React from 'react';

export default function CardComponent({ title, value }) {
    return (
        <div className="bg-gray-50 flex-shrink-0 w-auto h-full md:w-1/2 lg:w-1/3 snap-center  p-2 flex flex-col justify-center items-center text-center border rounded-lg m-2 border-gray-300">
       
            <h1>{title}</h1> 
            <p>{value}</p>
        </div>
    );
}