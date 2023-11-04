'use client';

import defaultImage from "@/assets/product2/Nordlicht_StrickjackePetrol-04291511.jpg.webp"
import Image from "next/image";
import Link from "next/link";
import { PiCaretRightBold } from "react-icons/pi";

export default function Card({showLeft = true, productName = "Great Product", productId = '1', image = defaultImage}) {
    const poster = (
        <Image src={image} alt={""} className="w-1/2 h-full object-cover rounded-2xl"/>
    )
    const gallery = (
        <div className="flex flex-row w-full justify-between">
            <Image src={image} alt={""} className="w-14 h-full object-cover rounded-lg"/>
            <Image src={image} alt={""} className="w-14 h-full object-cover rounded-lg"/>
            <Image src={image} alt={""} className="w-14 h-full object-cover rounded-lg"/>
        </div>
    )
    const info = (
        <div className={`w-1/2 flex flex-col h-full ${showLeft ? "" : "items-end"}`}>
            <p className="text-3xl text-primary w-full">{productName}</p>
            <p className="flex-1 self-start text-lg text-primary">Roter Kranich mit gelber Blüte</p>
            <Link href={productId} className="text-xl w-1/2 text-center text-white bg-accent rounded-lg py-1 px-2 mb-2">Mehr</Link>
            {gallery}
        </div>
    )
    return (
        <>
        {
            showLeft ? (
                <div className='flex flex-row p-2 gap-2 bg-gradient-to-bl from-accent2 to-background'>
                    {poster}
                    {info}
                </div>
            ) : (
                <div className='flex flex-row p-2 gap-2 shadow-[inset_0_0_8px_-4px_rgba(0,0,0,0.3)]'>
                    {info}
                    {poster}
                </div>
            )
        }
        </>
    )
}