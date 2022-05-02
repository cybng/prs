import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";

export default function Sidebar() {
	const auth = useSelector(state=>state.auth);
	return (
		<div className="h-screen w-56 bg-white border-r shadow-md">
		<Link to="/profile" className="text-gray-800 text-xs">
		    <div className="bg-gray-100 p-4 hover:bg-blue-500 hover:text-white text-gray-500">
		    	{`Welcome back,  ${auth?.user?.fname.charAt(0).toUpperCase()}${auth?.user?.fname.slice(1)}`}
            </div>
        </Link>    
			<ul className="">
			   <Link to="/dashboard" className="">
               <li className="w-full justify-between text-gray-500 hover:text-white hover:bg-blue-500 cursor-pointer items-center p-2 pl-4">
			       Dashboard
			   </li>
			   </Link>

			   <Link to="/dashboard" className="">
               <li className="w-full justify-between text-gray-500 hover:text-white hover:bg-blue-500 cursor-pointer items-center p-2 pl-4">
			       Buying
			   </li>
			   </Link>
			   <Link to="/dashboard" className="">
               <li className="w-full justify-between text-gray-500 hover:text-white hover:bg-blue-500 cursor-pointer items-center p-2 pl-4">
			       Selling
			   </li>
			   </Link>
			   <Link to="/upload" className="">
               <li className="w-full justify-between text-gray-500 hover:text-white hover:bg-blue-500 cursor-pointer items-center p-2 pl-4">
			       Upload Product
			   </li>
			   </Link>
			   <Link to="/productList" className="">
               <li className="w-full justify-between text-gray-500 hover:text-white hover:bg-blue-500 cursor-pointer items-center p-2 pl-4">
			       All Product List
			   </li>
			   </Link>
			   <Link to="/sellerneworders" className="">
               <li className="w-full justify-between text-gray-500 hover:text-white hover:bg-blue-500 cursor-pointer items-center p-2 pl-4">
			       New Orders
			   </li>
			   </Link>
			   <Link to="/dashboard" className="">
               <li className="w-full justify-between text-gray-500 hover:text-white hover:bg-blue-500 cursor-pointer items-center p-2 pl-4">
			       Term & Conditions
			   </li>
			   </Link>
			 
			</ul>
		</div>
	)
}