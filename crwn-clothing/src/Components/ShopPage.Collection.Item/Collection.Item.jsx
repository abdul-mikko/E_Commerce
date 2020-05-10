import React from "react";
import { connect } from "react-redux";
import { AddItemToCart } from "../../Redux/Cart/Cart_action";

import CustomButton from "../Custom-Button/Custom-Button.comp";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, AddItemToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price} </span>
      </div>
      <CustomButton inverted onClick={() => AddItemToCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddItemToCart: (item) => dispatch(AddItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
