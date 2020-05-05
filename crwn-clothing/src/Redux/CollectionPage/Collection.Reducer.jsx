import SHOP_DATA from "./Shop_Data.js";

const INIT_VAL = {
  ShopDataCollection: SHOP_DATA,
};

const collectionReducer = (state = INIT_VAL, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
