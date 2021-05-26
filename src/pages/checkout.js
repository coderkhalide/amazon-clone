import Image from "next/image"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import Header from "../components/Header"
import { selectItems, selectTotal, selectTotalItems } from "../slices/basketSlice"
import Currency from 'react-currency-formatter';
import { useSession } from "next-auth/client"
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'
import Head from "next/head"
import { useEffect, useState } from "react"

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout({products}) {
    const [session] = useSession()
    const items = useSelector(selectItems)
    const totalPrice = useSelector(selectTotal)
    const selectTotalItem = useSelector(selectTotalItems)
    const [categorys, setCategorys] = useState([])

    const createCheckoutSession = async () => {
        const stripe = await stripePromise

        // Call the backend to create a session
        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items,
            email: session.user.email
        })

        // Redirect

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })

        if (result.error) alert(result.error.message)
    }

    useEffect(() => {
        const allCategories = items.map(item => item.category)
        const unique = [...new Set(allCategories)]
        setCategorys(unique)
    }, [items])

    return (
        <>
        <Head>
            <title>Checkout | Amazon</title>
        </Head>
        <div className="bg-gray-100">
            <Header products={products} />

            <main className="md:flex max-w-screen-2xl mx-auto">
                {/* Left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image className="mx-auto" src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain" alt="" />

                    <div className="flex flex-col border-b py-5 px-5 mt-3 bg-white">
                        <h1 className="text-3xl pb-4 font-semibold">
                            {!!items.length ? "Your Shopping Basket" : "Your Busket is emty"}
                        </h1>

                        <div className="mb-5">
                            {!!categorys.length && categorys.map(category => (
                                <>
                                <h1 className="text-xl pb-4 font-medium">
                                    {category}
                                </h1>
                                <div className="mb-14">
                                    {!!items.length && items.filter(item => item.category === category).map(item => 
                                        <CheckoutProduct key={item.id} {...item} />
                                    )}
                                </div>
                                </>
                            ))}
                        </div>
                    </div>

                </div>


                {/* Right */}
                <div className="flex flex-col bg-white p-7 shadow-md">
                    {!!items.length && (
                        <>
                            <h2 className="whitespace-nowrap">Subtotal ({selectTotalItem} items):{" "}
                                <span className="font-bold text-gray-500">
                                    <Currency
                                        quantity={totalPrice}
                                    />
                                </span>
                            </h2>
                            <button onClick={createCheckoutSession} role='link' disabled={!session} className={`button mt-2 ${!session && `cursor-not-allowed from-gray-300 to-gray-500 text-gray-300`}`}>
                                {!session ? 'Sign in to checkout': 'Proceed to checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    </>
    )
}

export default Checkout


export async function getServerSideProps(context) {
    const products = await fetch('https://course-api.com/react-store-products').then(response => response.json())
  
    return { props: {
      products
    } }
}