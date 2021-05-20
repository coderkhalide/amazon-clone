import { 
    ShoppingCartIcon,
    XIcon
 } from '@heroicons/react/outline'

function SideCart({setShowCart}) {
    return (
        <div className="fixed w-full h-screen top-0 right-0 z-50 flex justify-end">
            <div className="relative z-30 w-80 bg-white h-screen flex flex-col">
                <div className="text-white bg-amazon_blue py-3 px-3 text-center flex items-center justify-center">
                    <ShoppingCartIcon className="h-10"/>
                    <span className="font-medium ml-4">Basket (4)</span>
                </div>
                <div className="flex-grow bg-gray-50">
                    <div className="flex p-3 mb-1 border-b-2 border-gray-100 items-center bg-white">
                        <div className="flex-grow">
                            <div className="flex">
                                <span className="text-gray-400">1x</span> <span className="text-gray-900 ml-2 line-clamp-1 cursor-pointer">Product Name</span>
                            </div>
                            <div className="text-gray-400">$9.99</div>
                        </div>
                        <XIcon className="h-5 ml-2 cursor-pointer text-black"/>
                    </div>
                    <div className="flex p-3 mb-1 border-b-2 border-gray-100 items-center bg-white">
                        <div className="flex-grow">
                            <div className="flex">
                                <span className="text-gray-400">1x</span> <span className="text-gray-900 ml-2 line-clamp-1 cursor-pointer">lorem ipsum doller site here we go
                                </span>
                            </div>
                            <div className="text-gray-400">$9.99</div>
                        </div>
                        <XIcon className="h-5 ml-2 cursor-pointer text-black"/>
                    </div>
                    <div className="flex p-3 mb-1 border-b-2 border-gray-100 items-center bg-white">
                        <div className="flex-grow">
                            <div className="flex">
                                <span className="text-gray-400">1x</span> <span className="text-gray-900 ml-2 line-clamp-1 cursor-pointer">Bring out your backyard</span>
                            </div>
                            <div className="text-gray-400">$9.99</div>
                        </div>
                        <XIcon className="h-5 ml-2 cursor-pointer text-black"/>
                    </div>
                    <div className="flex p-3 mb-1 border-b-2 border-gray-100 items-center bg-white">
                        <div className="flex-grow">
                            <div className="flex">
                                <span className="text-gray-400">1x</span> <span className="text-gray-900 ml-2 line-clamp-1">Chill out this summer friday</span>
                            </div>
                            <div className="text-gray-400">$9.99</div>
                        </div>
                        <XIcon className="h-5 ml-2 cursor-pointer text-black"/>
                    </div>
                </div>
                <div className="p-3 border-t-2 border-gray-100">
                    <button className="w-full button mb-2">View Basket</button>
                    <button className="w-full button">Checkout</button>
                </div>
            </div>
            <div onClick={() => setShowCart(false)} className="w-full h-screen bg-gray-900 bg-opacity-60 fixed top-0 right-0 z-10" />
        </div>
    )
}

export default SideCart