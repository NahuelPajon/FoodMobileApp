import { FlatList, Text } from "react-native";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

export function CartList() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <Text>El carrito está vacío.</Text>;
  }

  return (
    <FlatList
      data={cart}
      keyExtractor={(item) => item.id}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CartItem item={item} />}
    />
  );
}
