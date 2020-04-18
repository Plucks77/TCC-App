import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/components/Login";
import Cadastro from "./src/components/Cadastro";
import Locais from "./src/components/Locais";
import Cidades from "./src/components/Cidades";
import Pacotes from "./src/components/Pacotes";
import Pacote from "./src/components/Pacote";
import { AsyncStorage } from "react-native";
import LottieView from "lottie-react-native";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [ready, setReady] = useState(false);
  const [user_logado, setLogado] = useState(null);

  //verificar se está logado
  useEffect(() => {
    async function logado() {
      const tokem = await AsyncStorage.getItem("token");
      const user_id = await AsyncStorage.getItem("user_id");

      if (tokem && user_id) {
        return true;
      } else {
        return false;
      }
    }
    logado()
      .then((l) => {
        setLogado(l);
        setReady(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return ready ? (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={user_logado === false ? "Login" : "Principal"}
      >
        <Drawer.Screen
          name="Principal"
          component={PrincipalStack}
          options={{ drawerLabel: "Selecionar cidade" }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginStack}
          options={{ gestureEnabled: false, drawerLabel: "Sair" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <LottieView source={require("./assets/loading.json")} autoPlay loop />
  );
}

function PrincipalStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Cidades" component={Cidades} />
      <Stack.Screen name="Locais" component={Locais} />
      <Stack.Screen name="Pacotes" component={Pacotes} />
      <Stack.Screen name="Pacote" component={Pacote} />
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
