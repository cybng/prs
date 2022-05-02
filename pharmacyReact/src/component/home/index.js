import React,{useEffect,useState} from 'react'
import {Link } from 'react-router-dom'
import axios from "axios";
import {useDispatch,useSelector} from 'react-redux'
import Bx from "./bxx.png"
import {GetCategory,addToCart} from '../../action'
import Header from "../Header"
import Particles from "react-tsparticles";

export default function Home() {
     const dispatch =  useDispatch();
     const allCategory = useSelector(state=>state.category);
     const auth = useSelector(state=>state.auth);
     useEffect(()=>{
        dispatch(GetCategory())
     },[])


     const [allData,setAllData] = useState([]);
     const [allProduct,setAllProduct] = useState([]);
     const getCsvData=async()=>{
        const res=await axios.post("http://localhost:3000/api/getApprovedCsvProduct");
        console.log(res);
        setAllData(res.data);
      }
      const allProductData=async()=>{
        const res = await axios.get("http://localhost:3000/api/getAllProduct");
        setAllProduct(res.data);
      }
    useEffect(()=>{
      getCsvData();
      allProductData()
    },[])
      

     const renderCategories = (categories) => {
      console.log(categories)
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <div className="flex text-white text-normal font-normal p-2" key={category.name}>
          {
            category.parentId ? <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}
            </a> :
            <span>{category.name}</span>
          }
          {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
        </div>

      );
    }
    
    return myCategories;
  }

console.log(allCategory.allCategory)

const addCart=(id,sku,rate,purity,uploadBy,chemicalName)=>{
  const data={_id:id,
        userId:auth.user._id,
        uploadBy:uploadBy,
        sku:sku,
        rate:rate,
        purity:purity,
       productName:chemicalName}
  
   dispatch(addToCart(data));
}



     
	return (
		<div className="">
    <Header/>  
       
    <div className="h-96 bg-sky-50 w-full">
      <section className="flex justify-center items-center w-9/12 h-96 mx-auto">
      <div className="flex-col text-center  text-4xl text-white">
        <h1 className="font-semibold leading-9 text-gray-600">Deal with the best Chemical supplier B2B</h1>
        <h1 className="text-sky-500 px-5 pt-10 pb-10 leading-9">Buyer & Seller :)</h1>
        <div className="py-5 px-5 flex justify-center items-center">
        <input type="text" placeholder="Search chemical" className="text-sm p-3 w-9/12 rounded-tl-sm rounded-bl-sm active:border-0 drop-shadow-sm text-sky-500"/>
        <button className="p-3 bg-sky-500 hover:bg-sky-600 rounded-tr-sm rounded-br-sm text-sm drop-shadow-sm font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="10" cy="10" r="7"></circle>
   <line x1="21" y1="21" x2="15" y2="15"></line>
</svg>
        </button>
        </div>
        </div>
      </section>
    </div>
    <div className="px-5 py-10 bg-gray-50 w-full"></div>
    <div className="w-9/12 mx-auto py-5">
    <div className="grid grid-cols-4 gap-4">
    {allProduct?.map((data)=>(
      <div className="w-full bg-slate-100 hover:bg-slate-200 shadow-md rounded-md">
      <div>
        <img src={data?.DOCUMENTS} className="rounded-tr-md rounded-tl-md"/></div>
        <div className="p-2">
        <h1 className="text-xs font-semibold p-2 bg-white shadow-sm rounded-md text-center">CAS No - {data?.SKU_CODE}</h1>
        <h1 className="text-md font-semibold py-1">{data?.CHEMICAL_NAME} </h1>
        </div>
        <div className="flex justify-between p-2 items-center">
        <h1 className="text-lg font-semibold text-center text-rose-500">Rs.{data?.RATE}</h1>
        <button className="border border-sky-500 text-sky-500 py-1 px-2 text-xs font-semibold rounded-sm text-sm" onClick={(e)=>addCart(data?._id,data?.SKU_CODE,data?.RATE,data?.PURITY,data?.uploadBy,data?.CHEMICAL_NAME)}>Add to Cart</button>
        </div>
      </div>
      ))
    }
    </div>
    </div>
      
</div>


	)}