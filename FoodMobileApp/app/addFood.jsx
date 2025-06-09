import {
  View,
  Text,
  TextInput,
  Alert,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const API_URL =
  Platform.OS === "web"
    ? "http://localhost:3000/FOODS"
    : "http://172.20.10.4:3000/FOODS"; // reemplazá con la IP correcta si es necesario

export default function AddFood() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const idParaAsignar = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const ultimoId = Math.max(...data.map((item) => item.id), 0);
  return ultimoId + 1;
};

  const agregarComida = async () => {
    const priceNumber = parseFloat(price);
    const stockNumber = parseInt(stock);

    if (!name || !description || isNaN(priceNumber) || isNaN(stockNumber)) {
      Alert.alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    const nuevaComida = {
      id: await idParaAsignar(),
      name,
      details: description,
      price: priceNumber,
      stock: stockNumber,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaComida),
      });

      if (response.ok) {
        Alert.alert("¡Comida agregada con éxito!");
        setName("");
        setDescription("");
        setPrice("");
        setStock("");
      } else {
        Alert.alert("Hubo un error al agregar la comida.");
      }
    } catch (error) {
      Alert.alert("Error al conectarse con el servidor.");
      console.error("Error al agregar comida:", error);
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
        keyboardType="default"
        textContentType="none"
        value={name}
        onChangeText={setName}
        placeholder="Ej.: Pizza"
      />

      <Text style={styles.text}>Descripción: </Text>
      <TextInput
        style={styles.inputDescription}
        keyboardType="default"
        textContentType="none"
        value={description}
        onChangeText={setDescription}
        multiline
        placeholder="Esta comida ..."
      />

      <Text style={styles.text}>Precio: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        textContentType="none"
        value={price}
        onChangeText={setPrice}
        placeholder="Ej.: 10.99"
      />

      <Text style={styles.text}>Stock: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        textContentType="none"
        value={stock}
        onChangeText={setStock}
        placeholder="Ej.: 100"
      />

      <TouchableOpacity style={styles.btn} onPress={agregarComida}>
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
    backgroundColor: "#B163FF",
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
    lineHeight: 50,
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
