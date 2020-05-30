import fetchCollectionFromDB from "./Shop.types";

const INIT_VAL = {
  ShopDataCollectionsArrays: null,
  isFetching: false,
  errorMessage: "",
};

const collectionReducer = (state = INIT_VAL, action) => {
  switch (action.type) {
    case fetchCollectionFromDB.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case fetchCollectionFromDB.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ShopDataCollectionsArrays: action.payload,
      };
    case fetchCollectionFromDB.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default collectionReducer;
