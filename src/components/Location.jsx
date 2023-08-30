"use client";
import Image from "next/image";
import Cafe from "/public/images/cafe.jpeg"
import Globos from "/public/images/globos.svg"

import React from 'react'

function Location() {
    return (
        <section className='flex flex-col items-center justify-center w-full px-1'>
            <div className="w-full max-w-[500px] p-2 border rounded-lg shadow-lg">
                <Image priority={true} className="w-full h-auto rounded-lg" src={Cafe} alt="imagen" />
            </div>
            <div className="relative flex flex-col items-center justify-start flex-1 w-full gap-2 pb-[100px] text-center pt-5">
                <h3 className="text-3xl font-bold">Merienda</h3>
                <p className="px-4 text-xl font-medium">Te esperamos en Av. Mate de Luna 1850 (Local 10)</p>
                <Image priority={true} className="absolute bottom-0 left-0 w-full h-auto" src={Globos} alt="imagen" />
            </div>
        </section>
    )
}

export default Location