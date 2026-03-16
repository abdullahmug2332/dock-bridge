import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock, FaPhone } from "react-icons/fa6";

type Location = {
  title: string;
  address: string;
  hours: string;
  phone: string;
  mapLink: string;
};

export default function Locations() {
  const locations: Location[] = [
    {
      title: "Downtown Seafood Pickup",
      address: "Lorem 123, Ipsum 456, Dolor 78, Sit 09, AMET",
      hours: "Mon – Sat: 10:00 AM – 7:00 PM",
      phone: "+92 300 0000000",
      mapLink: "#",
    },
    {
      title: "Harbor Market Pickup",
      address: "Lorem 123, Ipsum 456, Dolor 78, Sit 09, AMET",
      hours: "Mon – Sat: 10:00 AM – 7:00 PM",
      phone: "+92 300 0000000",
      mapLink: "#",
    },
    {
      title: "Coastal Market Road Pickup",
      address: "Lorem 123, Ipsum 456, Dolor 78, Sit 09, AMET",
      hours: "Mon – Sat: 10:00 AM – 7:00 PM",
      phone: "+92 300 0000000",
      mapLink: "#",
    },
  ];
  return (
    <div className="bg-[#F7F7F8] pad" id="locations">
      <div className="container ">
        <div className="text-center mb-12">
          <h4 className="mb-1 subtitle">Locations</h4>
          <h2 className="title mb-2 ">Our Pickup Locations</h2>
          <p className="p mx-auto w-[90%] max-w-[1100px]">
            Choose a convenient location to collect your fresh seafood order.
            Our trusted pickup points ensure quick and reliable order
            collection.
          </p>
          <div className="flex flex-col lg:flex-row gap-10 mt-15">
            <div className="w-full lg:w-[37%]  flex flex-col gap-10">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className=" border-b pb-8 border-gray-300 flex flex-col items-start"
                >
                  <p className="text-[27px] mb-3 font-[400] text-left salsify">
                    {loc.title}
                  </p>

                  <div className="flex items-center gap-2 mb-2 p ">
                    <FaMapMarkerAlt className="text-teal-500" />
                    <span>{loc.address}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-2 p">
                    <FaClock className="text-teal-500" />
                    <span>{loc.hours}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3 p">
                    <FaPhone className="text-teal-500" />
                    <span>{loc.phone}</span>
                  </div>
                  <p>
                    <a
                      href={loc.mapLink}
                      className="text-red-500 text-sm underline text-left inline"
                    >
                      View on Map
                    </a>
                  </p>
                </div>
              ))}
            </div>
            <div className="flex-1 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30064.438316969612!2d-97.61757863593422!3d35.54002961425708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1773240989764!5m2!1sen!2s"
                width="600"
                height="450"
                loading="lazy"
                className="w-full h-[600px] rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
