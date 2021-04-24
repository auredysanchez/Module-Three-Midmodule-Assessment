import React from 'react'

import formatPrice from "../helpers/formatPrice"

function ProductItem({product, addProduct}) {
    const { name, price, description, img  } = product; 
    return(
        <li>
            <h3>{name}</h3>
            <p>Price: {formatPrice(price)}</p>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <button onClick={() => addProduct(product)}>Add To Cart</button>
            
        </li>
    )
}

export default ProductItem
