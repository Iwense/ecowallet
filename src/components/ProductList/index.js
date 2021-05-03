import React from 'react'
import { useParams } from 'react-router'
import Product from '../Product'
import './styles.css'
 

const ProductList = ({data}) => {
    const {id} = useParams()

    if (!id){
        return (
            <p>Выберите пожалуйста чек</p>
        )
    }

    const sumPrice = () => {
        const sum = data.reduce((acc, item) => {
            if (item?.invoiceId === +id){
                return acc + item?.price
            }
            return acc
        }, 0)

        return sum
    }

    return (
        <div className="wrapper_product__list">
           
            {!!data.length && (
                <div className={"wrapper_product__thead"}>
                    <p>Название</p>
                    <p>Кол-во</p>
                    <p>Цена</p>
                </div>
            )}
            {!!data.length && data.map((item,index) => {
                if (item?.invoiceId === +id){
                    return (
                        <Product key={`${Date.now()}-${index}`} productName = {item?.productName} amount={item?.amount} price={item?.price}/>
                    )
                }
                return null
            }
                
            )}

            <div className="total">
                <p>Сумма:</p>
                <p></p>
            <p>{sumPrice()} {" "}&#8381;</p>
            </div>
        </div>
    )
}

export default ProductList;