import React from 'react'
import {Link,Redirect} from 'react-router-dom';
import {logout} from "../action"
import {useDispatch,useSelector} from 'react-redux';
export default function Header() {
	const auth = useSelector(state=>state.auth);
    const dispatch = useDispatch();
	const logoutNow=()=>{
         dispatch(logout());

	}
	if(auth.authenticate===false){
		return <Redirect to={"/login"} />
	}
	return (
		<div>
			<header className="flex justify-between items-center bg-gray-600 p-4">
						<div className="flex text-white">Seller Panel</div>
						{/*<div className="flex">Search Box</div>*/}
						<div className="flex ">   
								 {auth.authenticate>0?
								 	<div>
								 	<Link to={"/"} className="px-2 text-white" onClick={(e)=>logoutNow()}>Logout</Link>
								 	</div>
								 	:<Link to={"/login"} className="px-2 text-white">Login</Link>}
								 {/*<span className="px-2 text-white">Login</span>
								 <span className="px-2 text-white">Login</span>
								 <span className="px-2 text-white">Login</span>*/}  
						</div>
					</header>
		</div>
	)
}