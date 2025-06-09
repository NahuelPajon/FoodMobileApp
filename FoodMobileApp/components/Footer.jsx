import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Link href="/addFood" asChild>
        <TouchableOpacity style={styles.botonAgregarComida}>
          <Text style={styles.text}>Nueva comida</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    // position: 'absolute',
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#6200EE",
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 65,
  },
  botonAgregarComida: {
    borderRadius: 8,
    backgroundColor: "#ffe8ef",
    height: "70%",
    width: "90%",
  },
});
