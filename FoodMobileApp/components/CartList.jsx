import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useCart } from "../context/CartContext";
import { Link, useRouter } from "expo-router";
import CartItem from "./CartItem";

export function CartList() {
  const { cart } = useCart();
  const router = useRouter();
  const irHomePage = () => {router.replace("/")}

  if (cart.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.nombre}>El carrito está vacío.</Text>
        <TouchableOpacity onPress={irHomePage} style={styles.btn}>
        <Text style={styles.btnText}>Ir a la Tienda</Text>
        </TouchableOpacity>
      </View>

    );
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  nombre: {
    marginTop: 4,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#2B0057",
  },
  btn: {
    marginTop: 4,
    backgroundColor: "#B163FF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  agregado: {
    
    color: "#27ae60",
    fontWeight: "600",
  },
});
