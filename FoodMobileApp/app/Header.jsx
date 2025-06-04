import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title = 'Food App Mobile', onCartPress }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <Text style={styles.titulo}>{title}</Text>
            <TouchableOpacity onPress={onCartPress} style={styles.botonCarrito}>
                <Ionicons name="cart-outline" size={26} color="#fff" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#6200EE',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
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
