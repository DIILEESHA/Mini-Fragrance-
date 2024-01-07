import { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || { cartItems: [] };

  const [cartState, dispatch] = useReducer(cartReducer, storedCart);

  useEffect(() => {
    // Save to local storage whenever cartState changes
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  const addToCart = (product, quantity) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, quantity },
    });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
