import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";
import MenuItem from "./MenuItem";
import { Platform } from "react-native";

const MenuList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL =
    Platform.OS === "web"
      ? "http://localhost:3000/FOODS" //para verlo desde la web
      : "http://192.168.1.52:3000/FOODS"; //para verlo desde el celular

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

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MenuItem
          nombre={item.name}
          descripcion={item.details}
          precio={item.price}
          stock={item.stock}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  loader: { marginTop: 32 },
  empty: { marginTop: 32, textAlign: "center", fontSize: 18, color: "#666" },
});

export default MenuList;
