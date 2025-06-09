import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { nombre, cantidad, precio, id } = item;
  const { incrementQuantity, decrementQuantity } = useCart();

  if (cantidad <= 0) return null;
  const total = cantidad * precio;

  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>{nombre}</Text>
      <View style={styles.info}>
        <Text style={styles.cantidad}>x{cantidad}</Text>
        <Text style={styles.precio}>${total.toFixed(2)}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => decrementQuantity(id)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => incrementQuantity(id)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#2B0057",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  cantidad: {
    fontSize: 16,
  },
  precio: {
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#B163FF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
