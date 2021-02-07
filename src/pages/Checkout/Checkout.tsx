import React from "react";

import SubTotal from "../../component/SubTotal/SubTotal";
import { CheckoutStyle } from "./Checkout.style";

function Checkout() {
  return (
    <CheckoutStyle>
      <article className="checkout-list">
        <picture className="ad-wrapper">
          <img
            src="./images/amazon-ads/checkout-ad.jpg"
            alt="Checkout ad"
            className="ad-image"
          />
        </picture>

        <article className="item-list-wrapper">
          <h1 className="title">Your Shoping Basket</h1>
        </article>
      </article>

      <article className="basket-items-wrapper">
        <SubTotal />
      </article>
    </CheckoutStyle>
  );
}

export default Checkout;
