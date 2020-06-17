import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import LottieView from "lottie-react-native";
import { FontAwesome } from "@expo/vector-icons";

import api from "../../api";
import Botao from "../Botao";
import global from "../../styles/global";
import {
  Container,
  Titulo,
  ViewInfos,
  Texto,
  Input,
  BotoesContainer,
  BotaoArea,
  Icone,
} from "./styles";

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
      {/* <Titulo>Perfil</Titulo> */}
      <Icone>
        <FontAwesome name="user-o" size={72} color={global.text} />
      </Icone>
      <ViewInfos>
        <Texto>Nome:</Texto>
        <Input>{user.username}</Input>
        <Texto>Telefone:</Texto>
        <Input>{user.tel}</Input>
        <Texto>E-mail:</Texto>
        <Input>{user.email}</Input>
      </ViewInfos>

      <BotoesContainer>
        <BotaoArea>
          <Botao
            texto="Alterar informações"
            props={() => navigation.navigate("PerfilEditar", { user })}
          />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Trocar e-mail" props={null} />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Trocar senha" props={null} />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Sair" props={() => navigation.navigate("Login")} />
        </BotaoArea>
      </BotoesContainer>
    </Container>
  ) : (
    <LottieView source={require("../../../assets/loading.json")} autoPlay loop />
  );
}
