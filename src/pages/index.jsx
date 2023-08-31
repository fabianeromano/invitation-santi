"use client";
import Carousel from "@/components/Carousel";
import HeroParallax from "@/components/HeroParallax";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main className="flex justify-center w-full bg-white">
      <div className="min-w-[320px] max-w-[420px] flex flex-col items-center justify-center">
        <HeroParallax />
        <Location />
        <Carousel />
      </div>
    </main>
  )
}
