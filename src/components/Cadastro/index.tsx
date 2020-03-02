import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import {
  Container,
  Input,
  Botao,
  TituloArea,
  Titulo,
  Campos,
  Seta
} from "./styles";

export default function Cadastro({ navigation }) {
  return (
    <Container>
      <TituloArea>
        <Seta onPress={() => navigation.navigate("Login")}>
          <FontAwesome name="arrow-left" size={35} />
        </Seta>
        <Titulo>Cadastro</Titulo>
        <View style={{ flex: 1 }} />
      </TituloArea>

      <Campos>
        <Input placeholder="Nome" autoCapitalize="words" autoCorrect={false} />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input placeholder="Senha" secureTextEntry={true} />
        <Input placeholder="Confirme a senha" secureTextEntry={true} />
        <Input placeholder="Telefone" keyboardType="number-pad" />
      </Campos>

      <Botao>
        <Text>Cadastrar</Text>
      </Botao>
    </Container>
  );
}
