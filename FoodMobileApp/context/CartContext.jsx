import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // leer carrito al iniciar
  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await AsyncStorage.getItem("cart");
        if (data) {
          setCart(JSON.parse(data));
        }
      } catch (error) {
        console.error("Error al cargar carrito:", error);
      }
    };
    loadCart();
  }, []);

  // guardar carrito cada vez que cambia
  useEffect(() => {
    const saveCart = async () => {
      try {
        await AsyncStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Error al guardar carrito:", error);
      }
    };
    saveCart();
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...prev, { ...item, cantidad: 1 }];
    });
  };

  const incrementQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.cantidad !== item.stock
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
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
