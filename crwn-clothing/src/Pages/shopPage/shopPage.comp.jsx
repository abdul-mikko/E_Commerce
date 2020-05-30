import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../../Components/ShopPage.Collection_Overview/CollectionOverview.comp";
import "./shopPage.style.scss";
import FinalCollectionPageComp from "../FinalCollectionPage/FinalCollectionPage.comp";

import {
  selectFetching,
  selectLodingCollection,
} from "../../Redux/ShopPage/ShopPage.Collection.Selector";
import WithSpinner from "../../Components/with-spinner/with-spinner.comp";
import { fetchStart } from "../../Redux/ShopPage/Shop.action";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const FinalCollectionPageCompWithSpinner = WithSpinner(FinalCollectionPageComp);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchStart } = this.props;
    fetchStart();
  }

  render() {
    const { match, isLoadingState, isLoadingData } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isLoadingState}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:Id`}
          render={(props) => (
            <FinalCollectionPageCompWithSpinner
              isLoading={!isLoadingData}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchStart: () => dispatch(fetchStart()),
});

const mapStateToProps = createStructuredSelector({
  isLoadingState: selectFetching,
  isLoadingData: selectLodingCollection,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
