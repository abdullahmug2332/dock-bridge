export default function Hero() {
  return (
    <div className="hero min-h-[92vh]! border flex flex-col justify-center items-start">
      <div className="container text-white flex flex-col items-start justify-center ">
        <div className="w-full sm:w-[60%] lg:w-[50%] xl:w-[40%]  flex flex-col gap-7">
          <p className="text-[50px] sm:text-[50px] md:text-[50px] lg:text-[60px] xl:text-[70px] leading-[110%] salsify">Fresh Catch Delivered to Your Doorstep</p>
          <p className="text-[23px] font-light" >From dock to doorstep, premium seafood, responsibly sourced</p>
          <div className="flex items-center gap-2 flex-wrap">
            <button className="bg2 text-white border border2 hover:bg-[transparent]! hcolor2 px-[30px] py-[5px] rounded-sm hborder2 font-medium">Shop Now</button>
            <button className="bg-white text-gray-900! border-white! hover:border-white! border2 hover:bg-white/80! hcolor2 px-[30px] py-[5px] rounded-sm hborder2 font-medium">Pre Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
