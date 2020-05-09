import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './User/User.reducer'
import CartReducer from './Cart/Cart_Reducer'
import directoryReducer from './HomePageDirectory/Directory.Reducer'
import collectionReducer from './ShopPage/ShopPage.Collection.Reducer.jsx'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']

}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shopPageCollections: collectionReducer
})

export default persistReducer(persistConfig, rootReducer)