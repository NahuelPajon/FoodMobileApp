import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Footer() {
  return (
      <View style={styles.container}>
        <Link href="/addFood" asChild>
            <TouchableOpacity style={styles.botonAgregarComida}>
                <Text>Agregar comida</Text>
            </TouchableOpacity>
        </Link>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    position: 'absolute',
    bottom: 0,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#6200EE',
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  botonAgregarComida: {
    borderRadius: 8,
  },
});