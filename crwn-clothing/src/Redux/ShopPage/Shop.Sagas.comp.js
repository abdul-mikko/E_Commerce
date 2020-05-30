import { takeLatest, call, put } from 'redux-saga/effects'
import { firestore, fetchDataFromDB } from '../../Firebase/Firebase.util'
import fetchCollectionFromDB from './Shop.types'
import { fetchSuccess, fetchError } from './Shop.action'

export function* fetchCollectionAsync() {

    try {
        const collectionRef = firestore.collection("collectionKey");
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(fetchDataFromDB, snapshot)
        yield put(fetchSuccess(collectionMap))
    } catch (error) {
        yield put(fetchError(error.message))
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(fetchCollectionFromDB.FETCH_COLLECTION_START, fetchCollectionAsync)
}