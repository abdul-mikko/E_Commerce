import { createSelector } from "reselect";

const selectCollection = (state) => state.shopPageCollections;

export const selectCollectionItems = createSelector(
  [selectCollection],
  (shopPageCollections) => shopPageCollections.ShopDataCollectionsArray
);
