//Write the action creator functions here

import axios from "axios";
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, 
    DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE, 
    EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes"



export const getProducts = (params) =>(dispatch)=> {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    
    return axios.get("https://smoggy-blue-sweatpants.cyclic.app/products", params).then((res) => {
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
    }).catch((e) => {
        console.log(e,'error')
        dispatch({type:GET_PRODUCTS_FAILURE})
    })
}

export const addProducts = (params, id) => (dispatch) => {
    console.log(id,'id')
    dispatch({ type: ADD_PRODUCT_REQUEST });
    return axios.post(`https://smoggy-blue-sweatpants.cyclic.app/products`,params)
        .then((res) => {
        dispatch({type:ADD_PRODUCT_SUCCESS})
        })
        .catch((e) => {
            dispatch({ type: ADD_PRODUCT_FAILURE });
            console.log(e,'add error')
    })
}

export const editProducts = (params, id) => (dispatch) => {
    console.log(id,'id')
    dispatch({ type: EDIT_PRODUCT_REQUEST });
    return axios.patch(`https://smoggy-blue-sweatpants.cyclic.app/products/${id}`,params)
        .then((res) => {
        dispatch({type:EDIT_PRODUCT_SUCCESS})
        })
        .catch((e) => {
            dispatch({ type: EDIT_PRODUCT_FAILURE });
            console.log(e,'add error')
    })
}
export const deleteProducts = ( id) => (dispatch) => {
    console.log(id,'id')
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    return axios.delete(`https://smoggy-blue-sweatpants.cyclic.app/products/${id}`)
        .then((res) => {
        dispatch({type:DELETE_PRODUCT_SUCCESS})
        })
        .catch((e) => {
            dispatch({ type: DELETE_PRODUCT_FAILURE });
            console.log(e,'add error')
    })
}
