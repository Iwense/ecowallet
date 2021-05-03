import React from 'react'
import {NavLink} from 'react-router-dom'
import './styles.css'
 

const Invoice = ({data}) => {
    const {id, date, time, price} = data
    return (
        <NavLink className="wrapper" to={`/products/${id}`}>
                <p>#{id}</p>
                <p>{date}</p>
                <p>{time}</p>
                <p className="product__price">{price} {" "}&#8381;</p>
        </NavLink>
    )
}

export default Invoice;