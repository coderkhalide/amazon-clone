import Image from "next/image"
import { 
    MenuIcon, 
    SearchIcon, 
    ShoppingCartIcon
 } from '@heroicons/react/outline'

import SideCart from "./SideCart";
import Link from "next/link";

function Header({setShowCart, showCart}) {
    return (
        <>
        <div className="header">
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Link href="/">
                        <Image
                            src="https://links.papareact.com/f90"
                            width={150}
                            height={40}
                            objectFit="contain"
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Search */}
                <div className="hidden items-center flex-grow cursor-pointer rounded-md h-10 bg-yellow-400 sm:flex hover:bg-yellow-500">
                    <input placeholder="Search anything you need..." className="p-2 px-5 h-full width-6 flex-grow rounded flex-shrink rounded-l-md focus:outline-none" type="text" />
                    <SearchIcon className="h-12 p-4"/>
                </div>

                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        <p>Hell, Khalid Saifullah</p>
                        <p className="font-extrabold md:text-sm">Account & Links</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div title="Please Click MEEEE" onClick={() => setShowCart(true)} className="link relative flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10 " />
                        <p className="font-extrabold md:text-sm hidden md:inline mt-2 ">Busket</p>
                    </div>
                </div>
            </div>

            {/* Bottom nav */}
            <div className="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center"> 
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy again</p>
                <p className="link hidden lg:inline-flex">Shopping Toolkit</p>
                <p className="link hidden lg:inline-flex">Mens & Womens</p>
            </div>
        </div>
        {showCart && <SideCart setShowCart={setShowCart} />}
        </>
    )
}

export default Header
