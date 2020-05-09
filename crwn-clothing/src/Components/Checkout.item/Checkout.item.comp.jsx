import React from "react";
import { connect } from "react-redux";
import {
  RemoveItemById,
  DecreaseItemByID,
  AddItemToCart,
} from "../../Redux/Cart/Cart_action";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartitem, RemoveItemById, addItem, decreaseItem }) => {
  const { name, imageUrl, price, quantity } = cartitem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartitem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartitem)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => RemoveItemById(cartitem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  RemoveItemById: (item) => dispatch(RemoveItemById(item)),
  addItem: (item) => dispatch(AddItemToCart(item)),
  decreaseItem: (item) => dispatch(DecreaseItemByID(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
