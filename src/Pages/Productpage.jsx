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
    <div>
      <div  className="product-page">
        {
          data.length > 0 && data.map((item) => (
          <ProductCard key={item.id}  item={item} />
        ))
        }
      </div>           
    </div>
  );
};

export default Productpage;
