import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  //   useEffect(() => {
  //     setcartItems(localStorage.getItem("cart"));
  //   }, [JSON.parse(localStorage.getItem("cart"))]);

  const [total, setTotal] = useState(0);

  const addData = (newItem) => {
    // console.log(newItem);
    setcartItems((prev) => {
      return [...prev, newItem];
    });
    setTotal(total + newItem.price);
  };

  return (
    <CartContext.Provider value={{ cartItems, addData, total,setcartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartItems = () => {
  return useContext(CartContext);
};
