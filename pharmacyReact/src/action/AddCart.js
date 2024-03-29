import {cartStatus,checkStatus} from "./Status";
// import axios from '../helper/Axios';
import axios from 'axios';
import store from "../store";
import {useSelector} from "react-redux";

const getCartItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartStatus.ADD_TO_CART_REQUEST });
      const res = await axios.post(`http://localhost:3000/api/getCartItems`);
      if (res.status === 200) {
        const { cartItems } = res.data;
        console.log({ getCartItems: cartItems });
        if (cartItems) {
          dispatch({
            type: cartStatus.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (product, newQty = 1) => {
  // console.log(product._id)
  return async (dispatch) => {
    const {
      cart: { cartItems },
      auth,
    } = store?.getState();
    //console.log('action::products', products);
    //const product = action.payload.product;
    //const products = state.products;
    // console.log(cartItems)
    const qty = cartItems[product?._id]
      ? parseInt(cartItems[product?._id].qty + newQty)
      : 1;
    cartItems[product?._id] = {
      ...product,
      qty,
    };
    // console.log(qty)

    if (auth.authenticate) {
      dispatch({ type: cartStatus.ADD_TO_CART_REQUEST });
      const payload = {
        // cartItems: Object.keys(cartItems).map((key, index) => {
        //     return {
        //         quantity: cartItems[key].qty,
        //         product: cartItems[key]._id
        //     }
        // })
        user:product.userId,
        cartItems: [
          {
            product: product._id,
            quantity: qty,
            uploadby:product.uploadBy,
            skuCode:product.sku,
            productName:product.productName
          },
        ],
      };
      console.log(payload);
      const res = await axios.post(`http://localhost:3000/api/addtocart`, payload);
      console.log(res);
      if (res.status === 201) {
        dispatch(getCartItems());
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    console.log("addToCart::", cartItems);

    dispatch({
      type: cartStatus.ADD_TO_CART_SUCCESS,
      payload: { cartItems },
    });
  };
};

export const removeCartItem = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartStatus.REMOVE_CART_ITEM_REQUEST });
      const res = await axios.post(`http://localhost:3000/api/removeItem`, { payload });
      if (res.status === 202) {
        dispatch({ type: cartStatus.REMOVE_CART_ITEM_SUCCESS });
        dispatch(getCartItems());
      } else {
        const { error } = res.data;
        dispatch({
          type: cartStatus.REMOVE_CART_ITEM_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const { auth } = store.getState();
    let cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;

    console.log("upppppppppp");

    if (auth.authenticate) {
      localStorage.removeItem("cart");
      //dispatch(getCartItems());
      if (cartItems) {
        const payload = {
          cartItems: Object.keys(cartItems).map((key, index) => {
            return {
              quantity: cartItems[key].qty,
              product: cartItems[key]._id,
            };
          }),
        };
        if (Object.keys(cartItems).length > 0) {
          const res = await axios.post(`http://localhost:3000/api/addtocart`, payload);
          if (res.status === 201) {
            dispatch(getCartItems());
          }
        }
      } else {
        dispatch(getCartItems());
      }
    } else {
      if (cartItems) {
        dispatch({
          type: cartStatus.ADD_TO_CART_SUCCESS,
          payload: { cartItems },
        });
      }
    }
  };
};

// export const checkAvailbility=(product)=>{
//   return async(dispatch)=>{
//     dispatch({type:checkStatus.CHECK_REQUEST});
//    const res = await axios.post("http://localhost:3000/api/checkAvailbility",product);
//    const {data,status} = res;
//    if(status===200){
//     dispatch({
//             type:checkStatus.CHECK_SUCCESS,
//             payload:{data}
//           })
//    }else{
//     console.log("CHECK AVAILBILITY ACTION ERR");
//    }
//   }
// }
export const checkAvailbility=(productId)=>{
  return async(dispatch)=>{
    const product = {userId:productId};
    dispatch({type:checkStatus.CHECK_REQUEST});
   const res = await axios.post("http://localhost:3000/api/updateavaility",product);
   const {data,status} = res;
   if(status===200){
    dispatch({
            type:checkStatus.CHECK_SUCCESS,
            payload:{data}
          })
   }else{
    console.log("CHECK AVAILBILITY ACTION ERR");
   }
  }
}

export { getCartItems };
