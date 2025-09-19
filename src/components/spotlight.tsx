"use client";
import React from "react";
import { SpotlightDemo } from "@/components/ui/spotlight-new";

export function Spotlight() {
  return (
    <div className="w-full min-h-40 flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <SpotlightDemo/>
      <div className=" p-4 mt-5 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          MAKING HEAVEN 
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          House of Prayer is a Full Gospel Evangelical Church in Mumbai, dedicated to empowering families and youth through the uncompromised Word of God, Spirit-led worship, and a strong foundation in prayer. We are a Christ-centered community passionate about revival, discipleship, and the transforming power of the Holy Spirit
        </p>
      </div>
    </div>
  );
}
