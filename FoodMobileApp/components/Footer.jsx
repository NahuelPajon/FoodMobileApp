import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Link href="/AddFood" asChild>
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
    backgroundColor: "#7F00FF",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 65,
  },
  botonAgregarComida: {
    borderRadius: 8,
    backgroundColor: "#B163FF",
    height: "70%",
    width: "90%",
  },
});
