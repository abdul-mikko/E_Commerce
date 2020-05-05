import CartType from "./Cart_types";

const ToggleCart = () => ({
  type: CartType.CART_TOGGLE,
});

export const AddItem = (item) => ({
  type: CartType.ADD_ITEMS,
  payload: item,
});
export const RemoveItemById = (item) => ({
  type: CartType.REMOVE_ITEMS_BY_ID,
  payload: item,
});

export default ToggleCart;
