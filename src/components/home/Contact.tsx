import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      className="pad md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50"
      id="contact-us"
    >
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="subtitle">Contact Us</p>

          <h2 className="mb-6 title">Get In Touch</h2>

          <p className="p mb-8 md:w-[80%]">
            Have questions about our seafood or your order? Our team is here to
            help you with quick and reliable support.
          </p>

          <div className="space-y-4 mb-8">
            <div>
              <Input
                placeholder="Your Name"
                className="w-full rounded-lg bg-white px-4! py-6! text-[17px]! "
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email Address"
                className="w-full px-4! py-6! text-[17px]! rounded-lg bg-white"
              />
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4! py-6! text-[17px]! rounded-lg bg-white"
              />
            </div>

            <div>
              <Textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-4! py-4! min-h-40 text-[17px]! rounded-lg bg-white resize"
              />
            </div>
          </div>

          <Button className="bg2 text-white border border2 hover:bg-[transparent]! hcolor2 px-[25px] py-[9px] text-[15px] cursor-pointer rounded-sm hborder2 font-medium">
            Submit Message
          </Button>
        </div>

        <div className="block">
          <img src="/fish.png" alt="fish" className="w-full rounded-2xl" />
        </div>
      </div>
    </section>
  );
}