import React, { useState, useEffect } from "react";
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
  const [user, setUser] = useState({
    nome: "",
    email: "",
    senha: "",
    senha_conf: "",
    tel: ""
  });
  const [ready, setReady] = useState(true);

  function handleState() {}

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
        <Input
          placeholder="Nome"
          autoCapitalize="words"
          autoCorrect={false}
          value={user.nome}
          onChange={v => setUser({ ...user, nome: v })}
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={user.email}
          onChange={v => setUser({ ...user, email: v })}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={user.senha}
          onChange={v => setUser({ ...user, senha: v })}
        />
        <Input
          placeholder="Confirme a senha"
          secureTextEntry={true}
          value={user.senha_conf}
          onChange={v => setUser({ ...user, senha_conf: v })}
        />
        <Input
          placeholder="Telefone"
          keyboardType="number-pad"
          value={user.tel}
          onChange={v => setUser({ ...user, tel: v })}
        />
      </Campos>

      <Botao>
        <Text>Cadastrar</Text>
      </Botao>
    </Container>
  );
}
