import React,{useState}from 'react'
import {Redirect} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {general} from "../action";

export default function DetailVerification() {
  const auth = useSelector(state=>state.auth);
  const dispatch = useDispatch();

  const [companyName,setCompanyName]=useState("");
  const [mobileNumber,setMobileNumber]=useState("");
  const [gstNumber,setGstNumber]=useState("");
  const [paymentTerm,setPaymentTerm]=useState("");
  const [address,setAddress]=useState("");
  const [city,setCity]=useState("");
  const [country,setCountry]=useState("");
  const [state,setState]=useState("");
  const [zip,setZip]=useState("");
  const userId = JSON.parse(window.localStorage.getItem("user"))?._id;

  const generalVerify=()=>{
    const generalCredentials={
          userId,companyName,mobileNumber,gstNumber,paymentTerm,address,city,country,state,zip,
        } 
    dispatch(general(generalCredentials))
  }

  if(auth.authenticate){ 

       if(auth?.user?.role==="Admin"){
       return <Redirect to={'/admin'} />
       }
       if(auth?.user?.role==="Seller" &&(auth.user.generalVerification==="1")){
       return <Redirect to={"/seller"} />
       }
       if(auth?.user?.role==="Buyer"){
       return <Redirect to={"/"} />
       }
    }

	return (
		<div>
		    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div className="container max-w-screen-lg mx-auto">
      <div>
        <h2 className="font-semibold text-xl text-gray-600">ApiOnline.in</h2>
        <p className="text-gray-500 mb-6">
          Join Now to Sale or Purchase chemical,medicine with us.
        </p>
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg text-green-600">Your Verification Details</p>
              <p>Please fill out all the fields .</p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-3">
                  <label htmlFor="address">Company Name</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setCompanyName(e.target.value)}
                    placeholder
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Mobile Number</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setMobileNumber(e.target.value)}
                    placeholder
                  />
                </div>
                <div className="md:col-span-5">
                  <label htmlFor="email">GST Number</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setGstNumber(e.target.value)} 
                  />
                </div> 
                <div className="md:col-span-3">
                  <label htmlFor="city">Payment Terms</label>
                  <select
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setPaymentTerm(e.target.value)}
                    placeholder
                  >
                  <option>Choose...</option>
                  <option>Supplier 30 Days only</option>
                  <option>Buyer-Advance / 30 Days</option>
                  </select>
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="address">Address / Street</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setAddress(e.target.value)}
                    placeholder
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={(e)=>setCity(e.target.value)}
                    placeholder
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="country">Country / region</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="country"
                      id="country"
                      placeholder="Country"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                     onChange={(e)=>setCountry(e.target.value)} 
                    />
                    <button
                      tabIndex={-1}
                      className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        className="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </button>
                    <button
                      tabIndex={-1}
                      htmlFor="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        className="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="state">State / province</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="state"
                      id="state"
                      placeholder="State"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      onChange={(e)=>setState(e.target.value)}
                    />
                    <button
                      tabIndex={-1}
                      className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        className="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </button>
                    <button
                      tabIndex={-1}
                      htmlFor="show_more"
                      className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        className="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder
                    onChange={(e)=>setZip(e.target.value)}
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
                      My billing address is different than above.
                    </label>
                  </div>
                </div>
                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={(e)=>generalVerify()}>
                      Submit
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
			
		</div>
	)
}