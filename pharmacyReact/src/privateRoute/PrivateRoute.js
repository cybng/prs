import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

 
export const AdminRouter=({component:Component,...rest})=>{
     const auth = useSelector(state=>state.auth);
     return <Route {...rest} component={(props)=>{
          const adminToken = window.localStorage.getItem("token");
          
           if(adminToken && (auth?.user?.role==="Admin")){
              return <Component {...props} />
           }else{ 
               return <Redirect to={"/login"} />
          }
     }} />
} 
export const BuyerRouter=({component:Component,...rest})=>{
     const auth = useSelector(state=>state.auth);
     return <Route {...rest} component={(props)=>{
          const adminToken = window.localStorage.getItem("token");
          
           if(adminToken && (auth?.user?.role==="Buyer")){
              return <Component {...props} />
           }else{ 
               return <Redirect to={"/"} />
          }
     }} />
}
export const SellerRouter=({component:Component,...rest})=>{
     const auth = useSelector(state=>state.auth);
     return <Route {...rest} component={(props)=>{
          const adminToken = window.localStorage.getItem("token");
          
           if(adminToken && (auth?.user?.role==="Seller" && (auth.user.otpVerification==="0" && auth.user.generalVerification==="0"))){
              // return <Component {...props} />
                 return <Redirect to={"/otp"} />
           }else if(adminToken && (auth?.user?.role==="Seller" && (auth.user.otpVerification==="1" && auth.user.generalVerification==="0"))){
              // return <Component {...props} />
                 return <Redirect to={"/general"} />
           }else if(adminToken && (auth?.user?.role==="Seller" && (auth.user.otpVerification==="1" && auth.user.generalVerification==="1"))){
                 return <Component {...props} />
           }else if(adminToken && (auth.user.length<=0)){
                 return <Redirect to={"/login"} />
           }else{
                 return <Redirect to={"/login"} />
           } 
     }} />
}

 


