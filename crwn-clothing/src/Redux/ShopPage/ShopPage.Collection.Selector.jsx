import { createSelector } from "reselect";

const selectCollection = (state) => state.shopPageCollections;

export const selectCollectionItems = createSelector(
  [selectCollection],
  (shopPageCollections) => shopPageCollections.ShopDataCollectionsArrays
);

const selectCollectionByID = (paramsURL) =>
  createSelector([selectCollectionItems], (ShopDataCollectionsArrays) =>
    ShopDataCollectionsArrays ? ShopDataCollectionsArrays[paramsURL] : []
  );

export const CollectionObjToArray = createSelector(
  [selectCollectionItems],
  (ShopDataCollectionsArrays) =>
    ShopDataCollectionsArrays ? Object.values(ShopDataCollectionsArrays) : null
);

export default selectCollectionByID;
