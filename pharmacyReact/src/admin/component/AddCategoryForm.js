import React,{useEffect,useState} from 'react';
import {GetCategory} from "../../action";
import {useDispatch,useSelector} from "react-redux";

export default function AddCategoryForm(props){
  const {
    modalTitle,
        categoryName,
        setCategoryName,
        parentCategoryId,
        setParentCategoryId,
        categoryList,
        onSubmit
    } = props;
     const dispatch =  useDispatch();
     const allCategory = useSelector(state=>state.category);
     useEffect(()=>{
        dispatch(GetCategory());
     },[])

     



	
	return (
		<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
             
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid grid-cols-3">
                
                <div className="">
                  <label htmlFor="address">Category Name</label>
                  <input
                    type="text"
                    value={categoryName}
                    onChange={(e)=>setCategoryName(e.target.value)}
                    id="categoryName"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="">
                  <label htmlFor="city">Select Category</label>
                  <select
                    type="text" 
                    id="parentCategoryId"
                    value={parentCategoryId}
                    onChange={(e) => setParentCategoryId(e.target.value)}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                  <option></option>
                        {
                            categoryList.map(option =>
                                <option key={option.value} value={option.value}>{option.name}</option>)
                        }
                  </select>
                </div>
                <div className=""> 
                  <div className="inline-flex items-end">
                    <button 
                      className="bg-green-500 mt-6 h-10 px-4 hover:bg-green-700 text-white font-bold  rounded"
                      onClick={onSubmit}
                      >
                      Add Category
                    </button>
                     
                  </div>
                </div>
                 

                               </div>
            </div>

            
          </div>
	)
}