import React, { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";

import api from "../../api";

import global from "../../styles/global";
import Botao from "../Botao";

import {
  Container,
  TituloContainer,
  Seta,
  Titulo,
  ViewInfos,
  Texto,
  Input,
  BotaoArea,
} from "./styles";

interface User {
  id: string;
  username: string;
  tel: string;
}

export default function PerfilEditar({ navigation, route }) {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState("");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => setToken(token));
    setUser(route.params.user);
  }, []);

  async function handleSalvar() {
    api
      .put(`edit/${user.id}`, user, config)
      .then((res) => {
        if (res.status === 200) {
          navigation.navigate("Perfil");
        }
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <Container>
      <TituloContainer>
        <Seta onPress={() => navigation.navigate("Perfil")}>
          <FontAwesome name="arrow-left" size={35} color={global.text} />
        </Seta>
        <Titulo>Perfil</Titulo>
      </TituloContainer>

      <ViewInfos>
        <Texto>Nome:</Texto>
        <Input
          autoCapitalize="words"
          value={user?.username}
          onChangeText={(t) => setUser({ ...user, username: t })}
        />
        <Texto>Telefone:</Texto>
        <Input
          keyboardType="phone-pad"
          value={user?.tel}
          onChangeText={(t) => setUser({ ...user, tel: t })}
        />
      </ViewInfos>

      <BotaoArea>
        <Botao texto="Salvar" props={() => handleSalvar()} />
      </BotaoArea>
    </Container>
  );
}
