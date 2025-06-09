import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const MenuItem = ({ nombre, descripcion, precio, stock }) => {
  const [agregados, setAgregados] = useState(0);

  const agregarAlCarrito = () => {
    if (agregados < stock) {
      setAgregados(agregados + 1);
    } else {
      Alert.alert("Stock insuficiente", "Ya agregaste el máximo disponible.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>

      <View style={styles.info}>
        <Text style={styles.precio}>${precio}</Text>
        <Text style={styles.stock}>Stock: {stock}</Text>
      </View>

      <TouchableOpacity onPress={agregarAlCarrito} style={styles.btn}>
        <Text style={styles.btnText}>Agregar al carrito</Text>
      </TouchableOpacity>

      {agregados > 0 && (
        <Text style={styles.agregado}>Agregado: {agregados}</Text>
      )}
    </View>
  );
};

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
  },
  descripcion: {
    fontSize: 14,
    color: "#666",
    marginVertical: 6,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  precio: {
    fontSize: 16,
    color: "#27ae60",
  },
  stock: {
    fontSize: 14,
    color: "#888",
  },
  btn: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  agregado: {
    marginTop: 8,
    textAlign: "center",
    color: "#27ae60",
    fontWeight: "600",
  },
});

export default MenuItem;
