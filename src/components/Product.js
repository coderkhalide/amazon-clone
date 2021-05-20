import Image from "next/image"
import { useState } from "react"
import { StarIcon } from "@heroicons/react/solid"
import Currency from 'react-currency-formatter';
import styles from "../styles/Product.module.css"
import Link from 'next/link'

function Product({id, title, price, description, image, shipping, colors, setShowCart}) {
    const MAX_RATING = 5
    const MIN_RATING = 1

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )

    return (
        <div className={"relative flex flex-col m-5 bg-white z-30 p-8 rounded-xl " + styles.loop_product}>
            
                {/* <> */}
                    <Link href={`/product/${id}`}>
                        <Image title="Please Click MEEEE" className={"cursor-pointer rounded-lg " + styles.loop_product_image} loading="lazy" src={image} width={500} height={400} objectFit="cover" />
                    </Link>
                    <Link href={`/product/${id}`}>
                        <h4 className="cursor-pointer my-3 font-bold">{title}</h4>
                    </Link>
                {/* </> */}
            
            <div className="flex">
                {Array(rating).fill().map((_, index) => (
                    <StarIcon key={index} className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-1">
                <Currency
                    quantity={price}
                    currency="EUR"
                />
            </div>
            <div className="flex items-center my-4">
                {colors && colors.map(color => (
                    <div key={Math.random()} className={`w-7 h-7 border-gray-200 border-4 rounded-full mx-1`} style={{ background: color }}/>
                ))}
            </div>
            {shipping && (
                <div className="flex items-center space-x-2">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">Free Next-day delivery</p>
                </div>
            )}
            <button title="Please Click MEEEE" onClick={() => setShowCart(true)} className="mt-auto button">Add to Busket</button>
        </div>
    )
}

export default Product
