import FromTide from "@/components/home/FromTide";
import Hero from "@/components/home/Hero";
import Selection from "@/components/home/Selection";
import Events from "@/components/home/Events";
import Locations from "@/components/home/Locations";
import Reviews from "@/components/home/Reviews";
import Contact from "@/components/home/Contact";


export default function Home() {
  return (
    <div>
      <Hero />
      <FromTide />
      <Selection />
      <Events/>
      <Locations/>
      <Reviews />
      <Contact />
    </div>
  )
}
