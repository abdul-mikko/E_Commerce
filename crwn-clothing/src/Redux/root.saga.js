import { all, call } from 'redux-saga/effects'
import { fetchCollectionStart } from './ShopPage/Shop.Sagas.comp'
import { userSaga } from './User/user.saga'

export default function* rootSaga() {
    yield all([
        call(fetchCollectionStart),
        call(userSaga)
    ])
}