import Product from "./Product"

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 lg:-mt-80 mx-auto">
            {products && products.slice(0, 4).map(({ id, title, price, description, category, image }) => (
                <Product key={id} title={title} price={price} description={description} category={category} image={image} />
            ))}

            <img loading="lazy" src="https://links.papareact.com/dyz" alt="" className="md:col-span-4" />

            <div className="md:col-span-2">
                {products && products.slice(4, 5).map(({ id, title, price, description, category, image }) => (
                    <Product key={id} title={title} price={price} description={description} category={category} image={image} />
                ))}
            </div>
            {products && products.slice(5, products.length - 1).map(({ id, title, price, description, category, image }) => (
                    <Product key={id} title={title} price={price} description={description} category={category} image={image} />
            ))}
        </div>
    )
}

export default ProductFeed
