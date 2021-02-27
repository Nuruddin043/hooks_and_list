import React from 'react';
import Loading from './loading'
const Product = (props) => {

    return (
        <>
            {
                props.products.map((product, index) => {
                    return <button onClick={()=>props.function(product)} key={index}>
                            <div  className="product">
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