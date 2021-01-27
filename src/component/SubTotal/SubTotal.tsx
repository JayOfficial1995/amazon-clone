import React from "react";

import { SubTotalStyle } from "./SubTotal.style";

function SubTotal() {
  return (
    <SubTotalStyle>
      <p className="items-title">
        Subtotal (0 item) : <strong className="items-total">0</strong>
      </p>

      <label className="gift-wrapper">
        <input type="checkbox" className="checkbox" />
        This Order Contains a Gift
      </label>

      <button className="checkout-button">Proceed To Checkout</button>
    </SubTotalStyle>
  );
}

export default SubTotal;
