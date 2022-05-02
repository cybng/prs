import React, { useState } from "react";


const CartItem = (props) => {
  const [qty, setQty] = useState(props.cartItem.qty);

  const { _id, name, rate, img } = props.cartItem;

  const onQuantityIncrement = () => {
    setQty(qty + 1);
    props.onQuantityInc(_id, qty + 1);
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    props.onQuantityDec(_id, qty - 1);
  };

  return (
    <div className="bg-white p-5 flex justify-between items-center">
      <div className="flex space-x-5">
        <div className="w-20 h-20 bg-slate-50">
          <img src={img} alt={""} />
        </div>
        <div className="">
          <div>
            <p>{name} hsg</p>
            <p>Rs. {rate}</p>
          </div>
          <div>Purity</div>
        </div>
      </div>
      <div>
        {/* quantity control */}
        <div className="text-right">
        <button
          className="pb-5"
          onClick={() => props.onRemoveCartItem(_id)}
        >
          Remove
        </button>
        </div>
        <div className="flex justify-center">

          <button className="px-5 py-2 font-bold bg-sky-500 text-white" onClick={onQuantityDecrement}>-</button>
          <input value={qty} className="w-20 bg-sky-50 text-center  " readOnly />
          <button className="px-5 py-2 font-bold bg-sky-500 text-white" onClick={onQuantityIncrement}>+</button>
        </div>
        <div className="">
        {/*<button className="bg-green-500 text">save for later</button>*/}
        
      </div>
      </div>
    </div>
  );
};

export default CartItem;