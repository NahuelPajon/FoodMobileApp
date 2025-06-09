import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../context/CartContext";

export default function Footer() {
  const { cart } = useCart();
  if (cart.length === 0) return null;

  let totalCart = cart.reduce((acc, item) => {
    return acc + item.precio * item.cantidad;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total: </Text>
      <Text style={styles.text}>${totalCart.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#7F00FF",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 65,
  },
});
