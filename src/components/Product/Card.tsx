'use client';

import defaultImage from "@/assets/product2/Nordlicht_StrickjackePetrol-04291511.jpg.webp"
import Image from "next/image";
import Link from "next/link";
import { PiCaretRightBold } from "react-icons/pi";

export default function Card({showLeft = true, productName = "Great Product", productId = '1'}) {
    const image = (
        <Image src={defaultImage} alt={""} className="w-1/2 h-full object-cover rounded-2xl"/>
    )
    const header = (
        <p className="text-lg font-bold text-primary w-full font-serif tracking-tight">{productName}</p>
    )
    const gallery = (
        <div className="flex flex-row gap-2">
            <Image src={defaultImage} alt={""} className="w-1/4 h-full object-cover rounded-lg"/>
            <Image src={defaultImage} alt={""} className="w-1/4 h-full object-cover rounded-lg"/>
            <Image src={defaultImage} alt={""} className="w-1/4 h-full object-cover rounded-lg"/>
            <PiCaretRightBold className="h-full w-1/4 fill-primary"/>
        </div>
    )
    return (
        <div className='w-full h-full flex flex-row p-4 gap-4 border-b border-primary'>
            {image}
            <div className="w-1/2 flex flex-col h-full">
                {header}
                <p className="flex-1 self-start">33€</p>
                <Link href={productId} className="text-lg w-1/2 self-center text-center text-white bg-accent rounded-lg py-2 px-4 font-serif mb-5">Mehr</Link>
                {gallery}
            </div>
        </div>
    )
}