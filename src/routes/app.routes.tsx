import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { usePurchase } from "../contexts/purchase";

import Cidades from "../components/Cidades";
import Locais from "../components/Locais";
import Categorias from "../components/Categorias";
import Pacote from "../components/Pacote";
import Perfil from "../components/Perfil";
import Configuracoes from "../components/Configuracoes";
import Idiomas from "../components/Idiomas";
import PerfilEditar from "../components/PerfilEditar";
import ListaFavoritos from "../components/ListaFavoritos";
import Compras from "../components/Compras";

import { palette } from "../styles/global";

const AppStack = createStackNavigator();
const AppBottomTab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="Main" component={BottomTab} />
  </AppStack.Navigator>
);

function PrincipalStack() {
  return (
    <AppStack.Navigator
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
      <AppStack.Screen
        name="Cidades"
        component={Cidades}
        options={{
          title: "Escolha uma cidade",
        }}
      />
      <AppStack.Screen
        name="Locais"
        component={Locais}
        options={{
          title: "Escolha um local",
        }}
      />
      <AppStack.Screen
        name="Categorias"
        component={Categorias}
        options={{
          title: "Visconde de Mauá",
        }}
      />
      <AppStack.Screen
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
    </AppStack.Navigator>
  );
}

function PerfilStack() {
  return (
    <AppStack.Navigator
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
      <AppStack.Screen name="Perfil" component={Perfil} />
      <AppStack.Screen
        name="PerfilEditar"
        component={PerfilEditar}
        options={{ title: "Editar perfil" }}
      />
    </AppStack.Navigator>
  );
}

function ConfiguracaoStack() {
  return (
    <AppStack.Navigator
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
      <AppStack.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{ title: "Configurações" }}
      />
      <AppStack.Screen name="Idiomas" component={Idiomas} />
    </AppStack.Navigator>
  );
}

function FavotieStack() {
  return (
    <AppStack.Navigator
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
      <AppStack.Screen
        name="Favoritos"
        component={ListaFavoritos}
        options={{ title: "Favoritos" }}
      />
      <AppStack.Screen
        name="PacoteFavorito"
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
    </AppStack.Navigator>
  );
}

function PurchasedStack() {
  return (
    <AppStack.Navigator
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
      <AppStack.Screen name="Compras" component={Compras} options={{ title: "Meus pacotes" }} />
    </AppStack.Navigator>
  );
}

function BottomTab() {
  const { hasPurchases } = usePurchase();
  return !hasPurchases ? (
    <AppBottomTab.Navigator
      tabBarOptions={{
        activeTintColor: palette.secundary,
        keyboardHidesTabBar: true,
        showLabel: false,
      }}
    >
      <AppBottomTab.Screen
        name="Viagens"
        component={PrincipalStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="suitcase-rolling" size={size} color={color} />
          ),
        }}
      />

      <AppBottomTab.Screen
        name="Favoritos"
        component={FavotieStack}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="heart" size={size} color={color} />,
        }}
      />
      <AppBottomTab.Screen
        name="Perfil"
        component={PerfilStack}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} />,
        }}
      />
      <AppBottomTab.Screen
        name="Configurações"
        component={ConfiguracaoStack}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="cog" size={size} color={color} />,
        }}
      />
    </AppBottomTab.Navigator>
  ) : (
    <AppBottomTab.Navigator
      tabBarOptions={{
        activeTintColor: palette.secundary,
        keyboardHidesTabBar: true,
        showLabel: false,
      }}
    >
      <AppBottomTab.Screen
        name="Compras"
        component={PurchasedStack}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color} />,
        }}
      />

      <AppBottomTab.Screen
        name="Viagens"
        component={PrincipalStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="suitcase-rolling" size={size} color={color} />
          ),
        }}
      />
      <AppBottomTab.Screen
        name="Favoritos"
        component={FavotieStack}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="heart" size={size} color={color} />,
        }}
      />
      <AppBottomTab.Screen
        name="Perfil"
        component={PerfilStack}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} />,
        }}
      />
      <AppBottomTab.Screen
        name="Configurações"
        component={ConfiguracaoStack}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name="cog" size={size} color={color} />,
        }}
      />
    </AppBottomTab.Navigator>
  );
}

export default AppRoutes;
