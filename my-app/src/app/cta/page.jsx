"use client";

import React from "react";

export default function LandingCTA() {
  return (
    <div className="w-full h-screen hero flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-heading text-white drop-shadow-md">
        interested in <br /> a website?
      </h1>
      <p className="text-lg md:text-2xl text-white mt-6 font-body">
        Let’s create something amazing together.
      </p>
      <a
        href="https://wa.me/919795930369"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-8 py-4 bg-[#F4A300] text-white rounded-full text-lg font-medium shadow-md hover:brightness-110 transition duration-300 ease-in-out"
      >
        Get in Touch
      </a>
    </div>
  );
}
