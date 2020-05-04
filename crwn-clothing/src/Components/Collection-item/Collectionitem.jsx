import React from "react";
import { connect } from "react-redux";
import { AddItem } from "../../Redux/Cart/Cart_action";

import "./collection-item.styles.scss";
import CustomButton from "../Custom-Button/Custom-Button.comp";

const CollectionItem = ({ item, AddItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price} </span>
      </div>
      <CustomButton inverted onClick={() => AddItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
