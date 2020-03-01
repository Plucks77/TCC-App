import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import api from "../../api";
import LottieView from "lottie-react-native";
import { Container, Input, ViewInput, Botao, Texto } from "./styles";

export default function Login({ navigation }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [ready, setReady] = useState(true);
  async function login() {
    setReady(false);
    try {
      const { email, password } = user;
      const response = await api.post("/login", { email, password });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
    setReady(true);
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
        <Texto>Cadastro</Texto>
      </TouchableOpacity>
    </Container>
  ) : (
    <LottieView
      source={require("../../../assets/loading.json")}
      autoPlay
      loop
    />
  );
}
