import React, { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { addProducts } from "../Redux/action";
import { Navigate, useLocation,useNavigate } from "react-router-dom"
const AddProduct = () => {
  const[title,setTitle]=useState('')
  const[category,setCategory]=useState('')
  const[image,setImage]=useState('')
  const [price, setPrice] = useState('')
  const dispatch = useDispatch()
  const navigate=useNavigate()

  const [data, setData] = useState({
    title: "",
    category: "",
    imageSrc: "",
    price:""
    
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(data,'data of obj')
    setData({...data,[name]:value})

  }
  const handleSubmit = (e) => {

    let id = products.length;
    dispatch(addProducts(data, id))
     
    navigate("/")
    
    

  }

  const products = useSelector(store => store.products)
  console.log(products,'store')

  return (
    <div>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Product title</label>
          <input onChange={handleChange} name="title" value={data.title} data-cy="add-product-title" type="text" />
        </div>
        <div>
          <label>Product Category</label>
          <select data-cy="add-product-category" name="category" value={data.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div>
          <label>Product Image</label>
          <input
            data-cy="add-product-image"
            type="url"
            placeholder="Image URL" name="imageSrc" value={data.imageSrc} onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Price</label>
          <input data-cy="add-product-price" name="price" type="text" value={data.price} onChange={handleChange} />
        </div>
        <div>
          <button data-cy="add-product-button" type="submit">Add</button>
        </div>
        </div>
        </form>
    </div>
  );
};

export default AddProduct;
