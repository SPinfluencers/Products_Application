import React from "react";
import style from '../Pages/pages.css'

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
    <div className="product-card">
    <div  data-cy={`product-card-${item.id}`} >
      <div className="item-id" data-cy="product-card-name">{ item.title}</div>
      <div className="item-id" data-cy="product-card-category"><h3>{item.category}</h3></div>
      <div>
        <img data-cy="product-card-image" width="300px" height='200px' src={item.imageSrc} alt="Product" />
      </div>
      <div data-cy="product-card-price"><h3>₹ {item.price}</h3></div>
      <div className="button">
        <button  onClick={()=>handleDelete(item.id)}  data-cy="delete-button">Delete Product</button>
        <Link to={`/edit/${item.id}`}>
          <button className="button_1" data-cy="edit-button">Edit Product</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
