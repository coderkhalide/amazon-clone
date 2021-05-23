import Header from '../components/Header'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import Head from 'next/head'

function seccess() {
    const router = useRouter()
    return (
        <>
        <Head>
            <title>Order successful | Amazon</title>
        </Head>
        <div className="bg-gray-100 h-screen">
            <Header />

            <main className="max-w-screen-lg mx-auto mt-20">
                <div className="flex flex-col p-10 bg-white rounded-2xl mx-10">
                    <div className="flex items-center space-x-2 mb-5 text-center self-center">
                        <CheckCircleIcon className="text-green-500 h-10"/>
                        <h1 className="text-3xl ">Thank you, your order had been confirmed!</h1>
                    </div>
                    <p className="text-center">Thank for your ordeing on my Amazon clone 😎😎😎</p>
                    <button onClick={() => router.push('/orders')} className="button mt-5">Go to Order</button>
                </div>
            </main>
        </div>
        </>
    )
}

export default seccess
