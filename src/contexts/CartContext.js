import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  //   useEffect(() => {
  //     setcartItems(localStorage.getItem("cart"));
  //   }, [JSON.parse(localStorage.getItem("cart"))]);

  const [total, setTotal] = useState(localStorage.getItem("total"));

  const addData = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    var bool = false;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].name == item.name) {
        cart[i].q += 1;
        bool = true;
      }
    }
    if (!bool) {
      cart.push({
        name: item.name,
        url: item.url,
        price: item.price,
        date: item.date,
        q: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setcartItems(cart);
    upDateTotal(item.price);
  };

  const upDateTotal = (price) => {
    setTotal((prev) => {
      var new_total = parseInt(prev, 10) + parseInt(price, 10);
      localStorage.setItem("total", new_total);
      return new_total;
    });
  };

  const change_q = (name, new_q) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    var deltaTotal;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].name == name) {
        deltaTotal = (new_q - cart[i].q) * cart[i].price;
        cart[i].q = new_q;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setcartItems(cart);
    upDateTotal(deltaTotal);
  };

  const RemoveItem = (name, price, q) => {
    var new_cart = cartItems.filter((item) => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(new_cart));
    setcartItems(new_cart);
    upDateTotal(-1 * price * q);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addData,
        total,
        setcartItems,
        setTotal,
        upDateTotal,
        RemoveItem,
        change_q,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartItems = () => {
  return useContext(CartContext);
};
