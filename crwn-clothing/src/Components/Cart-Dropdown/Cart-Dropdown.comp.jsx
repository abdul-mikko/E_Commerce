import React from "react";
import CustomButton from "../Custom-Button/Custom-Button.comp";
import CartDropdownItem from "../Cart_Item_dropdown/Cart_Item_dropdown.comp";
import { connect } from "react-redux";
import { selectCartItems } from "../../Redux/Cart/Cart.Selector";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartitem }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartitem.length ? (
        cartitem.map((item) => <CartDropdownItem item={item} key={item.id} />)
      ) : (
        <span className="empty-cart"> Your Cart is Empty </span>
      )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({ cartitem: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
