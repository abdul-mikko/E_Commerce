import React from "react";
import { Route, withRouter } from "react-router-dom";
import CollectionOverview from "../../Components/ShopPage.Collection_Overview/CollectionOverview.comp";
import "./shopPage.style.scss";
import FinalCollectionPageComp from "../FinalCollectionPage/FinalCollectionPage.comp";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:Id`} component={FinalCollectionPageComp} />
  </div>
);

export default withRouter(ShopPage);
