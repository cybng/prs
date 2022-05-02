import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Route,Switch, Link,Redirect } from 'react-router-dom'
import {BuyerRouter,AdminRouter,SellerRouter} from './privateRoute/PrivateRoute';
import {useDispatch,useSelector} from 'react-redux'
import {AllreadyLogin} from './action'
import Home from './component/home';
import Detail from "./component/detail/ProductDetail";
import Login from "./auth/Login";
import Reg from "./auth/Reg";
import Admin from "./admin/Admin"
import AddCategory from './admin/AddCategory';
import CsvProduct from './admin/CsvProduct';
import Gst from './component/gst';
import Otp from './auth/OtpVerification';
import DetailVerification from './auth/DetailVerification';
import SellerPanel from './seller/SellerPanel';
import SellerNewOrders from './seller/SellerNewOrders';
import ProductList from './seller/AllProductList';
import Upload from './seller/Upload';
import AdminUpload from './admin/Upload';
import CartPage from './component/cart/CartPage';
 
export default function App() {
   const adminToken = window.localStorage.getItem("token");
          
   
       const dispatch = useDispatch();
       const auth = useSelector(state=>state.auth);
       const adminMiddleware = ()=>{
        if(auth.user.role==="Admin"){
          return true
        }else{
          return <Redirect to={"/admin"}/>
        }
       }
   

       useEffect(()=>{
         if(!auth.authenticate){
            dispatch(AllreadyLogin());
         }
         // if(auth.authenticate){
         //  dispatch(getInitialData());
         // }
       },[auth.authenticate])




  return (
    <div>
     
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/detail" component={Detail} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/reg" component={Reg} />
    <AdminRouter path="/admin" exact component={Admin}/>
    <AdminRouter exact path="/admin/addcategory" component={AddCategory} />
    <AdminRouter exact path="/admin/approval" component={CsvProduct} />
    <AdminRouter exact path="/admin/upload" component={AdminUpload}/>
    <Route exact path="/gst" component={Gst} />
    <Route exact path="/otp" component={Otp}/>
    <Route exact path="/general" component={DetailVerification}/>
    <SellerRouter exact path="/seller" component={SellerPanel}/>
    <SellerRouter exact path="/upload" component={Upload}/>
    <SellerRouter exact path="/productList" component={ProductList}/>
    <SellerRouter exact path="/sellerneworders" component={SellerNewOrders}/>
    <Route exact path="/logout" component={Login}/>
    <Route exact path="/cart" component={CartPage}/>
    </Switch>
     
      
    </div>
  )
}