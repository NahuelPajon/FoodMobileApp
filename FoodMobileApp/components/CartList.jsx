export function CartList() {
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
}
