import { Button } from "./ui/button";
import { Carousel } from "./ui/carousel";
import { FaFishFins } from "react-icons/fa6";
export default function FromTide() {
  return (
    <section className="py-20 md:py-32   bg-white">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        {/* Carousel Section */}
        <div className="order-2 lg:order-1">
          <img
            src="/section2.png"
            alt="section2"
            className="w-full rounded-3xl"
          />
        </div>

        {/* Text Section */}
        <div className="order-1 lg:order-2">
          <p className="color text-3xl angello ">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight salsify salsify">
            From Inch to Tide
          </h2>
          <p className="text-gray-600 text-md mb-2 leading-relaxed">
            We bring the ocean closer to your home. Our platform is built to
            make fresh, high-quality seafood easily accessible, with complete
            transparency from sourcing to delivery. By working directly with
            trusted fishermen and verified suppliers, we ensure that every order
            meets the highest standards of freshness and safety.
          </p>
          <p className="text-gray-600 text-md mb-2 leading-relaxed">
            Our mission is simple deliver seafood the way it should be: fresh,
            responsibly sourced, and handled with care. From the moment the
            catch leaves the dock to the time it reaches your doorstep, we
            maintain strict quality control and cold-chain standards so you
            receive nothing but the best.
          </p>
          <p className="text-gray-600 text-md mb-4 leading-relaxed">
            We're not just selling seafood we're building a smarter, more
            reliable way to enjoy it. With easy online ordering, clear pricing,
            and dependable delivery, we make premium seafood convenient for
            every household.
          </p>

          <div className="space-y-2 mb-8">
            {[
              "Fresh catch delivered daily",
              "Direct sourcing from trusted fishermen",
              "Strict quality & hygiene standards",
              "Transparent pricing - no hidden charges",
              "Fast, reliable doorstep delivery",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <FaFishFins className="color" />
                </div>
                <div>
                  <p className="text-gray-600 text-md">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg2 text-white border border2 hover:bg-[transparent]! hcolor2 px-[30px] py-[5px] rounded-sm hborder2 font-medium">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
