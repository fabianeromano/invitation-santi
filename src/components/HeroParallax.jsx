"use client";
import Image from 'next/image'
import React from 'react'
import Santi from "/public/images/santi-title.svg"
import Arcoiris from "/public/images/arcoiris.png"
import Link from 'next/link'

function HeroParallax() {
    return (
        <section className='w-full h-screen min-h-[600px] relative flex flex-col items-center justify-center bg-[#F0FEFC] parallax'>
            <div className='z-10'>
                <Image src={Santi} alt='Santi Letra' className='h-auto w-[200px] animate-jump' />
            </div>

            <div className='z-10 flex flex-col items-center justify-center'>
                <Image src={Arcoiris} alt='Arcoiris' className='w-full h-auto animate-flip-up' />
                <p className='text-[#4E5340] text-2xl font-medium'>Mi primer cumple</p>
                <div className='flex h-[120px] justify-center items-center gap-3'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-4xl font-medium text-[#4E5340]'>SEP</p>
                        <h3 className='text-6xl font-bold text-[#2176AE]'>12</h3>
                    </div>
                    <span className='w-1 rounded-full h-[60%] bg-[#2176AE]' />
                    <div className='flex flex-col items-center justify-between h-full py-4'>
                        <p className='text-4xl font-medium text-[#4E5340]'>Faltan</p>
                        <p className="text-4xl font-bold text-[#4E5340]">12 dias</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-2 px-4 text-center">
                <h3 className="text-2xl font-medium text-[#4E5340]">Confirmar asistencia con un</h3>
                <Link href="https://wa.me/3814163294/?text=Confirmo%20mi%20Asistencia" target="_blank">
                    <button className="text-xl font-bold bg-[#2176AE] rounded-full text-white py-2 px-8 shadow-lg animate-pulse">Click aquí</button>
                </Link>
            </div>
        </section>
    )
}

export default HeroParallax