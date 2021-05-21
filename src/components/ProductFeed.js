import Product from "./Product"

function ProductFeed({ products, setShowCart }) {
    return (
        <div className="max-w-screen-2xl mx-auto grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 lg:-mt-80 xl:-mt-96 -mt-14">
            {products && products.slice(0, 4).map(({ id, name, price, description, category, image, shipping, colors }) => (
                <Product setShowCart={setShowCart} key={id} id={id} name={name}title={name} shipping={shipping} price={price} description={description} category={category} image={image} colors={colors} />
            ))}

            <img loading="lazy" src="https://links.papareact.com/dyz" alt="" className="px-5 md:col-span-4 mx-auto rounded-lg" />

            <div className="md:col-span-2">
                {products && products.slice(4, 5).map(({ id, name, price, description, category, image, shipping, colors }) => (
                    <Product setShowCart={setShowCart}  key={id} id={id} title={name} shipping={shipping} price={price} description={description} category={category} image={image} colors={colors} />
                ))}
            </div>
            {products && products.slice(5, 10).map(({ id, name, price, description, category, image, shipping, colors }) => (
                    <Product setShowCart={setShowCart}  key={id} id={id} title={name} price={price} shipping={shipping} description={description} category={category} image={image} colors={colors} />
            ))}

            <img loading="lazy" src="https://links.papareact.com/dyz" alt="" className="px-5 md:col-span-4 mx-auto rounded-lg" />

            {products && products.slice(10, products.length - 1).map(({ id, name, price, description, category, image, shipping, colors }) => (
                    <Product setShowCart={setShowCart}  key={id} id={id} title={name} price={price} shipping={shipping} description={description} category={category} image={image} colors={colors} />
            ))}
        </div>
    )
}

export default ProductFeed