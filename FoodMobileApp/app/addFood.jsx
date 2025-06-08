import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";

const [nombre, setNombre] = useState("");
const [descripcion, setDescripcion] = useState("");
const [precio, setPrecio] = useState("");
const [stock, setStock] = useState("");

const API_URL =
  Platform.OS === "web"
    ? "http://localhost:3000/FOODS" //para verlo desde la web
    : "http://10.13.22.45:3000/FOODS"; //para verlo desde el celular

const agregarComida = async () => {
  const nuevaComida = {
    nombre,
    descripcion,
    precio: parseFloat(precio),
    stock: parseInt(stock),
  };
  try {
    const response = await fetch(API_URL, {
      method: POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaComida),
    });
    if (response.ok) {
      Alert.alert("¡Comida agregada!");
    } else {
      Alert.alert("Error al agregar comida.");
    }
  } catch (error) {
    console.error("Error al agregar comida:", error);
    Alert.alert("Error al agregar comida.");
  }
};

export default function addFood() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agregar Comida</Text>
      <Text style={styles.text}>
        Aqui puedes agregar comidas para publicar y vender
      </Text>
      <Text style={styles.text}>Nombre: </Text>
      <TextInput style={styles.input} type="text" placeholder="Ej.: Pizza" />
      <Text style={styles.text}>Descripción: </Text>
      <TextInput
        style={styles.input}
        type="text"
        placeholder="Esta comida ..."
      />
      <Text style={styles.text}>Precio: </Text>
      <TextInput style={styles.input} type="number" placeholder="Ej.: 10.99" />
      <Text style={styles.text}>Stock: </Text>
      <TextInput style={styles.input} type="number" placeholder="Ej.: 100" />
      <TouchableOpacity
        style={styles.btn}
        title="Agregar"
        onPress={agregarComida}
      >
        <Text style={styles.btnText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
};
