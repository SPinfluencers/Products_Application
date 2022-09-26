import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams }
  from 'react-router-dom'
  import {useSelector,useDispatch} from "react-redux"
import { editProducts, getProducts } from "../Redux/action";
const Editpage = () => {
  const dispatch=useDispatch()
  const [ind,setInd]=useState({})
const selector=useSelector(store=>store.products)
  const {id} = useParams()

  // useEffect(() => {
  //   if (data.length == 0) {
  //     dispatch(getProducts())
  //   }
  // })
  // useEffect(() => {
    
  //   let ans=data.filter((item)=> item.id==params.id)

  //   setInd({...ans})

  // },[])
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ind)
    dispatch(editProducts(ind, id))
     
    navigate("/")
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInd({...ind,[name]:value})
  }

  useEffect(() => {
    if (selector.length == 0) {
      dispatch(getProducts())
    }},[id.selector])
  

    useEffect(() => {
      if (id){
        let cur = selector.find((item) => item.id == id)
        cur && setInd(cur)
      }
    },[id,selector])




  return (
    <form onSubmit={handleSubmit}>    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input onChange={handleChange}  name='title' data-cy="edit-product-title" value={ind.title} type="text" />
      </div>
      <div>
        <label>Product Price</label>
        <input onChange={handleChange}  data-cy="edit-product-price" type="number" name="price" 
        value={ind.price}
        />
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button data-cy="update-button" type="submit">Update</button>
      </div>
    </div>
    </form>

  );
};

export default Editpage;
