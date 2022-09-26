import React from "react";

import { Navigate, useLocation, useNavigate, useParams,Link }
  from 'react-router-dom'
import { deleteProducts, editProducts, getProducts } from "../Redux/action";
import {useSelector,useDispatch} from "react-redux"
const ProductCard = ({ item }) => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  

  const handleDelete = (id) => {
    dispatch(deleteProducts(id)).then(() => {
      dispatch(getProducts())
    })
     
   
  }
  return (
    <div data-cy={`product-card-${item.id}`}>
      <div data-cy="product-card-name">{ item.title}</div>
      <div data-cy="product-card-category">{ item.category}</div>
      <div>
        <img data-cy="product-card-image" width="200px" src={item.imageSrc} alt="Product" />
      </div>
      <div data-cy="product-card-price">€ { item.price}</div>
      <div>
        {/* Add a onClick handler for delete functionality */}
        <button  onClick={()=>handleDelete(item.id)}  data-cy="delete-button">Delete Product</button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}
        <Link to={`/edit/${item.id}`}>
          <button data-cy="edit-button">Edit Product</button>
          </Link>
      </div>
    </div>
  );
};

export default ProductCard;
