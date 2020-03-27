import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/components/Login";
import Cadastro from "./src/components/Cadastro";
import Principal from "./src/components/Principal";
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
      const tokem = await AsyncStorage.getItem("tokenn");
      const user_id = await AsyncStorage.getItem("user_id");

      if (tokem && user_id) {
        return true;
      } else {
        return false;
      }
    }
    logado()
      .then(l => {
        setLogado(l);
        setReady(true);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return ready ? (
    user_logado === true ? (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Principal" component={Principal} />
        </Drawer.Navigator>
      </NavigationContainer>
    ) : (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Principal" component={drawermenu} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  ) : (
    <LottieView source={require("./assets/loading.json")} autoPlay loop />
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>NÃO READY</Text>
    // </View>
  );
}

function drawermenu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Principal" component={Principal} />
    </Drawer.Navigator>
  );
}
