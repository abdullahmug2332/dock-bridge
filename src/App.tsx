import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import FromTide from "@/components/FromTide";
import Selection from "@/components/Selection";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <main className="w-full ">
      <Navbar />
      <Hero />
      <FromTide />
      <Selection />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;