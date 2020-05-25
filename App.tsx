import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import Login from "./src/components/Login";
import Cadastro from "./src/components/Cadastro";
import Locais from "./src/components/Locais";
import Cidades from "./src/components/Cidades";
import Pacotes from "./src/components/Pacotes";
import Pacote from "./src/components/Pacote";
import Perfil from "./src/components/Perfil";
import Configuracoes from "./src/components/Configuracoes";
import EsqueciSenha from "./src/components/EsqueciSenha";
import { AsyncStorage } from "react-native";
import LottieView from "lottie-react-native";
import Globals from "./src/styles/global";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
        headerMode="none"
        initialRouteName={user_logado ? "Main" : "Login"}
      >
        <Stack.Screen
          name="Login"
          component={LoginStack}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTab}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
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
      <Stack.Screen name="Esqueci minha senha" component={EsqueciSenha} />
    </Stack.Navigator>
  );
}

function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: Globals.tab_menu_secundary,
        activeBackgroundColor: Globals.tab_menu,
        inactiveBackgroundColor: Globals.tab_menu,
        keyboardHidesTabBar: true,
        style: {
          borderTopWidth: 0,
          borderTopColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Viagens"
        component={PrincipalStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="suitcase-rolling" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={Configuracoes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
