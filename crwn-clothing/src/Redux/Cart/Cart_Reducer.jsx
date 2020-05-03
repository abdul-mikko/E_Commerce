import CartType from "./Cart_types";

const CART_INITAL_VALUE = {
  hidden: true,
};

const CartReducer = (state = CART_INITAL_VALUE, action) => {
  switch (action.type) {
    case CartType.CART_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default CartReducer;
