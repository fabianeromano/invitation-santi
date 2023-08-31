"use client";
import Image from "next/image";

import Santi1 from "/public/images/santi1.jpg"
import Santi2 from "/public/images/santi2.jpg"
import Santi3 from "/public/images/santi3.jpg"
import Santi4 from "/public/images/santi4.jpg"
import Santi5 from "/public/images/santi5.jpg"
import Santi6 from "/public/images/santi6.jpg"
import Santi7 from "/public/images/santi7.jpg"
import Santi8 from "/public/images/santi8.jpg"
import Santi9 from "/public/images/santi9.jpg"
import Santi10 from "/public/images/santi10.jpg"

function Carousel() {

    return (
        <section className="w-full h-screen flex flex-col justify-center items-center min-h-[600px]">
            <h2 className="text-4xl font-bold text-center text-[#4E5340] mb-5">Mis fotitos</h2>
            <div className="carousel carousel-center max-w-md py-0 px-4 space-x-4">
                <div className={`carousel-item w-full rounded-box `}>
                    <Image priority={true} width={0} height={0} src={Santi1} alt="Santi1" className={`rounded-box w-full h-auto  `} />
                </div>
                <div className={`carousel-item w-full rounded-box `}>
                    <Image priority={true} width={0} height={0} src={Santi2} alt="Santi2" className={`rounded-box w-full h-auto }`} />
                </div>
                <div className={`carousel-item w-full rounded-box `}>
                    <Image priority={true} width={0} height={0} src={Santi3} alt="Santi3" className={`rounded-box w-full h-auto }`} />
                </div>
                <div className={`carousel-item w-full rounded-box `}>
                    <Image priority={true} width={0} height={0} src={Santi4} alt="Santi4" className={`rounded-box w-full h-auto }`} />
                </div>
                <div className={`carousel-item w-full rounded-box `}>
                    <Image priority={true} width={0} height={0} src={Santi5} alt="Santi5" className={`rounded-box w-full h-auto }`} />
                </div>
                <div className={`carousel-item w-full rounded-box `}>
                    <Image priority={true} width={0} height={0} src={Santi6} alt="Santi6" className={`rounded-box w-full h-auto }`} />
                </div>
                <div className={`carousel-item w-full rounded-box `}>
                    <Image priority={true} width={0} height={0} src={Santi7} alt="Santi7" className={`rounded-box w-full h-auto }`} />
                </div>
                <div className={`carousel-item w-full rounded-box `}>
                    <Image priority={true} width={0} height={0} src={Santi8} alt="Santi8" className={`rounded-box w-full h-auto }`} />
                </div>
                <div className={`carousel-item w-full rounded-box `}>
                    <Image priority={true} width={0} height={0} src={Santi9} alt="Santi9" className={`rounded-box w-full h-auto }`} />
                </div>
                <div className={`carousel-item w-full rounded-box `}>
                    <Image priority={true} width={0} height={0} src={Santi10} alt="Santi10" className={`rounded-box w-full h-auto }`} />
                </div>
            </div>
        </section>
    )
}

export default Carousel;