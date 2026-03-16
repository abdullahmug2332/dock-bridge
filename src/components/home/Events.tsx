import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Events() {
  const events = [
    {
      img: "/seafood.png",
      name: "Corporate Event",
    },
    {
      img: "/seafood.png",
      name: "Wedding Seafood",
    },
    {
      img: "/seafood.png",
      name: "Private Party",
    },
    {
      img: "/seafood.png",
      name: "Custom Platters",
    },
    {
      img: "/seafood.png",
      name: "Professional Events",
    },
    {
      img: "/seafood.png",
      name: "Family Gathering",
    },
  ];
  return (
    <div className="container pad " id="catering">
      <div className="text-center mb-12">
        <h4 className="mb-1 subtitle">Event / Catering</h4>
        <h2 className="title mb-2 ">
          Seafood catering for Events and Busineessess
        </h2>
        <p className="p mx-auto w-[90%] max-w-[1100px]">
          We provide premium seafood catering services for corporate events,
          weddings, private parties, and large gatherings. Our chefs prepare
          fresh seafood menus tailored to your event size and preferences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-10  mt-10">
          {events.map((e, i) => (
            <div className="flex flex-col items-center gap-3" key={i}>
              <img src={e.img} alt="img" className="w-full rounded-[25px]" />
              <p className="salsify text-[30px] md:text-[35px] lg:text-[40px]">
                {e.name}
              </p>
            </div>
          ))}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg2 text-white border border2 hover:bg-[transparent]! hcolor2 px-[25px] py-[9px] text-[15px] cursor-pointer rounded-sm hborder2 font-medium mt-10">
              Book our catering service
            </button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[600px] border-0 bg-white sm:p-8 py-10 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="salsify text-[40px] text-center">Catering Request</DialogTitle>
            </DialogHeader>

            <form className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input placeholder="Enter your name" />
              </div>

              <div>
                <Label>Email Address</Label>
                <Input type="email" placeholder="Enter your email" />
              </div>

              <div>
                <Label>Phone Number</Label>
                <Input type="tel" placeholder="Enter phone number" />
              </div>

              <div>
                <Label>Event Type</Label>
                <Input placeholder="Corporate, Wedding, Party etc" />
              </div>

              <div>
                <Label>Message</Label>
                <Textarea placeholder="Tell us about your event..." />
              </div>

              <Button className="w-full">Submit Catering Request</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
