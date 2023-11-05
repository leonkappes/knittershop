import { PiInstagramLogoLight } from "react-icons/pi";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full bg-background p-2 shadow-[inset_0_0_8px_-4px_rgba(0,0,0,0.3)]">
            <div className="flex flex-row justify-evenly gap-4 mb-2">
                <Link href={""} className="text-md text-primary text-center w-1/3">agb</Link>
                <Link href={""} className="text-md text-primary text-center w-1/3">impressum</Link>
                <Link href={""} className="text-md text-primary text-center w-1/3">versand</Link>
            </div>
            <div className="flex flex-row justify-center">
                <Link href={""}>
                    <PiInstagramLogoLight className="fill-primary w-6 h-6"/>
                </Link>
            </div>
        </div>
    )
}

/*
* Future Icons: PiHeartThin, PiHandbagSimpleThin, PiHouseThin, PiInfoThin, PiMagnifyingGlassMinusThin, PiMagnifyingGlassPlusThin, PiMagnifyingGlassThin,
* PiNotePencilThin, PiPackageThin, PiPaperPlaneTiltThin,
* */