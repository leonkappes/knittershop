import Card from "@/components/Product/Card";

export default function Gallery() {
    return (
        <div id="gallery" className="h-screen overflow-hidden grid grid-cols-1 grid-rows-3 bg-background">
            <Card productName="Sweater Blue 1"/>
            <Card productName="Sweatern same Blue 2"/>
            <Card productName="Sweater same but different Blue 3"/>
        </div>
    )
}