import CartType from "./Cart_types";

const ToggleCart = () => ({
  type: CartType.CART_TOGGLE,
});

export const AddItem = (item) => ({
  type: CartType.ADD_ITEMS,
  payload: item,
});

export default ToggleCart;
