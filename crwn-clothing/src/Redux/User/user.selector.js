import { createSelector } from 'reselect';

const selectCart = state => state.user

export const selectCurrentUser = createSelector(
    [selectCart],
    user => user.currentUser
);
