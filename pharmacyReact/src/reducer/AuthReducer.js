import {authStatus,regStatus,otpStatus,generalStatus,logoutStatus} from '../action/Status';

const initialData = {
	token:null,
	user:[],
	authenticate:false,
	authenticating:false, 
	loading:false,
	error:null,
	message:""

};

export default (state=initialData,action)=>{
	 console.log(action)
	 switch(action.type){
	 	case authStatus.LOGIN_REQUEST:
	 		state={
	 		    ...state,
	 		    authenticating:true
	 		}
	 	break; 
	 	case authStatus.LOGIN_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	user:action.payload.user,
	 	    	token:action.payload.token,
	 	    	authenticate:true,
	 	        authenticating:false

	 	    }
	 	break;
	 	case regStatus.REG_REQUEST:
	 	    state={
	 	    	...state,
	 	    	authenticating:true,
	 	    }
	 	break;
	 	case regStatus.REG_SUCCESS:
	 	     state={
	 	     	...state, 
	 	     	authenticating:true,
	 	     	authenticate:false,
	 	     	token:action.payload.token,
	 	     	user:action.payload.user

	 	     }
	 	break;

	 	case otpStatus.OTP_REQUEST:
	 	     state={
              ...state, 
	 	     }
	 	     break;
	 	case otpStatus.OTP_SUCCESS:
	 	     state={
              ...state,
              token:action.payload.token,
              user:action.payload.user,
	 	      authenticate:false,
	 	      authenticating:false 
	 	     }
	 	     break;
	 	case otpStatus.OTP_FAILED:
	 		 state={
	 		 	...state,
	 		 	message:action.payload
	 		 }
	 		 break;
        case generalStatus.GENERAL_REQUEST:
	 	     state={
              ...state,
	 	      authenticating:true
	 	     }
	 	     break;
	 	case generalStatus.GENERAL_SUCCESS:
	 	     state={
              ...state,
              token:action.payload.token,
              user:action.payload.user, 
	 	      authenticate:true,
	 	      authenticating:false
	 	     }
	 	     break;
	 	case generalStatus.GENERAL_FAILED:
	 		 state={
	 		 	...state,
	 		 	message:action.payload
	 		 }
	 		 break;  
	 	case logoutStatus.LOGOUT_REQUEST:
	 	     state={
	 	     	...state,
	 	     	loading:true
	 	     }
	 	     break;
	 	case logoutStatus.LOGOUT_SUCCESS:
	 	     state={
	 	     	...state, 
	 	     	...initialData
	 	     }
	 	     break;
	 	case logoutStatus.LOGOUT_FAILED:
	 	     state={
	 	     	...state,
	 	     	error:action.payload.msg,
	 	     	loading:false
	 	     }          
	 	     break;
	 		 	            
	 }

	 return state;
}