import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import MenuItem from './MenuItem';

const MenuList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('?') 
      .then(res => res.json())
      .then(menu => {
        setData(menu);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar menú:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;
  if (data.length === 0) return <Text style={styles.empty}>No hay comidas disponibles.</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MenuItem
          nombre={item.nombre}
          descripcion={item.descripcion}
          precio={item.precio}
          stock={item.stock}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  loader: { marginTop: 32 },
  empty: { marginTop: 32, textAlign: 'center', fontSize: 18, color: '#666' },
});

export default MenuList;
