import React,{useEffect,useState} from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';

export default function ProductDetail() {
  const search = useLocation().search;
  const [prdctDetail,setPrdctDetail] = useState([]);
  const getProduct=async()=>{ 

  const id=new URLSearchParams(search).get("id");
        const  res = await axios.post("http://localhost:3000/api/getProductDetail",{id});
        setPrdctDetail(res.data);
        console.log(res.data);
         
    }
  useEffect(()=>{
    getProduct();
  },[])

  const buyNow=()=>{
    console.log(prdctDetail);
  }


 
  return (
    <div>
    <nav className="flex items-center justify-between flex-wrap py-4 lg:px-12 " style={{backgroundColor:"#1B3993"}}>
  <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
    <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
      <span className="font-semibold text-xl text-white tracking-tight">ApiOnline</span>
    </div>
    <div className="block lg:hidden ">
      <button
        id="nav"
        className="flex items-center px-3 py-2 border-2 rounded text-white border-blue-700 hover:text-white hover:border-blue-700"
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        menu
      </button>
    </div>
  </div>
  <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
    {/*<div className="text-md font-bold text-white lg:flex-grow">
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
      >
        Menu 1
      </a>
      <a
        href="#responsive-header"
        className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
      >
        Menu 2
      </a>
      <a
        href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
      >
        Menu 3
      </a>
    </div>*/}
    {/* This is an example component */}
    <div className="relative mx-auto text-gray-600 w-full lg:block hidden">
      <input
        className=" w-full bg-white h-10 pl-2 pr-8 rounded-sm text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search Medicine"
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
        <svg
          className="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style={{ enableBackground: "new 0 0 56.966 56.966" }}
          xmlSpace="preserve"
          width="512px"
          height="512px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
    <div className="flex ">
      <a
        href="#"
        className="block text-md px-4 py-2 rounded text-white ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
      >
        Login/Signup
      </a>
      <a
        href="#"
        className=" block text-md px-4  ml-2 py-2 rounded text-white font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
      >
        Cart
      </a>
    </div>
  </div>
</nav>

    <section className="text-gray-700 body-font overflow-hidden bg-white">
    
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="Medicine"
        className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
        src="https://wallpaperbat.com/img/364806-organic-chemistry-wallpaper-science-chemistry-organic-chemistry.jpg"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          Product Id : {prdctDetail?._id}
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {prdctDetail?.CHEMICAL_NAME}
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            {/*<svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-red-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>*/}
            {/*<svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-red-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>*/}
            
            <span className="text-gray-600 ml-3">CAS Number : XXXX</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            
            <span className="text-gray-600 ml-3">Purity : {prdctDetail?.PURITY}%</span>
          </span>
        </div>
        <p className="leading-relaxed">
          Buy 2-Hydroxy-5-Nitro Benzaldehyde from ApiOnline. ApiOnline provides the best quality 2-Hydroxy-5-Nitro Benzaldehyde at the best competitive rate.
           ApiOnline assures your payment which will be made for 2-Hydroxy-5-Nitro Benzaldehyde is safe and secure.
        </p>
        <h1 className="font-bold text-xl text-yellow-800 mt-10">Ask The Seller For a Different Weight </h1>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        <div className="flex  items-center"> 
            <div className="relative">
              <input className="rounded border appearance-none border-gray-400 w-24 py-2 focus:outline-none focus:border-green-500 text-base pl-3" placeholder="Weight"/>
            </div>
          </div>
          
          <div className="flex ml-6 items-center"> 
            <div className="relative">
              <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-green-500 text-base pl-3 pr-10">
                <option>Miligram</option>
                <option>Gram</option>
                <option>Kilogram</option>
                <option>Tons</option>
                <option>Milliliters</option>
                <option>Liters</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex ml-6 items-center">
            <div className="relative">
              <select className="rounded border appearance-none border-gray-400 w-24 py-2 focus:outline-none focus:border-green-500 text-base pl-3 pr-10">
                <option>Packs</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>More Above 10+</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex ml-6 items-center">
            <div className="relative">
              
          <button className="flex ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
            Request
          </button>
              
            </div>
          </div>

        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <button onClick={(e)=>buyNow()} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
            Buy Now
          </button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>

        
        <div className="flex mt-10">
          <span className="title-font font-medium text-2xl text-gray-900">
            Brief Details of Product
          </span> 
        </div>



      </div>
    </div>
  </div>
</section>


<div className="h-56 bg-gray-100"></div>

      
    </div>
  )
}