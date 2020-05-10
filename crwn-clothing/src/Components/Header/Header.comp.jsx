import React from "react";
import { ReactComponent as Logo } from "../../assets/BrandLogo/original.svg";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.util";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../Redux/User/user.selector";
import { selectCartHidden } from "../../Redux/Cart/Cart.Selector";

import "./header.styles.scss";
import CartIcon from "../Cart-Icon/Cart-Icon.comp";
import CartDropdown from "../Cart-Dropdown/Cart-Dropdown.comp";

const Header = ({ currentUser, hidden }) => {
  // console.log(currentUser);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/signin" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
