import Card from "@/components/Card"
import HeroParallax from "@/components/HeroParallax";
import Confirm from "@/components/Confirm";
import Location from "@/components/Location";
import { cards } from "@/utils/cards";

export default function Home() {
  return (
    <main className="flex justify-center w-full">
      <div className="min-w-[320px] max-w-[420px] flex flex-col items-center justify-center">
        <HeroParallax />
        <Confirm />
        <Location />

      </div>
    </main>
  )
}
