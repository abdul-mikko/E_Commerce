import React from "react";
import CollectionPreview from "../Collection_Preview/Collection_pre_Comp";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionItems } from "../../Redux/CollectionPage/Collection.Selector";

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
  Collections: selectCollectionItems,
});

export default connect(mapStateToProps)(CollectionOverview);
