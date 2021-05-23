import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addToBasket } from "../slices/basketSlice"
import styles from "../styles/Product.module.css"
import { StarIcon } from "@heroicons/react/solid"
import Currency from 'react-currency-formatter';
import QuantityCount from "./QuantityCount"
import { useRouter } from 'next/router';

function QuickView({setShowQuick, id, products}) {
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const router = useRouter()
    const [added, setAdded] = useState(false)
    
    const MAX_RATING = 5
    const MIN_RATING = 1
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )

    const addItemToBasket = () => {
        dispatch(addToBasket({...product, title: product.name, quantity}))
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }
    useEffect(() => {
        const found = products.filter(product => product.id == id)[0]
        setProduct(found)
        console.log(found)
    }, [id])
//{ name, price, images, description, colors, company, stock, reviews, category, shipping }
    return (
        <>
        <div className={"fixed w-full h-screen sm:h-auto top-0 left-0 flex justify-center items-start overflow-y-scroll " + styles.quickView} style={{ zIndex: '1200'}}>
            <div className={`relative max-w-screen-xl my-48 mb-20 rounded-lg ${styles.quickView_wrapper}`} style={{ zIndex: '200'}}>
                <div className="flex flex-wrap mt-5">
                        <div className="px-5 mb-7 w-full md:w-7/12">
                            <div className="w-full mb-4 overflow-hidden rounded-lg h-auto">
                                {product && (
                                    <img loading="lazy" className={"w-full rounded-lg h-full width " + styles.quickView_product_image_new}  src={product?.image} alt="" />
                                )}
                            </div>
                        </div>
                        <div className="px-5 mb-5 w-full md:w-5/12">
                            <p className="font-serif text-xl text-black">{product?.category}</p>
                            <h1 className="my-2 text-5xl text-yellow-500 mb-7">{product?.name}</h1>
                            <p className="text-gray-600 text-base mb-5">{product?.description}</p>
                            <p className="flex items-center">
                                <b className="mr-1">Rating:</b>
                                    {" "}
                                    {Array(rating).fill().map((_, index) => (
                                        <StarIcon key={index} className="h-5 text-yellow-500" />
                                    ))}
                                <span> (30)</span>
                            </p>
                            <p><b>Company:</b> {product?.company}</p>
                            <p><b>Stock:</b> Available in stock</p>
                            
                            <div className="flex items-center my-4 cursor-pointer">
                                {product?.colors && product?.colors.map(color => (
                                    <div key={Math.random()} className={`w-7 h-7 border-gray-200 border-4 rounded-full mx-1`} style={{ background: color }}/>
                                ))}
                            </div>
                            <p className="text-yellow-500 text-2xl mb-7">
                                <Currency
                                    quantity={product?.price}
                                />
                            </p>
                            {product?.shipping && (
                                <div className="flex items-center space-x-2">
                                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                                    <p className="text-xs text-gray-500">Free Next-day delivery</p>
                                </div>
                            )}
                            <QuantityCount setQuantity={setQuantity} quantity={quantity} />
                            <button onClick={addItemToBasket} className="w-full button mt-4">{added ? 'Added' : 'Add to Busket'}</button>
                            <button onClick={() => router.push('/product/' + product?.id)} className="w-full button mt-4">View details</button>
                        </div>
                    </div>
                </div>
            <div onClick={() => setShowQuick(false)} className="w-full h-screen bg-gray-900 bg-opacity-60 fixed top-0 right-0 cursor-pointer" style={{ zIndex: '100'}}/>
        </div>
        
        </>
    )
}

export default QuickView
