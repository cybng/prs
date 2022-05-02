import React,{useEffect,useState} from 'react'
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";

export default function SingleForm() {
   const auth = useSelector(state=>state.auth); 

    const [SKU_CODE,setSKU_CODE] = useState("");
    const [CHEMICAL_NAME,setCHEMICAL_NAME] = useState("");
    const [STRUCTURE,setSTRUCTURE] = useState("");
    const [PURITY,setPURITY] = useState("");
    const [CATEGORY,setCATEGORY] = useState("");
    const [DATE_OF_MANUFACTURE,setDATE_OF_MANUFACTURE] = useState("");
    const [DATE_OF_EXPIRY,setDATE_OF_EXPIRY] = useState("");
    const [STATE_TYPE_COLOR,setSTATE_TYPE_COLOR] = useState("");
    const [DOCUMENTS,setDOCUMENTS] = useState("");
    const [DESCRIPTION,setDESCRIPTION] = useState("");
    const [QUANTITY,setQUANTITY] = useState("");
    const [UNITS,setUNITS] = useState("");
    const [STOCK,setSTOCK] = useState("");
    const [RATE,setRATE] = useState("");
    const [GST,setGST] = useState(""); 
    const [requestId,setRequestId] = useState("");


    const add=async()=>{
      const uploadBy = auth?.user?._id
      const data ={uploadBy,SKU_CODE,
                   CHEMICAL_NAME,
                   STRUCTURE,
                   PURITY,
                   CATEGORY,
                   DATE_OF_MANUFACTURE,
                   DATE_OF_EXPIRY,
                   STATE_TYPE_COLOR,
                   DOCUMENTS,
                   DESCRIPTION,
                   QUANTITY,
                   UNITS,
                   STOCK,
                   RATE,
                   GST, 
                   requestId}
                   console.log(data);
            const res = await axios.post("http://localhost:3000/api/addProduct",data);


    }



	return (
		<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
       
      <div className="">
        <div className="">
    <div className="">
      <div>
         
        <div className="p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                <div className="md:col-span-2">
                  <label htmlFor="address">SKU Code</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setSKU_CODE(e.target.value)}
                    
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Chemical Name</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setCHEMICAL_NAME(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Structure</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 

                    onChange={(e)=>setSTRUCTURE(e.target.value)}
                  />
                </div> 
                <div className="md:col-span-2">
                  <label htmlFor="address">Purity</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    
                    onChange={(e)=>setPURITY(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Category</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setCATEGORY(e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="city">Date Of Manufacrure</label>
                  <input
                    type="date"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setDATE_OF_MANUFACTURE(e.target.value)}
                  /> 
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Date of Expiry</label>
                  <input
                    type="date"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setDATE_OF_EXPIRY(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">State Type Color</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setSTATE_TYPE_COLOR(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Document</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setDOCUMENTS(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Description</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setDESCRIPTION(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Quantity</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setQUANTITY(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Units</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setUNITS(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Stock</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setSTOCK(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Rate</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setRATE(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">GST</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setGST(e.target.value)}
                  />
                </div> 
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Request Id</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setRequestId(e.target.value)}
                  />
                </div> 
                <div className="md:col-span-5">
                  <div className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="billing_same"
                      id="billing_same"
                      className="form-checkbox"
                    />
                    <label htmlFor="billing_same" className="ml-2">
                      I certify that the above facts are true to the best of my knowledge .
                    </label>
                  </div>
                </div>
                <div className="md:col-span-6 text-right">
                  <div className="inline-flex items-end">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(e)=>add()}>
                      Submit
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
      </div> 
  </div> 
	)
}