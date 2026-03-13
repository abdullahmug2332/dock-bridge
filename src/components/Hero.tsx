export default function Hero() {
  return (
    <div className="hero h-[92vh]!  flex flex-col justify-center items-start min-h-[500px]" id="home">
      <div className="container text-white flex flex-col items-start justify-center ">
        <div className="w-full sm:w-[60%] lg:w-[50%] xl:w-[45%]  flex flex-col gap-7">
          <p className="text-[50px] sm:text-[50px] md:text-[50px] lg:text-[60px] xl:text-[100px] leading-[110%] salsify">Fresh Catch Delivered to Your Doorstep</p>
          <p className="text-[23px] font-[400]!" >From dock to doorstep, premium seafood, responsibly sourced</p>
          <div className="flex items-center gap-2 flex-wrap">
            <button className="bg2 text-white border border2 hover:bg-[transparent]! hcolor2 px-[35px] py-[7px] rounded-sm hborder2 font-[500] text-[14px] cursor-pointer">Shop Now</button>
            <button className="bg-white text-gray-900! border border-white! hover:border-white! border2 hover:text-white/80! hcolor2 hover:bg-transparent px-[35px] py-[7px] rounded-sm hborder2  text-[14px] cursor-pointer font-[500]">Pre Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
