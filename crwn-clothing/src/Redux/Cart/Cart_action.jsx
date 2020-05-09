import CartType from "./Cart_types";

const ToggleCart = () => ({
  type: CartType.CART_TOGGLE,
});

export const AddItemToCart = (item) => ({
  type: CartType.ADD_ITEMS_TO_CART,
  payload: item,
});
export const DecreaseItemByID = (item) => ({
  type: CartType.DECREASE_ITEMS_BY_ID,
  payload: item,
});
export const RemoveItemById = (item) => ({
  type: CartType.REMOVE_ITEMS_BY_ID,
  payload: item,
});

export default ToggleCart;
