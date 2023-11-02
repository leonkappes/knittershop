import HeroImage from "../../assets/nachhaltige-mode-nordlicht162.jpg.webp"
import Image from "next/image";
import Link from "next/link";

export default function Hero() {

    // TODO: Fix Client and Server Click Handeling

    return (
        <div className="h-screen overflow-hidden flex flex-col">
            <div className="bg-gradient-to-b from-neutral-800 via-30% via-neutral-500 to-100% to-neutral-800 w-full h-screen absolute -z-10">
                <Image src={HeroImage} alt={""} className="w-full h-full object-cover absolute mix-blend-overlay"/>
            </div>
            <p className="text-5xl text-white m-4 font-serif">Knittershop</p>

            <div className="flex flex-1 items-end self-end mb-4">
                <p className="text-lg text-white w-full m-4 font-serif">No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.</p>
            </div>


            <div className="self-end w-full flex items-center justify-center mb-8">
                <Link href={"#gallery"} scroll={true} className="text-lg text-white bg-accent rounded-full py-2 px-4 font-serif">Los geht&apos;s</Link>
            </div>

        </div>
    )
}