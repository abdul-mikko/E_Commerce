import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/CartIcon/original (1).svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import ToggleCart from "../../Redux/Cart/Cart_action";

const CartIcon = ({ ToggleCart }) => (
  <div className="cart-icon " onClick={ToggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count ">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCart: () => dispatch(ToggleCart()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
