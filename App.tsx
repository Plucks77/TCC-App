import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/components/Login";
import Cadastro from "./src/components/Cadastro";
import Principal from "./src/components/Principal";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Principal" component={drawermenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function drawermenu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Principal" component={Principal} />
    </Drawer.Navigator>
  );
}
