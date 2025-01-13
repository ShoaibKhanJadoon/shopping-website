import Image from "next/image";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";


const Footer=()=>{
    return(
        <div className="flex px-2 h-[499px] md:px-7 min-w-[360px] justify-center items-center flex-col relative bottom-0 bg-[#F0F0F0]">
            {/* stay upto date */}
            <div className="absolute -top-72 md:-top-56 grid md:grid-cols-2 grid-cols-1 w-[96%] md:w-[93%] bg-black py-9 px-9 min-h-[180px] h-max w- rounded-[20px] mx-2 md:mx-7 place-items-center">
                {/* left side */}
                <div className="font-bold text-white leading-[45px] text-3xl flex flex-col   justify-center"> 
                    <p className=" flex-wrap text-[45px]">
                        STAY UPTO DATE ABOUT 
                        OUR LATEST OFFERS
                    </p>
                </div>
                {/* right side */}
                <div className="h-[108px] flex flex-col w-full md:w-[95%] justify-between  py-1 place-item-end">
                    <div className="rounded-3xl h-[46px] w-full flex justify-end">
                        <TfiEmail className=" min-w-[38px] h-full bg-white rounded-l-3xl pl-4  text-gray-500 border-none "/>
                        <input className="rounded-r-3xl flex-1 w-full pl-2 outline-none leading-5 border-none h-full text-xl"/>
                    </div>
                    <input className="justify-end rounded-3xl text-xl placeholder-black leading-5 w-full h-[46px] outline-none border-none text-black text-center" placeholder="Subscribe to Newsletter" />
                </div>

            </div>
            {/* navigations */}
            <div className="grid grid-cols-5 gap-2  md:px-7 min-w-[360px] h-[177px]">
                <div>
                    <Link href={'/'} className="hover:cursor-pointer text-3xl leading-8 text-black font-extrabold relative bottom-[2px]">SHOP.CO</Link>
                    <p>
                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                    </p>
                    <div className="flex">
                    
                        <Image src={"/Twiter.svg"} alt="X.com" width={20} height={20} />
                        <Image src={"/Twiter.svg"} alt="X.com" width={20} height={20} />
                        <Image src={"/Star.png"} alt="X.com" width={20} height={20} />
                        <Image src={"/Star.png"} alt="X.com" width={20} height={20} />

                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>
            {/* bottom */}
            <div></div>
        </div>
    )
}
export default Footer;