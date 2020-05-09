import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ToggleCart from "../../Redux/Cart/Cart_action";

import { selectCartItemsCount } from "../../Redux/Cart/Cart.Selector";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/CartIcon/original (1).svg";

const CartIcon = ({ ToggleCart, itemCount }) => (
  <div className="cart-icon " onClick={ToggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count ">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCart: () => dispatch(ToggleCart()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
