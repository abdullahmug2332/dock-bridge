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
    <div className="container pad ">
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
        <button className="bg2 text-white border border2 hover:bg-[transparent]! hcolor2 px-[25px] py-[9px] text-[15px] cursor-pointer rounded-sm hborder2 font-medium mt-10">
          Book our catering service
        </button>
      </div>
    </div>
  );
}
