import { RxCross2 } from "react-icons/rx";

const Announcement = () => {
    return (
        <div>
            <div className="relative w-full h-10 min-w-[360px] md:h-[38px] text-white bg-black md:gap-2 gap-[3px] flex justify-center items-center py-[9px] ">
                <h3 className="text-xs md:text-sm ">Sign up and get 20% off to your first order.</h3>
                <button className="hover:cursor-pointer underline decoration-1 font-medium underline-offset-4 text-sm  md:text-base" >Sign Up Now</button>
                <RxCross2 className="hidden hover:cursor-pointer md:block right-14 absolute top-[9px] w-[20px] h-[20px] text-white" />
            </div>
        </div>
    )
}
export default Announcement;