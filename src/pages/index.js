import Head from "next/head";
import { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  const [showCart, setShowCart] = useState(true)

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Homepage - Amazon</title>
      </Head>

      <Header setShowCart={setShowCart} showCart={showCart} />

      <main className="mx-auto" style={{ maxWidth: '1920px' }}>
        {/* Banner */}
        <Banner />
        {/* Product feed */}
        <ProductFeed products={products} setShowCart={setShowCart} />
      </main>
      
      <Footer />
    </div>
  );
}


export async function getServerSideProps(context) {
  const products = await fetch('https://course-api.com/react-store-products').then(response => response.json())

  return { props: {
    products
  } }
}