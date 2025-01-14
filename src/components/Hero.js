import Image from "next/image";

const Hero =()=>{
    return(
        <div className="w-full min-w-[360px] min-h-[663px] bg-[#F2F0F1] flex md:justify-center pb-72 flex-col md:flex-row  md:items-center ">
            {/* left */}
            <div className="md:flex-1  h-full flex flex-col  justify-center gap-6 px-4 md:px-7 py-4 md:py-7 ">
                <h1 className="text-black font leading-[64px] lg:text-6xl md:text-5xl text-4xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-[#00000099]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

                <button className="md:w-[210px] md:h-[52px] w-full h-14  rounded-[64px] bg-black text-white">Shop Now</button>
                <div className="grid md:grid-cols-3 md:place-items-start grid-cols-2 place-content-start place-items-center gap-5 md:gap-0 gap-x-0 ">
                    <div className="">
                        <div className="leading-[54px]  lg:text-[40px] font-bold md:text-[30px] text-[35px]">
                            200+
                        </div>
                        <div>
                            International Brands
                        </div>
                    </div>
                    <div className="lg:px-8 md:px-2  md:border-x-2  ">
                        <div className="leading-[54px] lg:text-[40px] font-bold md:text-[30px] text-[35px]">
                            2,000+
                        </div>
                        <div>
                            High-Quality Products
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1  md:pl-2  lg:pl-4">
                        <div className="leading-[54px] lg:text-[40px] font-bold md:text-[30px] text-[35px]">
                            30,000+
                        </div>
                        <div>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className="md:flex-1  relative">
                <Image src={"/Hero.jpeg"} alt="Hero" width={400} height={400} className="h-[663px] hidden md:block w-full object-contain "/>
                <Image src={"/HeroMobile.svg"} alt="Hero" width={400} height={400} className="md:hidden h-full w-full object-contain "/>
                <Image src={"/Star.png"} alt="Hero" width={200} height={200} className="absolute w-[76px] h-[76px] top-12 md:top-20 md:right-[5%] lg:right-[15%] sm:right-[10%] right-[7%] md:w-[104px] md:h-[104px]"/>
                <Image src={"/Star.png"} alt="Hero" width={100} height={100} className="absolute md:left-[6%] md:top-56  top-40 sm:top-72 lg:left-[15%] sm:left-[10%] left-[7%] w-[44px] h-[44px] md:w-[56px] md:h-[56px]"/>

            </div>
        </div>
    )
}
export default Hero;