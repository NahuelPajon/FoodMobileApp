import React from "react";
import { View, Text, Button } from "react-native";

export default function addFood({navigation}) {
  return (
    <View>
      <h1>Agregar Comida</h1>
      <p>Aqui puedes agregar comidas para publicar y vender</p>
      <p>Nombre: </p>
      <input type="text" placeholder="Ej.: Pizza" />
      <p>Descripción: </p>
      <input type="text" placeholder="Esta comida ..." />
      <p>Precio: </p>
      <input type="number" placeholder="Ej.: 10.99" />
      <p>Stock: </p>
      <input type="number" placeholder="Ej.: 100" />
      <Button title="Agregar" onPress={() => navigation.navigate(index)}>Agregar</Button>
    </View>
  );
}

const styles = {};
