import React, { useEffect } from 'react';

const Product = (props) => {
    useEffect(() => {
        props.loading(false)
        return (() => {
            props.loading(true)
        })
    })
    return (
        <>
            {
                props.products.map((product, index) => {
                    return <button onClick={() => props.function(product)} key={index}>
                        <div className="product">
                            Name: {product.name} <br />
                                Price: {product.price}
                        </div>
                    </button>
                })
            }


        </>
    )
}


export default Product;