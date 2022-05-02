import React,{useEffect,useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {Link} from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import axios from "axios";
import SingleForm from './uploadComponent/SingleForm';
import {useDispatch,useSelector} from "react-redux";

export default function Upload() {
	const [chooseFile,setChooseFile] = useState(""); 
	const [percentage,setPercentage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const auth = useSelector((state)=>state.auth);
	const uploadFileBtn=async()=>{
		const formData = new FormData();
		formData.append("csvFile",chooseFile[0]);
    formData.append("userId",auth?.user?._id);
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

      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-4/12 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xs font-semibold">
                    Upload Product Using CSV
                    <small><Link to="format.csv" className="text-blue-500 ml-5" target="_blank" download>Format Download</Link></small>
                  </h3>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="m-auto p-6 justify-center">
          <div>
          <input 
            type="text"  
            name="userId"
            hidden
          />
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
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button> 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
   
 
 
						  
     
    
         
          <div className="bg-white p-4 mb-6  shadow-sm rounded"> 
        
              <div className="bg-blueGray-50 justify-center items-center text-blueGray-500   text-xs uppercase  whitespace-nowrap font-semibold text-left h-8">
             
               Now Add/Upload New Product Here 
                <button
                 className="float-right bg-blue-500 text-white hover:bg-blue-600 text-xs px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                 type="button"
                 onClick={() => setShowModal(true)}
               >
                Upload Using CSV
              </button>
              </div> 
          </div> 

         {/*FORM FOR SINGLE UPLOAD*/}
         <SingleForm/>

         
					</main>

		</div>
		</div>
	)
}