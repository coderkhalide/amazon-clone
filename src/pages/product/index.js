import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Filter from '../../components/Filter'
import FiltredProducts from '../../components/FiltredProducts'
import Header from '../../components/Header'
import { addProducts } from '../../slices/basketSlice'

function Products({products}) {
    const dispatch = useDispatch()
    const [showCart, setShowCart] = useState(false)

    useEffect(() => {
        dispatch(addProducts(products))
    }, [products])

    useEffect(() => {
        
    }, [])
    return (
        <>
            <Head>
                <title>All Products | Amazon</title>
            </Head>
            <Header products={products} setShowCart={setShowCart} showCart={showCart} />

            <div className="bg-gray-200 p-10 mb-10">
                <div className="max-w-screen-xl mx-auto">
                    <span className="font-medium"><Link href='/'>Home</Link></span> / <span className="text-yellow-500">Products</span>
                </div>
            </div>

            <main className="max-w-screen-xl mx-auto mt-5">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-3/12 w-full mb-5 px-5">
                        <Filter />
                    </div>
                    <div className="md:w-9/12 w-full mb-5 px-5">
                        <FiltredProducts />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Products


export const getStaticProps = async (context) => {
    const products = await fetch('https://course-api.com/react-store-products').then(response => response.json())

    return {
        props: { products }
    }
}