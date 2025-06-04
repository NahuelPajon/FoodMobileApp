import React from "react";
import { View, Text, Button } from "react-native";

export default function addFood({ navigation }) {
  return (
    <View>
      <Text>Agregar Comida</Text>
      <Text>Selecciona una comida para agregar</Text>
      <Text>Aqui puedes agregar comidas para publicar y vender</Text>
      <Text>Nombre: </Text>
      <Input type="text" placeholder="Ej.: Pizza" />
      <Text>Descripción: </Text>
      <Input type="text" placeholder="Esta comida ..." />
      <Text>Precio: </Text>
      <Input type="number" placeholder="Ej.: 10.99" />
      <Text>Stock: </Text>
      <Input type="number" placeholder="Ej.: 100" />
      <Button title="Agregar" onPress={() => navigation.navigate(index)}>
        Agregar
      </Button>
    </View>
  );
}

const styles = {};
