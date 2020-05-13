import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CollectionObjToArray } from "../../Redux/ShopPage/ShopPage.Collection.Selector";
import CollectionPreview from "../ShopPage_Collection_Preview/Collection_Preview_Comp";

const CollectionOverview = ({ Collections }) => {
  return (
    <div className="collection-overview">
      {Collections.map(({ id, ...CollectionProps }) => (
        <CollectionPreview key={id} {...CollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  Collections: CollectionObjToArray,
});

export default connect(mapStateToProps)(CollectionOverview);
