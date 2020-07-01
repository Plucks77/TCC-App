import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AsyncStorage, Platform } from "react-native";
import LottieView from "lottie-react-native";

import { palette } from "./styles/global";

import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Locais from "./components/Locais";
import Cidades from "./components/Cidades";
import Categorias from "./components/Categorias";
import Pacote from "./components/Pacote";
import Perfil from "./components/Perfil";
import Configuracoes from "./components/Configuracoes";
import EsqueciSenha from "./components/EsqueciSenha";
import Idiomas from "./components/Idiomas";
import PerfilEditar from "./components/PerfilEditar";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      <Stack.Navigator headerMode="none" initialRouteName={user_logado ? "Main" : "Login"}>
        <Stack.Screen name="Login" component={LoginStack} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Main" component={BottomTab} options={{ gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <LottieView source={require("../assets/loading.json")} autoPlay loop />
  );
}

function PrincipalStack() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: palette.secundary,
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="Cidades"
        component={Cidades}
        options={{
          title: "Escolha uma cidade",
        }}
      />
      <Stack.Screen
        name="Locais"
        component={Locais}
        options={{
          title: "Escolha um local",
        }}
      />
      <Stack.Screen
        name="Categorias"
        component={Categorias}
        options={{
          title: "Visconde de Mauá",
        }}
      />
      <Stack.Screen
        name="Pacote"
        component={Pacote}
        options={{
          title: "Pacote",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 15 }}>
              <Feather
                name={Platform.OS === "ios" ? "share" : "share-2"}
                size={25}
                color={palette.secundary}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ConfiguracaoStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: palette.secundary,
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{ title: "Configurações" }}
      />
      <Stack.Screen name="Idiomas" component={Idiomas} />
    </Stack.Navigator>
  );
}

function PerfilStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: palette.secundary,
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen
        name="PerfilEditar"
        component={PerfilEditar}
        options={{ title: "Editar perfil" }}
      />
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: palette.secundary,
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Esqueci minha senha" component={EsqueciSenha} />
    </Stack.Navigator>
  );
}

function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: palette.secundary,
        keyboardHidesTabBar: true,
        showLabel: false,
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
        component={PerfilStack}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={ConfiguracaoStack}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="cog" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
