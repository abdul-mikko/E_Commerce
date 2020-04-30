import React from "react";
import SHOP_DATA from "./Shop_Data";
import CollectionPreview from "../../Components/Collection_Preview/Collection_pre_Comp";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShopData: SHOP_DATA,
    };
  }

  render() {
    return (
      <div>
        {this.state.ShopData.map(({ id, ...CollectionProps }) => (
          <CollectionPreview key={id} {...CollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
