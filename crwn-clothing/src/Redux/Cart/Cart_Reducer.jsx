import CartType from "./Cart_types";
import { addItem } from "./Cart.Util";

const CART_INITAL_VALUE = {
  hidden: true,
  cartitem: [],
};

const CartReducer = (state = CART_INITAL_VALUE, action) => {
  switch (action.type) {
    case CartType.CART_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartType.ADD_ITEMS:
      return {
        ...state,
        cartitem: addItem(state.cartitem, action.payload),
      };

    default:
      return state;
  }
};

export default CartReducer;
