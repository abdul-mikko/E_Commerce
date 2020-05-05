import React from "react";
import CollectionPreview from "../../Components/Collection_Preview/Collection_pre_Comp";
import { connect } from "react-redux";
import { selectCollectionItems } from "../../Redux/CollectionPage/Collection.Selector";
import { createStructuredSelector } from "reselect";
import "./shopPage.style.scss";

const ShopPage = ({ ShopData }) => {
  return (
    <div className="shop-page">
      {ShopData.map(({ id, ...CollectionProps }) => (
        <CollectionPreview key={id} {...CollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  ShopData: selectCollectionItems,
});

export default connect(mapStateToProps)(ShopPage);
