"use client";
import Image from 'next/image'
import React from 'react'
import Santi from "/public/images/santi-title.svg"
import Arcoiris from "/public/images/arcoiris.png"
import Arrow from "/public/images/arrow.svg"
import Link from 'next/link'
import moment from 'moment';
import { useState, useEffect } from 'react';

function HeroParallax() {

    const eventDate = moment('2023-09-12 18:00'); // Fecha y hora del evento

    const [remainingTime, setRemainingTime] = useState({
        days: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment();
            const duration = moment.duration(eventDate.diff(now));

            setRemainingTime({
                days: duration.days(),
                hours: duration.hours(),
                minutes: duration.minutes(),
                seconds: duration.seconds(),
            });

        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section className='w-full h-screen min-h-[700px] relative flex flex-col items-center justify-start bg-[#F0FEFC] parallax'>
            <div className='z-10 pt-4'>
                <Image src={Santi} alt='Santi Letra' className='h-auto w-[200px] animate-jump' />
            </div>

            <div className='z-10 flex flex-col items-center justify-center'>
                <Image src={Arcoiris} alt='Arcoiris' className='w-[90%] h-auto animate-flip-up' />
                <p className='text-[#4E5340] text-2xl font-medium'>Mi primer cumple</p>
                <div className='flex h-[120px] justify-center items-center gap-3'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-4xl font-medium text-[#4E5340]'>SEP</p>
                        <h3 className='text-6xl font-bold text-[#2176AE]'>12</h3>
                    </div>
                    <span className='w-1 rounded-full h-[60%] bg-[#2176AE]' />
                    <div className='flex flex-col items-center justify-between h-full py-4'>
                        <p className='text-4xl font-medium text-[#4E5340]'>Faltan</p>
                        {/* <p className="text-4xl font-bold text-[#4E5340]">{remainingTime?.days} dias</p> */}
                        <p className="text-4xl font-bold text-[#4E5340]">{remainingTime?.hours} Hs {remainingTime?.minutes} Min {remainingTime?.seconds} Seg</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-2 px-4 text-center pb-4">
                <h3 className="text-2xl font-medium text-[#4E5340]">Confirmar asistencia con un</h3>
                <Link href="https://wa.me/3814163294/?text=Confirmo%20mi%20Asistencia" target="_blank">
                    <button className="text-xl font-bold bg-[#2176AE] rounded-full text-white py-2 px-8 shadow-lg animate-pulse">Click aquí</button>
                </Link>
            </div>
            <div className='animate-bounce rotate-180'>
                <Image className='w-10 h-10' src={Arrow} alt="arrow" />
            </div>
        </section>
    )
}

export default HeroParallax