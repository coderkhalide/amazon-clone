import Head from "next/head";
import { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  const [showCart, setShowCart] = useState(true)

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header setShowCart={setShowCart} showCart={showCart} />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product feed */}
        <ProductFeed products={products} setShowCart={setShowCart} />
      </main>
    </div>
  );
}


export async function getServerSideProps(context) {
  const products = await fetch('https://course-api.com/react-store-products').then(response => response.json())

  return { props: {
    products
  } }
}