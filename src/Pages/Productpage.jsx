import React, { useEffect, useState } from "react";
import { getProducts } from "../Redux/action";
import {useSelector,useDispatch} from "react-redux"
import ProductCard from "../Components/ProductCard";

const Productpage = () => {

  const dispatch = useDispatch()
  const data=useSelector(store=>store.products)

  useEffect(() => {
    // getProducts()
    dispatch(getProducts())
 
},[])
 
  

  return (
    <div style={{ width: "100%" }}>
      <div>
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */
          data.length > 0 && data.map((item) => (
          <ProductCard key={item.id}  item={item} />
        ))
        
        }
      </div>           
    </div>
  );
};

export default Productpage;
