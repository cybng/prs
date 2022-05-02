import React from "react";

const rateDetails = (props) => {
  
  return (
    <div headerLeft={"rate Details"} style={{ maxWidth: "380px" }}>
      <div
        style={{
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Rate ({props.totalItem} items)</div>
          <div>{props.totalrate}</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Delivery Charges</div>
          <div>FREE</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Total Amount</div>
          <div>{props.totalrate}</div>
        </div>
      </div>
    </div>
  );
};

export default rateDetails;