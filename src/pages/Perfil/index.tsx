import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useAuth } from "../../contexts/auth";
import api from "../../api";
import Botao from "../../components/Botao";

import { palette } from "../../styles/global";
import { Container, ViewInfos, Texto, Input, BotoesContainer, BotaoArea, Icone } from "./styles";
import { useIsFocused } from "@react-navigation/native";

export default function Perfil({ navigation }) {
  const { signOut, user: contextUser } = useAuth();

  const [user, setUser] = useState({ id: "", username: "", email: "", tel: "" });
  const [ready, setReady] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  async function getData() {
    const response = await api.get(`/user/${contextUser}`);
    const { id, username, email, tel } = response.data;
    const newTel = "(" + tel.substring(0, 2) + ") " + tel.substring(2);
    setUser({ id, username, email, tel: newTel });
    setReady(true);
  }

  return ready ? (
    <Container>
      <Icone>
        <FontAwesome name="user-o" size={72} color={palette.secundary} />
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
            primary={true}
          />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Trocar e-mail" props={null} primary={true} />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Trocar senha" props={null} primary={true} />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Sair" props={() => signOut()} primary={true} />
        </BotaoArea>
      </BotoesContainer>
    </Container>
  ) : (
    <LottieView source={require("../../../assets/loading.json")} autoPlay loop />
  );
}