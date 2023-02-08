import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [cartItems, setcartItems] = useState([]);

  const addData = (newItem) => {
    // console.log(newItem);
    setcartItems((prev) => {
      return [...prev, newItem];
    });
    setTotal(total + newItem.price);
  };

  return (
    <CartContext.Provider value={{ cartItems, addData, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartItems = () => {
  return useContext(CartContext);
};
