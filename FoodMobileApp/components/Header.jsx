import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = ({ title = 'Food App Mobile', onCartPress }) => {
  return (

        <View style={styles.container}>
            <Text style={styles.titulo}>{title}</Text>
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
    height: 60,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#6200EE',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    top: 0,
  },
  titulo: {
    fontStyle: 'italic',
    color: '#fff',
    fontSize: 30,
    
    
  },
  botonCarrito: {
    padding: 8,
  },
});

export default Header;
