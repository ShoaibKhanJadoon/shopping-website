import Image from "next/image";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";


const Footer = () => {
    return (
        <div className="flex px-2 min-h-[499px]  md:px-7  min-w-[360px] justify-center items-center flex-col relative bottom-0 bg-[#F0F0F0]">
            {/* stay upto date */}
            <div className="absolute bottom-[80%] grid md:grid-cols-2 grid-cols-1 w-[96%] md:w-[93%] bg-black py-9 px-9 min-h-[180px] h-max gap-6 rounded-[20px] mx-2 md:mx-7 place-items-center">
                {/* left side */}
                <div className="font-bold text-white leading-[45px] text-3xl flex flex-col   justify-center">
                    <p className=" flex-wrap text-[45px]">
                        STAY UPTO DATE ABOUT
                        OUR LATEST OFFERS
                    </p>
                </div>
                {/* right side */}
                <div className="h-[108px] flex flex-col w-full md:w-[95%] gap-3 justify-between  py-1 place-item-end">
                    <div className="rounded-3xl h-[46px] w-full flex justify-end">
                        <TfiEmail className=" min-w-[45px] h-full  bg-white rounded-l-3xl pl-4 pr-1 text-gray-500 border-none outline-none " />
                        <input className="rounded-r-3xl relative right-[1px] w-full pl-2 outline-none leading-5 border-none h-full text-xl" />
                    </div>
                    <input className="justify-end rounded-3xl text-xl placeholder-black leading-5 w-full h-[46px] outline-none border-none text-black text-center" placeholder="Subscribe to Newsletter" />
                </div>

            </div>
            {/* navigations */}
            <div className="grid lg:grid-cols-5 grid-cols-2 w-full gap-2 lg:gap-12 md:px-7 px-3 min-w-[360px] h-full mt-44 lg:mt-20 place-content-between">

                <div className="min-h-[177px]  w-full flex flex-col gap-6  lg:gap-6 justify-center lg:justify-between col-span-2 lg:col-span-1">

                    <Link href={'/'} className="hover:cursor-pointer text-3xl leading-8 text-black font-extrabold relative bottom-[2px]">SHOP.CO</Link>
                    <div className="flex flex-col gap-6 lg:gap-7">
                        <p className="text-[#00000099] lg:w-[187px]">
                            We have clothes that suits your style and which youre proud to wear. From women to men.
                        </p>
                        <div className="flex gap-2">

                            <Image src={"/Twiter.svg"} alt="X.com" width={20} height={20} />
                            <Image src={"/facebook.svg"} alt="X.com" width={20} height={20} />
                            <Image src={"/insta.svg"} alt="X.com" width={20} height={20} />
                            <Image src={"/git.svg"} alt="X.com" width={20} height={20} />

                        </div>
                    </div>

                </div>
                <div className="min-h-[177px] w-max h-full flex flex-col justify-evenly lg:gap-6 lg:justify-between">
                    <h1 className="font-medium text-base leading-[18px] tracking-[3px]">COMPANY</h1>
                    <ul className="leading-[19px] flex flex-col gap-2  lg:gap-6 text-[#00000099]">
                        <li><Link href={"/"}>About</Link></li>
                        <li><Link href={"/"}>Features</Link></li>
                        <li><Link href={"/"}>Works</Link></li>
                        <li><Link href={"/"}>Career</Link></li>

                    </ul>
                </div>
                <div className="min-h-[177px]  w-max h-full flex flex-col justify-evenly lg:gap-6  lg:justify-between">
                    <h1 className="font-medium text-base leading-[18px] tracking-[3px]">HELP</h1>
                    <ul className="leading-[19px] flex flex-col gap-2 lg:gap-6 text-[#00000099]">
                        <li><Link href={"/"}>Customer Support</Link></li>
                        <li><Link href={"/"}>Delivery Details</Link></li>
                        <li><Link href={"/"}>Terms and Comditions</Link></li>
                        <li><Link href={"/"}>Privacy Policy</Link></li>

                    </ul>
                </div>
                <div className="min-h-[177px]  w-max h-full flex flex-col justify-evenly lg:gap-6  lg:justify-between l">
                    <h1 className="font-medium text-base leading-[18px] tracking-[3px]">FAQ</h1>
                    <ul className="leading-[19px] flex flex-col gap-2 lg:gap-6 text-[#00000099]">
                        <li><Link href={"/"}>Account</Link></li>
                        <li><Link href={"/"}>Manage Delivery</Link></li>
                        <li><Link href={"/"}>Orders</Link></li>
                        <li><Link href={"/"}>Payments</Link></li>

                    </ul>
                </div>
                <div className="min-h-[177px]  w-max h-full flex flex-col justify-evenly lg:gap-6  lg:justify-between">
                    <h1 className="font-medium text-base leading-[18px] tracking-[3px]">RESOURCES</h1>
                    <ul className="leading-[19px] flex flex-col gap-2  lg:gap-6  text-[#00000099]">
                        <li><Link href={"/"}>Free eBooks</Link></li>
                        <li><Link href={"/"}>Development Tutorials</Link></li>
                        <li><Link href={"/"}>How to - Blog</Link></li>
                        <li><Link href={"/"}>Youtube Playlist</Link></li>

                    </ul>
                </div>

            </div>
            {/* bottom */}
            <div className="w-full border-t-2 mt-6 py-6 flex justify-between gap-4 flex-col lg:flex-row items-center">
                <div className="text-[#00000099]">
                    Shop.co © 2000-2023, All Rights Reserved
                </div>
                <div className=" flex ">
                    <Image src={"/visa.svg"} width={46} height={30} alt="visa" />
                    <Image src={"/redyellow.svg"} width={46} height={30} alt="redyellow" />
                    <Image src={"/paypal.svg"} width={46} height={30} alt="paypal" />
                    <Image src={"applepay.svg"} width={46} height={30} alt="applepay" />
                    <Image src={"/gpay.svg"} width={46} height={30} alt="gpay" />

                </div>
            </div>
        </div>
    )
}
export default Footer;