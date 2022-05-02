import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Layout from "../../components/Layout";
import Card from "./Card";
import CartItem from "./CartItem";
import { addToCart, getCartItems, removeCartItem, checkAvailbility} from "../../action";
import PriceDetails from "./PriceDetails";
import Header from "../Header";


const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);

  const onQuantityIncrement = (_id, qty) => {
    //console.log({_id, qty});
    const { name, rate, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, rate, img }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, rate, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, rate, img }, -1));
  };

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };

  if (props.onlyCartItems) {
    return (
      <>
        {Object?.keys(cartItems)?.map((key, index) => (
          <CartItem
            key={index}
            cartItem={cartItems[key]}
            onQuantityInc={onQuantityIncrement}
            onQuantityDec={onQuantityDecrement}
          />
        ))}
      </>
    );
  }

  const checkAvailbilityProduct=()=>{
     // const data=cart.cartItems;
     const data=auth.user._id;
     dispatch(checkAvailbility(data));

  }

  return (
   <div className="bg-sky-50">
    <Header/>
      <div className="">

    {Object.keys(cart.cartItems).length>0?
       <div className="container flex mx-auto w-9/12 p-3 space-x-5">
        <div
        className="w-9/12"
        >
           {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
              onRemoveCartItem={onRemoveCartItem}
            />
          ))}
 
        </div>

        <div className="w-3/12 bg-white p-5 shadow-sm rounded-md">
        <PriceDetails
          totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
            return qty + cart.cartItems[key].qty;
          }, 0)}
          totalrate={Object.keys(cart.cartItems).reduce((totalrate, key) => {
            const { rate, qty } = cart.cartItems[key];
            const rates = parseInt(rate);
            return (totalrate + (rates * qty));
          }, 0)}
        />
            <div className="flex justify-center">
              <button
                title="PLACE ORDER"
                className="bg-orange-500 text-white px-5 py-2 text-sm rounded-sm text-left"
                // onClick={() => props.history.push(`/checkout`)}
                onClick={(e)=>checkAvailbilityProduct()}
              >Check Availbility</button>
      </div>
      </div>
      </div>:
       <div className="container flex mx-auto h-96 w-9/12 p-3 space-x-5 justify-center items-center">
       <div className="flex-row">
       <div className="flex justify-center items-center">
       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler text-slate-500 icon-tabler-shopping-cart-off" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="6" cy="19" r="2"></circle>
   <path d="M17 17a2 2 0 1 0 2 2"></path>
   <path d="M17 17h-11v-11"></path>
   <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7"></path>
   <path d="M3 3l18 18"></path>
</svg></div>
       <h1 className="font-semibold text-xl text-slate-500">No cart item available</h1>
       </div>
       </div>
    }
      </div>
    </div>
  );
};

export default CartPage;