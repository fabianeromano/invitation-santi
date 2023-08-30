import Link from "next/link";

function Confirm() {
    return (
        <section className="flex flex-col items-center justify-center text-center w-full h-[300px] gap-5 px-4">
            <h3 className="text-2xl font-medium">Confirmar asistencia con mi Mami por whatsapp</h3>
            <Link href="https://wa.me/3814163294/?text=Confirmo%20mi%20Asistencia" target="_blank">
                <button className="text-xl font-bold bg-[#2176AE] rounded-full text-white py-2 px-8">Confirmar</button>
            </Link>
        </section>
    )
}

export default Confirm;
