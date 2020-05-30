import { createSelector } from "reselect";

const selectCollection = (state) => state.shopPageCollections;

export const selectCollectionItems = createSelector(
  [selectCollection],
  (shopPageCollections) => shopPageCollections.ShopDataCollectionsArrays
);
export const selectFetching = createSelector(
  [selectCollection],
  (shopPageCollections) => shopPageCollections.isFetching
);

const selectCollectionByID = (paramsURL) =>
  createSelector([selectCollectionItems], (ShopDataCollectionsArrays) =>
    ShopDataCollectionsArrays ? ShopDataCollectionsArrays[paramsURL] : []
  );

export const CollectionObjToArray = createSelector(
  [selectCollectionItems],
  (ShopDataCollectionsArrays) =>
    ShopDataCollectionsArrays ? Object.values(ShopDataCollectionsArrays) : []
);

export const selectLodingCollection = createSelector(
  [selectCollection],
  (shopPageCollections) => !!shopPageCollections.ShopDataCollectionsArrays
);

export default selectCollectionByID;
