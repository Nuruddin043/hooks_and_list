
import React, { useState,useEffect } from 'react';

import './App.css';
import Product from './product'
import ProductDetail from './product_detail';
import Loading from './loading'
function App() {
  const [currentPage, setCurrentPage] = useState('product')
  const [currentProduct, setCurrentProduct] = useState('')
  const [loading,setLoading]=useState(false)
  const [productList, setProductlist] = useState([
    {
      name: "Product 1",
      description: "Product description 1",
      price: 100,
      category: "category 1"
    },
    {
      name: "Product 2",
      description: "Product description 2",
      price: 200,
      category: "category 2"
    },
    {
      name: "Product 3",
      description: "Product description 3",
      price: 300,
      category: "category 3"
    },
    {
      name: "Product 4",
      description: "Product description 4",
      price: 400,
      category: "category 4"
    },
    {
      name: "Product 5",
      description: "Product description 5",
      price: 500,
      category: "category 5"
    }
  ])
  const updatePage = (product) => {
    setCurrentPage('product_detail')
    setCurrentProduct(product)
  }
  const onProductpage = () => {
    setCurrentPage('product')
    setCurrentProduct('')
  }
  

  useEffect(() => {
    if(loading){
      setLoading(false)
    }else{
      setLoading(true)
    }
  },[currentProduct])

  const updateLoadiingState=(state)=>{
    setLoading(state)
  }





  return (
    <>
    
      {
        loading && <Loading />
      }
      {
                currentPage ==='product' ?
                <Product products={productList} function={updatePage} loading={updateLoadiingState}/> :
                <>
                <button onClick={onProductpage}>Product Page</button> <br />
                <ProductDetail detail={currentProduct} loading={updateLoadiingState}/>
                </>
            }
    </>
  );
}

export default App;
