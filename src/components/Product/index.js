import React from 'react'
import './styles.css'

const Product = ({productName, amount, price}) => {
    return (
        <div className="wrapper_product">
                <p>{productName}</p>
                <p>{amount}{" "} шт.</p>
                <p>{price}{" "}&#8381;</p>
        </div>
    )
}

export default Product;