"use client";
import Image from "next/image";
import Cafe from "/public/images/cafe.jpeg"

import React from 'react'

function Location() {
    return (
        <section className='flex flex-col items-center justify-center w-full h-[80vh] min-h-[500px] gap-5'>
            <div className="w-full h-auto border rounded-lg shadow-lg">
                <Image priority={true} className="w-full h-auto p-2 rounded-lg" src={Cafe} alt="imagen" />
            </div>
            <div className="relative flex flex-col items-center justify-start w-full gap-2 text-center">
                <h3 className="text-3xl font-bold text-[#4E5340]">Merienda</h3>
                <p className="px-4 text-xl font-medium text-[#4E5340]">Te esperamos en Av. Mate de Luna 2850 (Local 10)</p>
                <p className="text-2xl font-bold text-[#2176AE]">18:00hs</p>
            </div>
        </section>
    )
}

export default Location