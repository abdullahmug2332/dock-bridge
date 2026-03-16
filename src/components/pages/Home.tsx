import FromTide from "../home/FromTide";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import Selection from "@/components/home/Selection";
import Events from "@/components/home/Events";
import Locations from "@/components/home/Locations";
import Reviews from "@/components/home/Reviews";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";


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
