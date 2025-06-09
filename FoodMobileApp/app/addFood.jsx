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

const API_URL =
  Platform.OS === "web"
    ? "http://localhost:3000/FOODS" //para verlo desde la web
    : "http://192.168.1.52:3000/FOODS"; //para verlo desde el celular

export default function addFood() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const idParaAsignar = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const ultimoId = Math.max(...data.map((item) => Number(item.id)));
    return ultimoId + 1;
  };

  const agregarComida = async () => {
    const nuevaComida = {
      id: await idParaAsignar(),
      name,
      details: description,
      price: parseFloat(price),
      stock: parseInt(stock),
    };
    if (
      !nuevaComida.name ||
      !nuevaComida.details ||
      !nuevaComida.price ||
      !nuevaComida.stock
    ) {
      Alert.alert("Por favor, completa todos los campos.");
      return;
    }
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaComida),
      });
      if (response.ok) {
        Alert.alert("¡Comida agregada!");
        // Limpiar los campos después de agregar la comida
        setName("");
        setDescription("");
        setPrice("");
        setStock("");
      } else {
        Alert.alert("Error al agregar comida.");
      }
    } catch (error) {
      console.error("Error al agregar comida:", error);
      Alert.alert("Error al agregar comida.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agregar Comida</Text>
      <Text style={styles.text}>
        Aqui puedes agregar comidas para publicar y vender
      </Text>
      <Text style={styles.text}>Nombre: </Text>
      <TextInput
        style={styles.input}
        keyboardType="text"
        textContentType="text"
        value={name}
        onChangeText={setName}
        placeholder="Ej.: Pizza"
      />
      <Text style={styles.text}>Descripción: </Text>
      <TextInput
        style={styles.inputDescription}
        keyboardType="text"
        textContentType="text"
        value={description}
        onChangeText={setDescription}
        multiline
        placeholder="Esta comida ..."
      />
      <Text style={styles.text}>Precio: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        textContentType="decimal"
        value={price}
        onChangeText={setPrice}
        placeholder="Ej.: 10.99"
      />
      <Text style={styles.text}>Stock: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        textContentType="number"
        placeholder="Ej.: 100"
        value={stock}
        onChangeText={setStock}
      />
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
    width: "80%",
    height: 70,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 50, // Centrar verticalmente el texto con respecto al botón
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    width: "85%",
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
  inputDescription: {
    height: 80,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
};
