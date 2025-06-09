import { Stack } from "expo-router";
import * as React from "react";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    // <NavigationContainer>
    // <Stack.Navigator initialRouteName="Home">
    //   <Stack.Screen name="Home" component={Index} />
    //   <Stack.Screen name="AddFood" component={AddFood} />
    // </Stack.Navigator>
    // </NavigationContainer>
    <>
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
