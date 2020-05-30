import { takeLatest, put, all, call } from 'redux-saga/effects'
import userTypeAction from './user.type.action'

import {
    SignInSuccess, SignInFailure
} from './user.action'

import { auth, googleProvider, createUserProfileDocInDB } from '../../Firebase/Firebase.util'

export function* signInWithGoogle() {

    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        const userRef = yield call(createUserProfileDocInDB, user)
        const userSnapShot = yield userRef.get()
        yield put(SignInSuccess({
            id: userSnapShot.id,
            ...userSnapShot.data()
        }))
    } catch (error) {
        yield put(SignInFailure(error.message))
    }
}


export function* onGoogleSignInStartSaga() {
    yield takeLatest(userTypeAction.GOOGLE_SIGNIN_START, signInWithGoogle)
}




export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        const userRef = yield call(createUserProfileDocInDB, user)
        const userSnapShot = yield userRef.get()
        yield put(SignInSuccess({
            id: userSnapShot.id,
            ...userSnapShot.data()
        }))

    } catch (error) {
        put(SignInFailure(error))
    }
}

export function* onEmailSignInWithSaga() {
    yield takeLatest(userTypeAction.EMAIL_SIGNIN_START, signInWithEmail)
}


export function* userSaga() {
    yield all([
        call(onGoogleSignInStartSaga),
        call(onEmailSignInWithSaga)
    ])
}