import React, { useState, useEffect } from "react";

import api from "../../api";

import Botao from "../Botao";

import {
  Container,
  Titulo,
  ViewInfos,
  Texto,
  Input,
  BotaoArea,
} from "./styles";
import { AsyncStorage } from "react-native";
import LottieView from "lottie-react-native";

export default function Perfil({ navigation }) {
  const [user, setUser] = useState({ username: "", email: "", tel: "" });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function getData() {
      const tokem = await AsyncStorage.getItem("token");
      const user_id = await AsyncStorage.getItem("user_id");
      const config = {
        headers: { Authorization: `Bearer ${tokem}` },
      };
      const response = await api.get(`/user/${user_id}`, config);
      const { username, email, tel } = response.data;
      setUser({ username, email, tel });
      setReady(true);
    }
    getData();
  }, []);

  return ready ? (
    <Container>
      <Titulo>Perfil</Titulo>
      <ViewInfos>
        <Texto>Nome:</Texto>
        <Input>{user.username}</Input>
        <Texto>Telefone:</Texto>
        <Input>{user.tel}</Input>
        <Texto>E-mail:</Texto>
        <Input editable={false}>{user.email}</Input>

        <BotaoArea>
          <Botao texto="Salvar" props={null} />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Trocar E-mail" props={null} />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Trocar Senha" props={null} />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Sair" props={() => navigation.navigate("Login")} />
        </BotaoArea>
      </ViewInfos>
    </Container>
  ) : (
    <LottieView
      source={require("../../../assets/loading.json")}
      autoPlay
      loop
    />
  );
}
