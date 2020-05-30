import fetchCollectionFromDB from './Shop.types'
import { firestore, fetchDataFromDB } from '../../Firebase/Firebase.util'

export const fetchStart = () => {
    return {
        type: fetchCollectionFromDB.FETCH_COLLECTION_START
    }
}

export const fetchSuccess = data1 => ({
    type: fetchCollectionFromDB.FETCH_COLLECTION_SUCCESS,
    payload: data1
})
export const fetchError = data => ({
    type: fetchCollectionFromDB.FETCH_COLLECTION_FAILURE,
    payload: data
})

export const FetchProcess = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collectionKey");
        dispatch(fetchStart());
        collectionRef.get().then((Snapshot) => {
            const datafromDB = fetchDataFromDB(Snapshot);
            dispatch(fetchSuccess(datafromDB))
        }).catch(error => dispatch(fetchError(error.message)));
    }
}