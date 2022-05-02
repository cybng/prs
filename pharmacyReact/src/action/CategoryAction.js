import React from 'react'
import axios from "../helper/Axios";
import {categoryConstansts} from './Status';
export const GetCategory=()=>{
	return async (dispatch)=>{
	    dispatch({type:categoryConstansts.GET_ALL_CATEGORIES_REQUEST});
	    try{
	    const res = await axios.get("http://localhost:3000/api/getcategory");

	    if(res.status===200){
	    	const {categoryList} = res.data;
	    	console.log(categoryList)
	    	 
	    	dispatch({
	    		type:categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
	    		payload:{category:categoryList}
	    	})
	    }else{
	    	if(res.status===201){
	    	    dispatch({
	    	    	type:categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
	    	    	payload:{
	    	    		error:"Category Failed"
	    	    	}
	    	    });
	    	}
	    }
	    if (res.status === 201) {
                dispatch({
                    type: categoryConstansts.ADD_NEW_CATEGORY_SUCCESS,
                    payload: { category: res.data.category }
                });
            } else {
                dispatch({
                    type: categoryConstansts.ADD_NEW_CATEGORY_FAILURE,
                    payload: res.data.error
                });
            }
         }catch(e){
         	console.log("err 404")
         }
         

	}
}

export const AddCategory=(props)=>{
	return async (dispatch)=>{ 
	    dispatch({type:categoryConstansts.CATEGORY_REQUEST});
	    const res = await axios.post("http://localhost:3000/api/addcategory",props);
        if(res.status===200){
	    	const {categoryList} = res.data;
	    	dispatch({
	    		type:categoryConstansts.CATEGORY_SUCCESS,
	    		payload:{category:categoryList}
	    	})
	    }else{
	    	if(res.status===201){
	    	    dispatch({
	    	    	type:categoryConstansts.LOGIN_FAILED,
	    	    	payload:{
	    	    		error:"Category Failed"
	    	    	}
	    	    });
	    	}
	    }
	}
}