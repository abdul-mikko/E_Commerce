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
    const { ShopData } = this.state;
    return (
      <div className="shop-page">
        {ShopData.map(({ id, ...CollectionProps }) => (
          <CollectionPreview key={id} {...CollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
