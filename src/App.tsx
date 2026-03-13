import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import FromTide from "@/components/FromTide";
import Selection from "@/components/Selection";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Events from "./components/Events";
import Locations from "./components/Locations";

function App() {
  return (
    <main className="w-full ">
      <Navbar />
      <Hero />
      <FromTide />
      <Selection />
      <Events/>
      <Locations/>
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;