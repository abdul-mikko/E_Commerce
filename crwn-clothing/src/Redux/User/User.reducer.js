
import userTypeAction from './user.type.action'

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypeAction.SIGNIN_SUCCESS:

            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case userTypeAction.SIGNIN_FAILURE:

            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;