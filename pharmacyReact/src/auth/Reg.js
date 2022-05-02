import React,{useEffect,useState} from 'react'
import {Link,Redirect} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import {RegPage} from "../action";
import Footer from './Footer';

export default function Reg() {
  
   const auth = useSelector(state=>state.auth); 
   const dispatch = useDispatch();
   const [fname,setFname] = useState("");
   const [lname,setLname] = useState("");
   const [email,setEmail] = useState("");
   const [typeOfTrade,setTypeOfTrade] = useState("");
   const [password,setPassword] = useState(""); 
   const [cpassword,setCPassword] = useState(""); 

   const regData=()=>{
         const data={fname,lname,email,typeOfTrade,cpassword};
         dispatch(RegPage(data));
        
    }

    if(auth?.user?.otpVerification==="0"){
      return <Redirect to={"/otp"}/>
    }

  return (
    <>
  {/* component */}
  <div className="min-h-screen p-6 bg-sky-50 flex items-center justify-center">
    <div className="container max-w-screen-lg mx-auto">
      <div>
        <Link to="/" className="font-semibold text-3xl text-sky-500">ApiOnline.in</Link>
        <p className="text-gray-500 mb-6">
          Join Now to Sale or Purchase chemical,medicine with us.
        </p>
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Create an Account</p>
              <p>Please fill out all the fields.</p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                
                <div className="md:col-span-3">
                  <label htmlFor="address">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setFname(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setLname(e.target.value)}
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Type of Trade</label>
                  <select
                    type="text"
                    name="email"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setTypeOfTrade(e.target.value)}>
                    <option></option>
                    <option>Buyer</option>
                    <option>Seller</option>
                  </select>
                </div>
                <div className="md:col-span-5">
                  <label htmlFor="email">Password</label>
                  <input
                    type="text"
                    name="password"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div className="md:col-span-5">
                  <label htmlFor="email">Confirm Password</label>
                  <input
                    type="text"
                    name="cpassword"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  onChange={(e)=>setCPassword(e.target.value)}
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
                      I have read and accept the Term and Conditions
                    </label>
                  </div>
                </div>
                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    {/*<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Signup
                    </button>*/}
                    <button className="hover:bg-sky-600 text-white font-bold py-2 px-4 rounded bg-sky-500"onClick={(e)=>regData()}>
                      Signup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<a
        href="https://www.buymeacoffee.com/dgauderman"
        target="_blank"
        className="md:absolute bottom-0 right-0 p-4 float-right"
      >
        <img
          src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
          alt="Buy Me A Coffee"
          className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
        />
      </a>*/}
    </div>
  </div>

  <Footer/>

</>

  )
}