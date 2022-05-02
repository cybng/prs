import React from 'react'
import {Link } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import Cart from "./cart.gif"

export default function Header() {
  const auth = useSelector((state)=>state.auth);
  const cart = useSelector((state)=>state.cart)
  console.log(Object.keys(cart.cartItems).length)
	return (
		<div>
		<header className="bg-sky-50 w-full">
      <nav className="container flex justify-between items-center p-5 w-9/12 mx-auto">
        <Link to="/" className="text-2xl font-semibold text-sky-500">ApiOnline.in</Link>
        <div className="flex space-x-10 text-gray-800 font-bold text-sm justify-center items-center">
          <h1 className="hover:text-sky-500">Home</h1>
          <h1 className="hover:text-sky-500">About</h1>
          <h1 className="hover:text-sky-500">Contact</h1>
          {auth?.user?.fname?
            
          <Link to="/login" className="bg-sky-500 px-5 py-2 text-white rounded-md hover:bg-sky-600">
          <div className="flex justify-center items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="12" r="9"></circle>
   <circle cx="12" cy="10" r="3"></circle>
   <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
</svg>
           <div>
          {auth?.user?.fname}
          </div>
          </div>
          </Link>
          :
          <Link to="/login" className="bg-sky-500 px-5 py-2 text-white rounded-md hover:bg-sky-600">Log in now</Link>
          }
          <Link to="/cart" className="bg-green-500 px-5 py-2 text-white rounded-md hover:bg-green-600 flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="6" cy="19" r="2"></circle>
   <circle cx="17" cy="19" r="2"></circle>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l14 1l-1 7h-13"></path>
</svg> 
  
<span className="flex  text-white justify-center items-center text-sm"> &nbsp;{Object.keys(cart.cartItems).length} </span>

  {/*<span class="animate-ping absolute  h-3 w-3 rounded-full bg-black opacity-75"></span>*/}
          </Link>
        </div>
      </nav>
    </header>
			
		</div>
	)
}