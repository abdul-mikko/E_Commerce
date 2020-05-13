import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../Components/ShopPage.Collection.Item/Collection.Item";
import selectCollectionByID from "../../Redux/ShopPage/ShopPage.Collection.Selector";
import "./FinalPage.style.scss";

const FinalCollectionPage = ({ match, Collection }) => {
  console.log(match.params.Id);
  const { title, items } = Collection;
  return (
    <div className="collection-page">
      <h2 className="title"> {title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  Collection: selectCollectionByID(ownProps.match.params.Id)(state),
});

export default connect(mapStateToProps)(FinalCollectionPage);
