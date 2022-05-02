import React,{useEffect,useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {Link} from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import axios from "axios";

export default function Upload() {
	const [chooseFile,setChooseFile] = useState(""); 
	const [percentage,setPercentage] = useState(0);
	const uploadFileBtn=async()=>{
		const formData = new FormData();
		formData.append("csvFile",chooseFile[0]);
		console.log(formData) ;
				await axios.post("http://localhost:3000/api/sellerFile",formData,{
                    		headers: { "Content-Type": "multipart/form-data" },
                            onUploadProgress: (data) => { 
                            setPercentage(Math.round((100 * data.loaded) / data.total));
                             
                            },
                   		  }) 
				 .then(function(response){
                  console.log(response);
				 })
                 .catch(function (response) { 
                   console.log(response);


                 });

	}

	 
	
	return (
		<div className="bg-gray-100">
		<div><Toaster/></div>
			<Header/>
			<div className="flex h-full">
			<Sidebar/>
			<main className="w-full h-full m-1">
						  
     
    
         
        <div className="bg-white p-4 mb-6  shadow-sm rounded"> 
        
        <div className="bg-blueGray-50 text-blueGray-500 align-middle  text-xs uppercase  whitespace-nowrap font-semibold text-left h-8">
             
               Add New Products Using CSV 
               <small><Link to="format.csv" className="text-blue-500 ml-5" target="_blank" download>Format Download</Link></small>
               
         
          </div> 
          <div>
          <label for="file" 
          	className="h-10 bg-blue-50 text-xs px-4 py-2 rounded outline-none">{chooseFile[0]?.name?chooseFile[0]?.name:"Choose File"}</label>
          <input 
          	type="file"
          	id="file"
          	name="csvFile"
          	onChange={(e)=>setChooseFile(e.target.files)}
            accept='.csv'
          	hidden
          />
          {chooseFile[0]?.name?
          <button 
          	className="bg-green-600 text-white hover:bg-green-800 text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={(e)=>uploadFileBtn()}
            >
            Upload
          </button>
          :""
          }
          </div>

          {percentage===100?
            	<div className="flex pt-2 text-xs text-green-500 font-medium"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
  </svg><span>File Uploaded</span> </div>:
            	chooseFile[0]?.name?
          <div class="w-24 bg-gray-200 h-2 rounded-full">
           <div class="bg-blue-600 h-2 font-medium text-xs text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: `${percentage}%`}}></div>
    	  </div>
    	  :""
		  }

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

		</div>
		</div>
	)
}