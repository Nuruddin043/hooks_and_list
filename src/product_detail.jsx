import React, {  useEffect } from 'react';


const ProductDetail = (props) => {


    useEffect(() => {
        props.loading(false)
        return (() => {
            props.loading(true)
        })
    })

  
    return (
        <>

            name: {props.detail.name}  <br />
            description: {props.detail.description} <br />
            price: {props.detail.price} <br />
            category: {props.detail.category}
        </>
    )
}


export default ProductDetail;