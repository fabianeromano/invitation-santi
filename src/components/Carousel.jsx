"use client";
import Image from "next/image";
import Santi1 from "/public/images/santi1.jpg";

function Carousel() {

    return (
        <section className='w-full'>
            <Image priority={true} className="w-full h-auto" src={Santi1} alt="Santi 1" />
        </section>
    )
}

export default Carousel;