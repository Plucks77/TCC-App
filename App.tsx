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
import { AsyncStorage, Text, View } from "react-native";
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
      <Stack.Navigator
        initialRouteName={!user_logado ? "Login" : "Cidades"}
        headerMode="none"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen
          name="Cidades"
          component={drawermenu}
          options={{ gestureEnabled: false }} //para não conseguir voltar pra tela de login dando um swipe da esquerda pra direita
        />
        <Stack.Screen name="Locais" component={Locais} />
        <Stack.Screen name="Pacotes" component={Pacotes} />
        <Stack.Screen name="Pacote" component={Pacote} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <LottieView source={require("./assets/loading.json")} autoPlay loop />
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>NÃO READY</Text>
    // </View>
  );
}

function drawermenu() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "pink",
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginBottom: 10 },
      }}
    >
      <Drawer.Screen name="Cidades" component={Cidades} />
      <Drawer.Screen name="Sair" component={logout} />
    </Drawer.Navigator>
  );
}

function logout({ navigation }) {
  navigation.navigate("Login");
  return null;
}
