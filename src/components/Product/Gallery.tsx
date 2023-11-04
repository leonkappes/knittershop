import Card from "@/components/Product/Card";
import newImage from "@/assets/product1/nordlicht-organic-shirt94.jpg.webp"
import new2 from "@/assets/product3/nachhaltige-mode-taschen-nordlicht20.jpg.webp"

export default function Gallery() {
    return (
        <div id="gallery" className="h-screen overflow-hidden grid grid-cols-1 grid-rows-3 bg-background">
            <Card productName="Cardigan"/>
            <Card showLeft={false} productName="Loiane" image={newImage}/>
            <Card productName="Gaston" image={new2}/>
        </div>
    )
}