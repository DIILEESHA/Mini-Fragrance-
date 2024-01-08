// CartContext.js
import { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((_, index) => index !== action.payload.index),
      };
    case "UPDATE_QUANTITY":
      const { index, quantity } = action.payload;
      const updatedCartItems = [...state.cartItems];
      updatedCartItems[index].quantity = quantity;
      return {
        ...state,
        cartItems: updatedCartItems,
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

  const removeFromCart = (index) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { index },
    });
  };

  const updateQuantity = (index, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { index, quantity },
    });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
