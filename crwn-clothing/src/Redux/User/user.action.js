import { userTypeAction } from './user.type.action'

export const setCurrentUser = (user) => ({
    type: userTypeAction.SET_CURRENT_USER,
    payload: user
})

