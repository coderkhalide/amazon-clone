import Header from "../../components/Header"
import Link from 'next/link'
import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
import { useState } from "react"
import Currency from 'react-currency-formatter';
import Head from "next/head"
import styles from "../../styles/Product.module.css"
import Product from "../../components/Product"
import Footer from "../../components/Footer"
import { useDispatch } from "react-redux"
import { addToBasket } from "../../slices/basketSlice"
import QuantityCount from "../../components/QuantityCount"

function Details({product, products}) {
    const dispatch = useDispatch()
    const [showCart, setShowCart] = useState(false)
    const { name, price, images, description, colors, company, stock, reviews, category, shipping } = product
    const [activeImage, setActiveImage] = useState(images[0].thumbnails.large.url)
    const [quantity, setQuantity] = useState(1)

    const MAX_RATING = 5
    const MIN_RATING = 1

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )

    const addItemToBasket = () => {
        dispatch(addToBasket({...product, title: product.name, quantity}))
        setShowCart(true)
    }

    return (
        <>
            <Head>
                <title>{name} | Amazon</title>
            </Head>
             <Header products={products} setShowCart={setShowCart} showCart={showCart} />
             <div className="bg-gray-200 p-10 mb-10">
                <div className="max-w-screen-xl mx-auto">
                    <span className="font-medium"><Link href='/'>Home</Link></span> / <span className="font-medium"><Link href='/'>Product</Link></span> / <span className="text-yellow-500">{product.name}</span>
                </div>
            </div>
             <main className="max-w-screen-xl mx-auto mt-5">
                <div className="flex flex-wrap">
                    <div className="px-5 mb-7 w-full md:w-7/12">
                        <div className="w-full mb-4">
                            <Image className={"w-full rounded-lg " + styles.product_image} width={700} height={500} objectFit="cover" src={activeImage} alt="" />
                        </div>
                        <div className="flex items-center">
                            {images && images.map(image => (
                                <div className="mr-3 mb-3 cursor-pointer" key={image.id} onClick={() => setActiveImage(image.thumbnails.large.url)}>
                                    <Image className="rounded-md" width={100} height={100} objectFit="cover" src={image.thumbnails.large.url} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="px-5 mb-10 w-full md:w-5/12">
                        <p className="font-serif text-xl text-black">{category}</p>
                        <h1 className="my-2 text-5xl text-yellow-500 mb-7">{name}</h1>
                        <p className="text-gray-600 text-base mb-5">{description}</p>
                        <p className="flex items-center">
                            <b className="mr-1">Rating:</b>
                                {" "}{rating}<StarIcon className="h-5 text-yellow-500" />
                            <span> ({reviews})</span>
                        </p>
                        <p><b>Company:</b> {company}</p>
                        <p><b>Stock:</b> {stock > 0 ? 'Available in stock' : 'Stock out!'}</p>
                        
                        <div className="flex items-center my-4 cursor-pointer">
                            {colors && colors.map(color => (
                                <div key={Math.random()} className={`w-7 h-7 border-gray-200 border-4 rounded-full mx-1`} style={{ background: color }}/>
                            ))}
                        </div>
                        <p className="text-yellow-500 text-2xl mb-7">
                            <Currency
                                quantity={price}
                            />
                        </p>
                        {shipping && (
                            <div className="flex items-center space-x-2">
                                <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                                <p className="text-xs text-gray-500">Free Next-day delivery</p>
                            </div>
                        )}
                        <QuantityCount setQuantity={setQuantity} quantity={quantity} />
                        <button onClick={addItemToBasket}className="w-full button mt-4">Add to Busket</button>
                    </div>
                </div>
            </main>
            <div className="mt-12 bg-gradient-to-t from-gray-100 to-transparent">
                <div className="max-w-screen-2xl mx-auto">
                    <h1 className="text-yellow-500 text-3xl mb-7">Related Projects</h1>
                    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products && products.slice(0, 4).map(({ id, name, price, description, category, image, shipping, colors }) => (
                            <Product setShowCart={setShowCart} key={id} id={id} name={name} title={name} shipping={shipping} price={price} description={description} category={category} image={image} colors={colors} />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
            
        </>
    )
}

export default Details

export const getStaticPaths = async () => {
    const products = await fetch('https://course-api.com/react-store-products').then(response => response.json())

    const paths = products.map(product => {
        return { 
            params: { id: product.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const product = await fetch('https://course-api.com/react-store-single-product?id=' + id).then(response => response.json())
    const products = await fetch('https://course-api.com/react-store-products').then(response => response.json())

    return {
        props: { product, products }
    }
}