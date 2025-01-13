"use client"
import Link from "next/link"
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import NavigationMenuShop from "@/components/NavigationMenu";

const Header = () => {
    const navigation = [
        { name: "Shop", href: "/", dropdown: true },
        { name: "OnSale", href: "/", dropdown: false },
        { name: "New Arrivals", href: "/", dropdown: false },
        { name: "Brands", href: "/", dropdown: false },
    ]
    return (
        <header>
            <div className="w-full h-[48px] gap-2 flex items-center justify-between box-border min-w-[360px] md:justify-center my-3 px-4 md:px-7 ">
                {/* logo */}
                <div className="flex items-center justify-center ">
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger className="flex items-center justify-center" asChild>
                                <IoMenu className="w-7 h-8 mr-2" />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>SHOP.CO</SheetTitle>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                    {navigation.map((item, index) => (
                                        <li key={index} className="list-none w-full">
                                            {item.dropdown ? <NavigationMenuShop name={item.name} /> : <Link href={item.href} >
                                                <span className=" hover:underline hover:cursor-pointer">
                                                    {item.name}
                                                </span>
                                            </Link>}
                                        </li>
                                    ))}
                                </div>

                            </SheetContent>
                        </Sheet>
                    </div>
                    <Link href={'/'} className="hover:cursor-pointer text-3xl leading-8 text-black font-extrabold relative bottom-[2px]">SHOP.CO</Link>
                </div>
                {/* navigation */}
                <div className="hidden md:block flex-1">
                    <ul className="flex items-center text-sm justify-evenly  ">
                        {navigation.map((item, index) => (
                            <li key={index}>
                                {item.dropdown ? <NavigationMenuShop name={item.name} /> : <Link href={item.href} >
                                    <span className=" hover:underline hover:cursor-pointer">
                                        {item.name}
                                    </span>
                                </Link>}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* search */}
                <div className="hidden md:block flex-1">
                    <div className="md:bg-[#F0F0F0] h-9 flex items-center w-full justify-center rounded-[60px] hover:cursor-pointer gap-1  p-1">
                        <IoSearchOutline className="text-gray-500" />
                        <input type="text" className="bg-[#F0F0F0]  text-xs flex-1 font-medium outline-none rounded-r-[60px] " placeholder="Search for products..." />
                    </div>
                </div>
                {/* cart and profile */}
                <div className="flex items-center justify-end gap-2 w-12 ">
                    <IoSearch className="hover:cursor-pointer md:hidden w-5 h-5 " />
                    <FiShoppingCart className="hover:cursor-pointer w-5 h-5 md:w-3 md:h-3" />
                    <CgProfile className="hover:cursor-pointer w-5 h-5 md:w-3 md:h-3" />
                </div>
            </div>
        </header>
    )
}
export default Header;