import React from 'react'
import ProductItem from './ProductItem'
import productData from "../data/productData"
import "./Products.css"

function Products({addProduct}) {
    const products = productData.map(product => {
        return <ProductItem key={product.id} product={product} addProduct={addProduct}/>
    })

    return(
        <section className="Products">
            <ul>
                {products}
            </ul>
        </section>
    )
}

export default Products
