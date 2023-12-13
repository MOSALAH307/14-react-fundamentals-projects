import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import getTotals from "./utiles";

const CartContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(),
};

const url = "https://www.course-api.com/react-useReducer-cart-project";

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY", payload: { cart } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: { id } });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CartContext);
};
