# FoodMobileApp

FoodMobileApp es una aplicación móvil para gestionar pedidos de comida, desarrollada con React y orientada a dispositivos móviles. El proyecto incluye funcionalidades de menú, carrito de compras y gestión de pedidos, con un backend simulado mediante un archivo JSON.

## Características principales
- Visualización de menú de comidas
- Agregar y quitar productos al carrito
- Visualización y edición del carrito
- Simulación de backend con `db.json`
- Diseño responsivo y moderno

## Estructura del proyecto
```
FoodMobileApp/
├── app.json
├── eslint.config.js
├── package.json
├── README.md
├── app/
│   ├── _layout.jsx
│   ├── addFood.jsx
│   ├── cart.jsx
│   └── index.jsx
├── assets/
│   ├── fonts/
│   └── images/
├── Backend/
│   └── db.json
├── components/
│   ├── CartFooter.jsx
│   ├── CartItem.jsx
│   ├── CartList.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── MenuItem.jsx
│   └── MenuList.jsx
├── context/
│   └── CartContext.jsx
├── design/
│   └── design.jpeg
```

## Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/NahuelPajon/FoodMobileApp.git
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Ejecuta la aplicación:
   ```sh
   npx expo start --tunnel
   ```

4. Para levantar el backend simulado con json-server, ejecuta en otra terminal:
   ```sh
   npx json-server --watch Backend/db.json --port 3001
   ```

## Uso
- Navega por el menú y agrega productos al carrito.
- Accede al carrito para ver, modificar o eliminar productos.
- El backend simulado permite pruebas locales sin necesidad de servidor externo.

## Tecnologías utilizadas
- React
- JavaScript
- CSS
- JSON (para backend simulado con json-server)
