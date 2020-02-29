import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Input, ViewInput, Botao, Texto } from "./styles";

export default function Login({ navigation }) {
  return (
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
        />
      </ViewInput>

      <ViewInput>
        <MaterialIcons name="lock" size={25} style={{ position: "absolute" }} />

        <Input placeholder="Senha" secureTextEntry={true} />
      </ViewInput>

      <Botao onPress={() => ""}>
        <Texto>Entrar</Texto>
      </Botao>

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Texto>Cadastro</Texto>
      </TouchableOpacity>
    </Container>
  );
}
