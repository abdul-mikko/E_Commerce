import { createSelector } from "reselect";

const selectCollection = (state) => state.shopPageCollections;

export const selectCollectionItems = createSelector(
  [selectCollection],
  (shopPageCollections) => shopPageCollections.ShopDataCollectionsArrays
);

const selectCollectionByID = (paramsURL) =>
  createSelector(
    [selectCollectionItems],
    (ShopDataCollectionsArrays) => ShopDataCollectionsArrays[paramsURL]
  );

export const CollectionObjToArray = createSelector(
  [selectCollectionItems],
  (ShopDataCollectionsArrays) =>
    Object.keys(ShopDataCollectionsArrays).map(
      (key) => ShopDataCollectionsArrays[key]
    )
);

export default selectCollectionByID;
