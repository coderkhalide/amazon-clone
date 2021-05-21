import Image from "next/image"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import Header from "../components/Header"
import { selectItems, selectTotal } from "../slices/basketSlice"
import Currency from 'react-currency-formatter';
import { useSession } from "next-auth/client"

function Checkout() {
    const [session] = useSession()
    const items = useSelector(selectItems)
    const totalPrice = useSelector(selectTotal)

    return (
        <div className="bg-gray-100">
            <Header products={[]} />

            <main className="md:flex max-w-screen-2xl mx-auto">
                {/* Left */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image className="mx-auto" src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain" alt="" />

                    <div className="flex flex-col border-b py-5 px-5 mt-3 bg-white">
                        <h1 className="text-3xl pb-4 font-semibold">
                            {!!items.length ? "Your Shopping Basket" : "Your Busket is emty"}
                        </h1>

                        {!!items.length && items.map(item => (
                            <CheckoutProduct key={Math.random()} {...item} />
                        ))}
                    </div>

                </div>


                {/* Right */}
                <div className="flex flex-col bg-white p-7 shadow-md">
                    {!!items.length && (
                        <>
                            <h2 className="whitespace-nowrap">Subtotal ({items.length} items):{" "}
                                <span className="font-bold text-gray-500">
                                    <Currency
                                        quantity={totalPrice}
                                    />
                                </span>
                            </h2>
                            <button disabled={!session} className={`button mt-2 ${!session && `cursor-not-allowed from-gray-300 to-gray-500 text-gray-300`}`}>
                                {!session ? 'Sign in to checkout': 'Proceed to checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout
