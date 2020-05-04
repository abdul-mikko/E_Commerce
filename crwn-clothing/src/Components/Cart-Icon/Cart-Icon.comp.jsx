import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/CartIcon/original (1).svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import ToggleCart from "../../Redux/Cart/Cart_action";
import { selectCartItemsCount } from "../../Redux/Cart/Cart.Selector";
const CartIcon = ({ ToggleCart, itemCount }) => (
  <div className="cart-icon " onClick={ToggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count ">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCart: () => dispatch(ToggleCart()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
