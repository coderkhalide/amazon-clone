import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid"
import { useState } from "react";
import Currency from 'react-currency-formatter';
import { removeFromBasket } from "../slices/basketSlice";
import QuantityCount from "./QuantityCount";
import { useDispatch } from "react-redux";

function CheckoutProduct({id, title, price, description, image, shipping, quantity}) { // TODO: Color and quantity
    const dispatch = useDispatch()
    
    const MAX_RATING = 5
    const MIN_RATING = 1
    const [quantityUp, setQuantityUp] = useState(quantity)

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    const removeItemFromBasket = () => { 
        dispatch(removeFromBasket({ id }))
    }
    
    return (
        <div className="grid grid-cols-5">
            <Image 
                src={image}
                width={200}
                height={200}
                objectFit='contain'
                className="rounded-lg"
            />
            <div className="col-span-3 mx-5">
                <p className="text-lg mb-1 text-gray-800 font-medium">{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, index) => (
                        <StarIcon key={index} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <div className="text-gray-400">
                    <Currency
                        quantity={price}
                    /> {" * "} {quantity} {" = "}
                    <Currency
                        quantity={price * quantity}
                    />
                </div>
                {shipping && (
                    <div className="flex items-center space-x-2">
                        <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                        <p className="text-xs text-gray-500">Free Next-day delivery</p>
                    </div>
                )}
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                {/* <button onClick={addItemToBasket} className="mt-auto button">Add to Busket</button> */}
                <QuantityCount id={id} dispatch setQuantity={setQuantityUp} quantity={quantityUp}/>
                <button onClick={removeItemFromBasket} className="mt-auto button">Remove from Busket</button>
            </div>
                
        </div>
    )
}

export default CheckoutProduct
