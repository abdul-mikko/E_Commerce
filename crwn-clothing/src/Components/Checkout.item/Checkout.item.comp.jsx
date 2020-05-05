import React from "react";
import { connect } from "react-redux";
import { RemoveItemById } from "../../Redux/Cart/Cart_action";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartitem, RemoveItemById }) => {
  const { name, imageUrl, price, quantity } = cartitem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => RemoveItemById(cartitem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  RemoveItemById: (item) => dispatch(RemoveItemById(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
