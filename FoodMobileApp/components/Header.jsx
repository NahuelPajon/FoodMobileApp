import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = ({ title = "Food App Mobile", onCartPress }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text onPress={() => router.replace("/")} style={styles.titulo}>
        {title}
      </Text>
      <Link href="/cart" asChild>
        <TouchableOpacity onPress={onCartPress} style={styles.botonCarrito}>
          <Ionicons name="cart-outline" size={26} color="#fff" />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    // position: "absolute",
    backgroundColor: "#7F00FF",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    // elevation: 4,
    // top: 0,
  },
  titulo: {
    fontStyle: "italic",
    color: "#fff",
    fontSize: 30,
  },
  botonCarrito: {
    padding: 8,
  },
});

export default Header;
