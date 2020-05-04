import React from "react";
import CustomButton from "../Custom-Button/Custom-Button.comp";
import CartDropdownItem from "../Cart_Item_dropdown/Cart_Item_dropdown.comp";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartitem }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartitem.map((item) => (
        <CartDropdownItem item={item} key={item.id} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartitem } }) => ({ cartitem });

export default connect(mapStateToProps)(CartDropdown);
