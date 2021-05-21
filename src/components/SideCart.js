import { 
    ShoppingCartIcon,
    XIcon
 } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems, selectTotal, removeFromBasket } from '../slices/basketSlice'
import Currency from 'react-currency-formatter';
import { useRouter } from 'next/router';

function SideCart({setShowCart}) {
    const dispatch = useDispatch()
    const items = useSelector(selectItems)
    const router = useRouter()
    const totalPrice = useSelector(selectTotal)

    const removeItemFromBasket = (id) => { 
        dispatch(removeFromBasket({ id }))
    }

    return (
        <div className="fixed w-full h-screen top-0 right-0 z-50 flex justify-end">
            <div className="relative z-30 w-80 bg-white h-screen flex flex-col">
                <div className="text-white bg-amazon_blue py-3 px-3 text-center flex items-center justify-center">
                    <ShoppingCartIcon className="h-10"/>
                    <span className="font-medium ml-4">Basket ({items.length})</span>
                </div>
                <div className="flex-grow bg-gray-50">
                    {!!items.length ? items.map(item => (
                        <div key={Math.random()} className="flex p-3 mb-1 border-b-2 border-gray-100 items-center bg-white">
                            <div className="flex-grow">
                                <div className="flex">
                                    <span className="text-gray-400">1x</span> <span className="text-gray-900 ml-2 line-clamp-1 cursor-pointer">{item.title}</span>
                                </div>
                                <div className="text-gray-400">
                                    <Currency
                                        quantity={item.price}
                                    />
                                </div>
                            </div>
                            <XIcon onClick={() => removeItemFromBasket(item.id)} className="h-5 ml-2 cursor-pointer text-black"/>
                        </div>
                    )) : (
                        <p className="text-sm text-gray-400 text-center py-4">No item on Busket!</p>
                    )}
                </div>
                <div className="p-3 border-t-2 border-gray-100">
                    <button className="w-full button" onClick={() => router.push('/checkout')}>Checkout {" "}
                        <Currency
                            quantity={totalPrice}
                        />
                    </button>
                </div>
            </div>
            <div onClick={() => setShowCart(false)} className="w-full h-screen bg-gray-900 bg-opacity-60 fixed top-0 right-0 z-10" />
        </div>
    )
}

export default SideCart