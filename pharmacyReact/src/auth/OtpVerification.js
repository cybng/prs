import React,{useEffect,useState} from 'react';
import {Redirect} from 'react-router-dom'
import {otpVerification} from '../action';
import {useDispatch,useSelector} from "react-redux";

export default function OtpVerification() {
  const auth = useSelector(state=>state.auth);
  const dispatch = useDispatch();
  const [otpValue,setOtpValue] = useState("");
  const userId = JSON.parse(window.localStorage.getItem("user"))?._id;
  
  const otpVerify=()=>{
    const otpCredentials={
      userId,
      otpValue
    }
    dispatch(otpVerification(otpCredentials));
  }
  if(auth?.user?.role==="Seller" && auth.user.otpVerification==="1"){
    return <Redirect to={"/general"} />
  }
  if(auth?.user?.role==="Seller" && auth.user.generalVerification==="1"){
    return <Redirect to={"/seller"} />
  }
  if(auth?.user?.role==="Buyer" && auth.user.otpVerification==="1"){
    return <Redirect to={"/general"} />
  }
 
	return (
		<div> 
  <div className="bg-gray-100 h-screen">
    {/*<nav className="w-full bg-yellow-400 py-4">
      <h1 className="text-center text-2xl font-bold">TODO LIST</h1>
    </nav>*/}
    <div className="flex flex-col w-full pt-28 items-center justify-center">
      <div>
        <div className="bg-white rounded-sm py-10 px-12 shadow-lg">
          <h1 className="text-xl mt-2 text-center font-semibold text-gray-600">
            OTP - Verification
          </h1>
          <div className="mt-6 flex space-x-4 m-10 justify-center">
            
            <input
              placeholder="6 Digit OTP"
              className="bg-gray-100 rounded-sm py-2 px-4 border outline-none"
              onChange={(e)=>setOtpValue(e.target.value)}
            />
            <button 
              className="bg-green-500 px-4 rounded-sm font-semibold text-white"
              onClick={(e)=>otpVerify()}
            >
              Verify
            </button>
          </div>
          <p />
        </div>
        {auth.message.length>0?
        <p className="mt-6 bg-white p-6 rounded-md text-red-500 shadow-lg text-center">
          {auth.message}
        </p>
        :""}
        {/*
        <p className="mt-6 bg-white p-6 rounded-md text-gray-500 shadow-lg">
          {" "}
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the
        </p>
        <p className="mt-6 bg-white p-6 rounded-md text-gray-500 shadow-lg">
          {" "}
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the
        </p>*/}
      </div>
      <p className="absolute bottom-14 right-14 bg-yellow-400 py-2 px-4 rounded-full text-lg font-bold">
        ?
      </p>
    </div>
  </div> 

			
		</div>
	)
}