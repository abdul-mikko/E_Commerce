import SHOP_DATA from "./Shop_Data.js";
import { updateCollectionFromDB } from "./Shop.types";

const INIT_VAL = {
  ShopDataCollectionsArrays: "undefined",
};

const collectionReducer = (state = INIT_VAL, action) => {
  switch (action.type) {
    case updateCollectionFromDB.UPDATAE_COLLECTON_FROM_DB:
      return {
        ...state,
        ShopDataCollectionsArrays: action.payload,
      };
    default:
      return state;
  }
};

export default collectionReducer;
