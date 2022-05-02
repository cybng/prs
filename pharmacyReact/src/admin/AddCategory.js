import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import {GetCategory,AddCategory} from '../action';
import AddCategoryForm from './component/AddCategoryForm'

export default function AddCategoryPage(props) {
     const dispatch =  useDispatch();
     const categoryValue  = useSelector(state=>state.category);
     useEffect(()=>{
        dispatch(GetCategory())
     },[])

     const [categoryName,setCategoryName] = useState(); 
     const [parentCategoryId,setParentCategoryId] = useState(); 
     


     const createCategoryList = (categories, options = []) => {

      
        for (let category of categories) {

            options.push({
                value: category._id,
                name: category.name,
                parentId: category.parentId,
                type: category.type
            });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }

        return options;
    }


    const categoryList = createCategoryList(categoryValue?.categories);
    

    const handleClose = (e) => {
      e.preventDefault(); 

        if (categoryName === "") {
            alert('Category name is required');
            return;
        }
        if(parentCategoryId.length>0){
          const categoryParentData = {
            categoryName,"parentId":parentCategoryId
          }
         dispatch(AddCategory(categoryParentData));
         return;
        } 
        const categoryData={categoryName}
        dispatch(AddCategory(categoryData));
        setCategoryName('');
        setParentCategoryId('');
    }
    
 



    return (
        <div>
			<div className="flex h-screen bg-gray-100">
				<div className="flex-1 flex flex-col overflow-hidden">
					{/*Header Part*/}
          <Header/>
            <div className="flex h-full">
					{/*Sidebar Part*/}
          <Sidebar/>
          {/*Main*/}
					<main className="w-full h-full m-1">
						  
     
    
         
        <div className="bg-white p-4 mb-6  shadow-sm rounded"> 
        
        <div className="bg-blueGray-50 text-blueGray-500 align-middle  text-xs uppercase  whitespace-nowrap font-semibold text-left h-8">
             
               Add New Categories
         
          </div>
          <AddCategoryForm
           modalTitle={'Add New Category'}
           onSubmit={handleClose}
           categoryName={categoryName}
           setCategoryName={setCategoryName}
           parentCategoryId={parentCategoryId}
           setParentCategoryId={setParentCategoryId}
           categoryList={categoryList}
          />
        </div> 

 
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
       
      <div className="block w-full overflow-x-auto">
        <table className="items-center bg-transparent w-full border-collapse ">
          <thead>
            <tr>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Category Name
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Sub-Category Name
              </th> 
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Action
              </th> 
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
               Drugs
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                Heroine
              </td> 
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
              <button
              className="bg-gray-400 text-white hover:bg-indigo-600 text-xs px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">Edit
              </button>
              <button
              className="bg-gray-600 text-white hover:bg-red-600 text-xs px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">Trash
              </button>
              </td> 
            </tr>
          </tbody>
        </table>
      </div> 
  </div> 

         
					</main>
					<nav className="flex w-72 h-full bg-gray-100">
						
					</nav>


          
				</div>

				</div>

			</div>

		</div>
    )
}