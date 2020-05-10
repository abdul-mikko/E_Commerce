import React from "react";
import {
  selectCartTotal,
  selectCartItems,
} from "../../Redux/Cart/Cart.Selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";
import CheckoutItem from "../../Components/Checkout.item/Checkout.item.comp";
import StripeCheckOutButton from "../../Components/Stripe/strip-button.comp";

const Checkout = ({ total, Items }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {Items.map((item) => (
        <CheckoutItem cartitem={item} key={item.id} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className="test-warning">
        **Please use the following test credit card for payments**
        <br />
        4242 4242 4242 4242 4242 - Exp: 01/21 - CVV:123
      </div>

      <StripeCheckOutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  Items: selectCartItems,
});

export default connect(mapStateToProps)(Checkout);
