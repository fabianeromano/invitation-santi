import Image from 'next/image'
import React from 'react'
import Santi from "/public/images/santi-title.svg"
import Sol from "/public/images/sol.png"
import Nube from "/public/images/nube.png"
import Luna from "/public/images/luna.png"
import Estrellas from "/public/images/estrellas.png"
import Terreno from "/public/images/terreno.svg"
import Arcoiris from "/public/images/arcoiris.png"

function HeroParallax() {
    return (
        <section className='w-full h-[500px] relative flex flex-col items-center justify-start bg-[#F0FEFC] parallax'>
            <div className='z-10 pt-16'>
                <Image src={Santi} alt='Santi Letra' />
            </div>
            <div className='z-10 flex flex-col items-center justify-center'>
                <p className='text-[#4E5340] text-2xl font-medium'>Mi primer cumple</p>
                <p className='text-4xl font-medium text-[#4E5340]'>Sep</p>
                <h3 className='text-6xl font-bold text-[#2176AE]'>12</h3>
            </div>
            <Image src={Sol} alt='Sol' className='absolute top-2 left-2 w-[70px] h-auto' />
            <Image src={Nube} alt='Nube' className='absolute top-20 left-2 w-[70px] h-auto' />
            <Image src={Nube} alt='Nube' className='absolute top-8 left-16 w-[70px] h-auto' />
            <Image src={Luna} alt='Luna' className='absolute top-2 right-0 w-[70px] h-auto' />
            <Image src={Estrellas} alt='Estrellas' className='absolute top-4 right-12 w-[100px] h-auto' />
            <Image src={Terreno} alt='Terreno' className='absolute bottom-0 left-0 z-10 w-full h-auto' />
            <Image src={Arcoiris} alt='Arcoiris' className='absolute left-0 w-full h-auto bottom-10' />
        </section>
    )
}

export default HeroParallax