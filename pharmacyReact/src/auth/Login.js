import React,{useEffect,useState} from 'react'
import {Link,Redirect} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import {LoginPage} from "../action";
import Footer from './Footer';

export default function Login() {
  
   const auth = useSelector(state=>state.auth); 
   const dispatch =  useDispatch()

   const [email,setEmail] = useState("");
   const [password,setPassword] = useState(""); 

   const loginData=()=>{
         const data={email,password};
         dispatch(LoginPage(data));
    }

    if(auth.authenticate){
       if(auth?.user?.role==="Admin"){
       return <Redirect to={'/admin'} />
       }
       if(auth?.user?.role==="Seller"){
       return <Redirect to={'/seller'} />
       }
       if(auth?.user?.role==="Buyer"){
       return <Redirect to={"/"} />
       }
    }



	return (
		<> 
  {/* component */}
  <div className="p-20 h-auto w-full flex flex-col-reverse md:flex-row items-center justify-center bg-sky-50">
    <div className="content text-3xl text-center md:text-left">
      <Link to={"/"} className="text-5xl font-bold text-sky-500" title="ApiOnline Home">ApiOnline.in</Link>
      <p className="text-gray-500 mt-2 text-2xl">Save drugs. Use as per your needs</p>
    </div>
    <div className="container mx-auto flex flex-col items-center">
      <div className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
        <input
          id="email"
          type="email"
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email Id"
          className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
        />
        <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
        />
        <button 
          className="w-full text-white p-3 rounded-lg font-semibold text-lg bg-sky-500"
          onClick={(e)=>loginData()}
          >
          Login
        </button>
        <a className="text-center my-2 text-gray-500">Forgot Pasword?</a>
        <hr />
        <Link to={"/reg"} className="w-full text-center p-3 text-sky-500 rounded-lg font-semibold text-xs">
          Create New Account
        </Link>
      </div>
    </div>
  </div> 

  <Footer/>




</>

	)
}