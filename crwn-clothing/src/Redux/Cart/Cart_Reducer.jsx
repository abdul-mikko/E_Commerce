import CartType from "./Cart_types";
import { addItem, decreaseItemfromCart } from "./Cart.Util";

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
    case CartType.ADD_ITEMS_TO_CART:
      return {
        ...state,
        cartitem: addItem(state.cartitem, action.payload),
      };
    case CartType.DECREASE_ITEMS_BY_ID:
      return {
        ...state,
        cartitem: decreaseItemfromCart(state.cartitem, action.payload),
      };

    case CartType.REMOVE_ITEMS_BY_ID:
      return {
        ...state,
        cartitem: state.cartitem.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default CartReducer;
