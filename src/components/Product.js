import Image from "next/image"
import { useState } from "react"
import { StarIcon } from "@heroicons/react/solid"
import Currency from 'react-currency-formatter';
import styles from "../styles/Product.module.css"
import Link from 'next/link'
import Fade from 'react-reveal/Fade';
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { 
    EyeIcon,
} from '@heroicons/react/outline'
import QuickView from "./QuickView";

function Product({id, title, price, category, description, image, shipping, colors, company, setShowCart, products}) {
    const dispatch = useDispatch()
    const MAX_RATING = 5
    const MIN_RATING = 1
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    const [showQuick, setShowQuick] = useState(false)
    const [added, setAdded] = useState(false)

    const addItemToBasket = () => {
        const product = {id, title, price, category, description, image, shipping, colors, quantity: 1}
        
        dispatch(addToBasket(product))
        setShowCart(true)
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }

    return (
        <>
            <Fade bottom>
                <>
                <div className={"relative flex flex-col m-5 z-40 bg-white p-8 rounded-xl " + styles.loop_product}>
                    <div className={`relative rounded-lg ${styles.product_image_wrapper}`}>
                        <Image className={"cursor-pointer rounded-lg overflow-hidden w-full " + styles.loop_product_image} loading="lazy" src={image} width={800} height={500} objectFit="cover" />
                        <div onClick={() => setShowQuick(true)} className={ `rounded-lg cursor-pointer ${styles.product_image_overly}`}>
                            <div className={`button rounded-lg ${styles.product_image_overly_button}`}>
                                <span>Quick View</span>
                                <EyeIcon className="h-6" />
                            </div>
                        </div>
                    </div>
                    <Link href={`/product/${id}`}>
                        <h4 title={title} className="cursor-pointer my-3 font-bold">{title}</h4>
                    </Link>
                    {company}
                    
                    <div className="flex">
                        {Array(rating).fill().map((_, index) => (
                            <StarIcon key={index} className="h-5 text-yellow-500" />
                        ))}
                    </div>
                    <p className="text-xs my-2 line-clamp-2">{description}</p>
                    <div className="mb-1">
                        <Currency
                            quantity={price}
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
                    <button title="Add to cart" onClick={addItemToBasket} className="mt-auto button">{added ? 'Added' : 'Add to Busket'}</button>
                </div>
                </>
            </Fade>
        {showQuick && <QuickView setShowQuick={setShowQuick} id={id} products={products} />}
        </>
    )
}

export default Product
