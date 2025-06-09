import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      // Si el producto ya está en el carrito, suma 1 a la cantidad
      const found = prev.find((i) => i.id === item.id);
      if (found) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      // Si no está, lo agrega con cantidad 1
      return [...prev, { ...item, cantidad: 1 }];
    });
  };

  const incrementQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.cantidad !== item.stock ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, incrementQuantity, decrementQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
