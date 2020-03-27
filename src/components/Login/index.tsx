import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Alert
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import api from "../../api";

import LottieView from "lottie-react-native";

import { Container, Input, ViewInput, Botao, Texto } from "./styles";

export default function Login({ navigation }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [ready, setReady] = useState(true);

  async function login() {
    if (user.email !== "" && user.password !== "") {
      setReady(false);
      try {
        const { email, password } = user;
        await api
          .post("/login", { email, password })
          .then(async response => {
            await AsyncStorage.setItem("token", response.data.token.toString());
            await AsyncStorage.setItem(
              "user_id",
              response.data.user_id.toString()
            );
            navigation.navigate("Principal");
          })
          .catch(error => {
            const erro = error.response.data[0].field;
            if (erro === "password") {
              console.log("Senha incorreta");
            }
            if (erro === "email") {
              console.log("Email incorreto");
            }
          });
      } catch (e) {
        console.log(e);
      }
      setReady(true);
    } else {
      Alert.alert("Preencha o email e senha!");
    }
  }

  return ready ? (
    <Container>
      <ViewInput>
        <MaterialIcons
          name="email"
          size={25}
          style={{ position: "absolute" }}
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={user.email}
          onChangeText={d => setUser({ ...user, email: d })}
        />
      </ViewInput>

      <ViewInput>
        <MaterialIcons name="lock" size={25} style={{ position: "absolute" }} />

        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={user.password}
          onChangeText={d => setUser({ ...user, password: d })}
        />
      </ViewInput>

      <Botao onPress={() => login()}>
        <Texto>Entrar</Texto>
      </Botao>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Texto style={{ fontWeight: "normal" }}>Cadastro</Texto>
      </TouchableOpacity>
    </Container>
  ) : (
    <LottieView
      source={require("../../../assets/loading.json")}
      autoPlay
      loop
    />
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>Carregando...</Text>
    // </View>
  );
}
