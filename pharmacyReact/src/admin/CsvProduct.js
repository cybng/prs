import React,{useEffect,useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from "axios";

export default function CsvProduct() {
   
   const [allData,setAllData] = useState([]);
   const [allCheckValue,setAllCheckValue] = useState([]);
   const [allApproved,setAllApproved] = useState(false);
    const getCsvData=async()=>{
        const res=await axios.post("http://localhost:3000/api/getCsvProduct");
        console.log(res);
        setAllData(res.data);
      }
    useEffect(()=>{
      getCsvData();
    },[])

    console.log(allData);
    const approvalBtn=async(approvalId)=>{
        const approval={approvalId}
        const res = await axios.post("http://localhost:3000/api/approval",approval)
        console.log(res.data);
        getCsvData();
    }

    const checkAll=(values)=>{
      var inputs = document.querySelectorAll('.pl'); 
      var a= [];
      if(values){
         for (var i = 0; i < inputs.length; i++) { 
            inputs[i].checked = true; 
            a.push(inputs[i].value)
        } 
       }else{
        for (var i = 0; i < inputs.length; i++) { 
            inputs[i].checked = false; 
        }
      }
        
       if(inputs.length===a.length){
          setAllApproved(true);
          setAllCheckValue(a);
       }else{
          setAllApproved(false);
       }
      
       
    }
    
    const approveAll=async()=>{ 
        const res = await axios.post("http://localhost:3000/api/multiApproved",allCheckValue);
         
        if(res.status===200){
            getCsvData();

        }
        getCsvData();
    }

	return (
		<div>
	<div className="flex bg-gray-100">
				<div className="flex-1 flex flex-col overflow-hidden">
					{/*Header Part*/}
          <Header/>
            <div className="flex h-full">
					{/*Sidebar Part*/}
          <Sidebar/>
          {/*Main*/}
					<main className="w-full h-full m-1">
				 <div className=""> 
          <div className="bg-white text-blueGray-500 align-middle mb-5  text-xs uppercase  whitespace-nowrap font-semibold text-left p-5 rounded">
          <h1>Approve the new product</h1>
          </div>
          <div className="">
            <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                 
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className="min-w-full bg-white dark:bg-gray-800">
                        <thead>
                            <tr className="w-full h-16  bg-gray-200 border-gray-300 dark:border-gray-200 border-b py-8">
                                <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                    <input 
                                    type="checkbox" 
                                    className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" 
                                    onChange={(e)=>checkAll(e.target.checked)} />
                                </th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                {allApproved?
                                     <button
                                     className="bg-blue-600 text-white hover:bg-green-600 text-xs px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                     onClick={(e)=>approveAll()}
                                     >
                                      Approve All   
                                     </button>
                                     :""}
                                </th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Request Number</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Seller Name</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Company Email</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Date</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                    <div className="opacity-0 w-2 h-2 rounded-full bg-indigo-400" />
                                </th>
                                <td className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">Status</td>
                            </tr>
                        </thead>



                        <tbody>

                        {allData.map((approval)=>(
                            <tr className="h-14 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <input 
                                       type="checkbox" 
                                       id="allCheckBox" 
                                       className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none pl"
                                       value={approval._id}

                                        />
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="relative w-10 text-gray-600 dark:text-gray-400">
                                        {/*<div className="absolute top-0 right-0 w-5 h-5 mr-2 -mt-1 rounded-full bg-indigo-700 text-white flex justify-center items-center text-xs">3</div>*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                        </svg>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{approval.SKU_CODE}</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">{approval.SKU_CODE}</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_1.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                        </div>
                                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Carrie Anthony</p>
                                    </div>
                                </td> 
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                                <td className="pr-6">
                                    {approval?.status==="pending"?<div className="w-2 h-2 rounded-full bg-indigo-400" />:""}
                                </td>
                                <td className="pr-8 relative">
                                    <div className="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                                        <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                        </ul>
                                    </div>
                                    <button 
                                    className="bg-blue-600 text-white hover:bg-green-600 text-xs px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    onClick={(e)=>approvalBtn(approval._id)}
                                    >
                                        Approve
                                    </button>
                                </td>
                            </tr>
                            ))}



                            {/*<tr className="h-14 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    <div className="text-gray-400 relative w-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                        </svg>
                                    </div>
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">#MC10023</td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Toyota Motors</td>
                                <td className="pr-6 whitespace-no-wrap">
                                    <div className="flex items-center">
                                        <div className="h-8 w-8">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/advance_tables/at_2.png" alt className="h-full w-full rounded-full overflow-hidden shadow" />
                                        </div>
                                        <p className="ml-2 text-gray-800 dark:text-gray-100 tracking-normal leading-4 text-sm">Carrie Anthony</p>
                                    </div>
                                </td> 
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">02.03.20</td>
                                <td className="pr-6">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                </td>
                                <td className="pr-8 relative">
                                    <button 
                                    className="bg-blue-600 text-white hover:bg-green-600 text-xs px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    >
                                        Approve
                                    </button>
                                    <div className="dropdown-content mt-1 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                                        <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Edit</li>
                                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Delete</li>
                                            <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Duplicate</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>*/}
                             
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

          </div>

          </main>
          </div>
          </div>
          </div>
		
			
		</div>
	)
}