"use client";
import React from "react";
import CardComponent from "./CardComponent.jsx";
export default function MainComponent({ title, value }) {
  return (
    
    <div className="m-4  bg-blue-900 shadow-xl p-2 flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-auto h-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-lg">
     
      <CardComponent
      title={title}
      value={value}
    />
    </div>
  );
}
//snap-center shrink-0 w-96 md:w-1/2 lg:w-1/3 