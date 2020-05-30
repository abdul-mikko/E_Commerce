import userTypeAction from './user.type.action'


export const googleSignInStart = () => ({
    type: userTypeAction.GOOGLE_SIGNIN_START
})
export const emailSignInStart = (emailAndPassword) => ({
    type: userTypeAction.EMAIL_SIGNIN_START,
    payload: emailAndPassword
})
export const SignInSuccess = (user) => ({
    type: userTypeAction.SIGNIN_SUCCESS,
    payload: user
})
export const SignInFailure = (error) => ({
    type: userTypeAction.SIGNIN_FAILURE,
    payload: error
})
