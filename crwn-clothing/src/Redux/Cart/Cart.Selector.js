import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartitem
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartitem =>
        cartitem.reduce(
            (accumalatedQuantity, cartitem) =>
                accumalatedQuantity + cartitem.quantity,
            0
        )
);
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartitem =>
        cartitem.reduce(
            (accumalatedQuantity, cartitem) =>
                accumalatedQuantity + cartitem.quantity * cartitem.price,
            0
        )
);