import { XIcon } from "@heroicons/react/solid"
import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../components/Header"

function failed() {
    const router = useRouter()

    return (
        <>
        <Head>
            <title>Payment Failed | Amazon</title>
        </Head>
        <div className="bg-gray-100 h-screen">
            <Header />

            <main className="max-w-screen-lg mx-auto mt-20">
                <div className="flex flex-col p-10 bg-white rounded-2xl mx-10">
                    <div className="flex items-center space-x-2 mb-5 text-center self-center">
                        <XIcon className="text-red-500 h-10"/>
                        <h1 className="text-3xl ">Sorry, your payment has failed!</h1>
                    </div>
                    <p className="text-center">If you see your money has cut out from your card then you chould kill me!!! 🤣😂😂</p>
                    <button onClick={() => router.push('/')} className="button mt-5">Back to Home</button>
                </div>
            </main>
        </div>
        </>
    )
}

export default failed
