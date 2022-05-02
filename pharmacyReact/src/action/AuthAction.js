import {authStatus,regStatus,otpStatus,generalStatus,logoutStatus} from "./Status";
// import axios from '../helper/Axios';
import axios from 'axios';
export const LoginPage=(userLogin)=>{ 
	console.log(userLogin)
	return async (dispatch)=>{ 
		dispatch({type:authStatus.LOGIN_REQUEST});
		const res = await axios.post("http://localhost:3000/api/login",userLogin);
		
		if(res.status===200){
            console.log(res)
			const {token,user} = res.data; 
			localStorage.setItem("token",token);
			localStorage.setItem("user",JSON.stringify(user));
			console.log({user})
			dispatch({
				type:authStatus.LOGIN_SUCCESS,
				payload:{
					token,user
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const RegPage=(userReg)=>{
	 
	return async (dispatch)=>{
      dispatch({type:regStatus.REG_REQUEST});
      const res = await axios.post("http://localhost:3000/api/reg",userReg); 
      if(res.status===200){
      	if(res.data){
      		const {token,user} = res.data;
      		console.log({token,user})
      		localStorage.setItem("token",token);
      		localStorage.setItem("user",JSON.stringify(user));
      		dispatch({
      			type:regStatus.REG_SUCCESS,
      			payload:{token,user}
      		})
      	}
      }else{
      	if(res.status===201){
      		console.log(res.data);
      	}
      }
	}
}


export const AllreadyLogin=()=>{
	return async (dispatch)=>{
		const token = localStorage.getItem("token"); 
		if(token){
			const userData = JSON.parse(localStorage.getItem("user"));
		    dispatch({
		    	type:authStatus.LOGIN_SUCCESS,
		    	payload:{
		    		token,userData
		    	}
		    });
		}
		// else if(adminToken){
		// 	const adminData = JSON.parse(localStorage.getItem("user"));
		// 	dispatch({
		// 		type:authStatus.LOGIN_SUCCESS,
		// 		payload:{
		// 			 adminToken,adminData
		// 		}
		// 	})
		// }
		else{
			dispatch({
				type:authStatus.LOGIN_FAILED,
				payload:{error:"Failed to Login"}
			});
		}
	}
}

export const otpVerification=(otpCredentials)=>{
	return async(dispatch)=>{
		dispatch({type:otpStatus.OTP_REQUEST});
		const res = await axios.post("http://localhost:3000/api/otpVerification",otpCredentials);
		console.log(res)
		if(res.status===200){
			if(res.data){
		    const {token,user} = res.data; 
		    localStorage.setItem("token",token);
      		localStorage.setItem("user",JSON.stringify(user));
      		console.log(res.data);
		    dispatch({
		    	type:otpStatus.OTP_SUCCESS,
		    	payload:{
		    		token,user
		    	}
		    }) 
		    }

		}
		if(res.status===201){
			dispatch({
				type:otpStatus.OTP_FAILED,
			    payload:res.data.message
			})
		}

	}
}

export const general=(generalCredentials)=>{
	console.log(generalCredentials);
	return async(dispatch)=>{
		dispatch({type:generalStatus.GENERAL_REQUEST});
		const res = await axios.post("http://localhost:3000/api/general",generalCredentials);
		console.log(res)
		if(res.status===200){
			if(res.data){
		    const {token,user} = res.data;
		    console.log(res.data)
			localStorage.setItem("token",token);
			localStorage.setItem("user",JSON.stringify(user));
		    dispatch({
		    	type:generalStatus.GENERAL_SUCCESS,
		    	payload:{
		    		token,user
		    	}
		    })
		    // window.localStorage.removeItem("generalToken");
		    // window.localStorage.removeItem("otpToken");
		    }

		}
		if(res.status===201){
			dispatch({
				type:generalStatus.GENERAL_FAILED,
			    payload:res.data.message
			})
		}

	}
}

export const logout=()=>{
    return async dispatch=>{
        dispatch({type:logoutStatus.LOGOUT_REQUEST});
        const res = await axios.post("http://localhost:3000/api/logout");
        if(res.status===200){
        	window.localStorage.clear(); 
            dispatch({type:logoutStatus.LOGOUT_SUCCESS});
        }else{
        	dispatch({
        		type:logoutStatus.LOGOUT_FAILED,
        	    payload:res?.data?.msg
            });
        }
    }
}

 