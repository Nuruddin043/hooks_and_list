import React,{useState,useEffect} from 'react';
import Loading from './loading'

const ProductDetail = (props) => {
    const [loading, setLoading] = useState()

      useEffect(() => {
          setLoading(false)
      })
    return (
        <>
            {
                loading && <Loading />
            }
            name: {props.detail.name}  <br />
            description: {props.detail.description} <br />
            price: {props.detail.price} <br />
            category: {props.detail.category}
        </>
    )
}


export default ProductDetail;