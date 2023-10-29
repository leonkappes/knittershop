import HeroImage from "../../assets/nachhaltige-mode-nordlicht162.jpg.webp"
import Image from "next/image";

interface HeroProps {
    showButton: boolean
    callbackFunction: () => void
}
export default function Hero({showButton = true, callbackFunction}: HeroProps) {

    // TODO: Fix Client and Server Click Handeling
    function handleClick() {
        console.log("pressed")
        showButton = false
        callbackFunction()
    }

    return (
        <div className="h-screen overflow-hidden">
            <div className="bg-background w-full h-screen absolute -z-10">
                <Image src={HeroImage} alt={""} className="w-full h-full object-cover absolute mix-blend-multiply"/>
            </div>
            <p className="text-5xl text-primary px-2 pt-4 bg-gradient-to-b from-background from-50% to-transparent h-32">Knittershop</p>

            <div className="flex fixed bottom-1/2 items-center">
                <p className="text-lg text-primary w-full bg-gradient-to-r from-background to-transparent to-70% p-4 pr-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna. Libero justo laoreet sit amet cursus sit. Consequat ac felis donec et odio pellentesque diam.</p>
            </div>

            { showButton ? (
                <div className="fixed bottom-0 w-full flex items-center justify-center mb-24">
                    <button className="text-xl text-white bg-accent rounded-full py-2 px-4" onClick={handleClick}>Los geht&apos;s</button>
                </div>
            ): (<></>)}

        </div>
    )
}