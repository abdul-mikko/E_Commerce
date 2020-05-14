import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../Components/ShopPage.Collection_Overview/CollectionOverview.comp";
import "./shopPage.style.scss";
import FinalCollectionPageComp from "../FinalCollectionPage/FinalCollectionPage.comp";
import { firestore, fetchDataFromDB } from "../../Firebase/Firebase.util";
import { updateCollections } from "../../Redux/ShopPage/Shop.action";
import WithSpinner from "../../Components/with-spinner/with-spinner.comp";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const FinalCollectionPageCompWithSpinner = WithSpinner(FinalCollectionPageComp);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    console.log(this.props);
    const { update } = this.props;
    const CollectionRef1 = firestore.collection("collectionKey");
    CollectionRef1.get().then((Snapshot) => {
      const datafromDB = fetchDataFromDB(Snapshot);
      update(datafromDB);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:Id`}
          render={(props) => (
            <FinalCollectionPageCompWithSpinner
              isLoading={loading}
              {...props}
            />
          )}
        />
        <WithSpinner></WithSpinner>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  update: (data) => dispatch(updateCollections(data)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
