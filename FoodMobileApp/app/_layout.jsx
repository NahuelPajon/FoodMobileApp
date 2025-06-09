import { Stack } from "expo-router";
import * as React from "react";
import Header from "../components/Header";
import { CartProvider } from "../context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </CartProvider>
  );
}
