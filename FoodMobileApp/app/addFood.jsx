import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function addFood({ navigation }) {
  return (
    <View>
      <Text>Agregar Comida</Text>
      <Text>Selecciona una comida para agregar</Text>
      <Text>Aqui puedes agregar comidas para publicar y vender</Text>
      <Text>Nombre: </Text>
      <TextInput type="text" placeholder="Ej.: Pizza" />
      <Text>Descripción: </Text>
      <TextInput type="text" placeholder="Esta comida ..." />
      <Text>Precio: </Text>
      <TextInput type="number" placeholder="Ej.: 10.99" />
      <Text>Stock: </Text>
      <TextInput type="number" placeholder="Ej.: 100" />
      <TouchableOpacity title="Agregar" onPress={() => navigation.navigate(index)}>
        Agregar
      </TouchableOpacity>
    </View>
  );
}

const styles = {};
