import Card from "@/components/Product/Card";

export default function Gallery() {
    return (
        <div id="gallery" className="h-screen overflow-hidden grid grid-cols-1 grid-rows-3">
            <Card />
            <Card />
            <Card />
        </div>
    )
}