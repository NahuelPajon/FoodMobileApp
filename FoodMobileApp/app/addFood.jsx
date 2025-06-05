import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default function addFood({ navigation }) {
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
        onPress={() => navigation.navigate(index)}
      >
        <Text style={styles.btnText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const agregarComida = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL =
    Platform.OS === "web"
      ? "http://localhost:3000/FOODS" //para verlo desde la web
      : "http://10.13.22.45:3000/FOODS"; //para verlo desde el celular

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((menu) => {
        setData(menu);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar menú:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;
  if (data.length === 0)
    return <Text style={styles.empty}>No hay comidas disponibles.</Text>;
};

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
