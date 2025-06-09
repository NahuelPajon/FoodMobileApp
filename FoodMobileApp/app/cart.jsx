import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { CartList } from "../components/CartList";
import CartFooter from "../components/CartFooter";

export default function cart() {
  return (
    <>
      <CartList />
      <CartFooter />
    </>
  );
}
