import { useSelector } from "react-redux"
import { selectFilteredProducts } from "../slices/basketSlice"
import Product from './Product'

function FiltredProducts() {
    const products = useSelector(selectFilteredProducts)

    return (
        <>
            {products && (
                <p className="mb-4 font-bold text-xl text-gray-500">{products.length} Products Fond</p>
            )}
            <div className="grid grid-flow-row-dense md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                
                {!!products?.length && products.map(product => (
                    <Product products={products} setShowCart={() => {}} key={product.id} title={product.name} {...product} />
                ))}
            </div>
            {!products?.length && (
                <p className="text-sm text-gray-400 text-center py-4">No Product Found :(</p>
            )}
        </>
    )
}

export default FiltredProducts
