import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useAuth } from "../../contexts/auth";
import api from "../../api";
import Botao from "../Botao";

import { palette } from "../../styles/global";
import { Container, ViewInfos, Texto, Input, BotoesContainer, BotaoArea, Icone } from "./styles";

export default function Perfil({ navigation }) {
  const { signOut, user: contextUser } = useAuth();

  const [user, setUser] = useState({ id: "", username: "", email: "", tel: "" });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/user/${contextUser}`);
      const { id, username, email, tel } = response.data;
      setUser({ id, username, email, tel });
      setReady(true);
    }
    getData();
  }, []);

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
          />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Trocar e-mail" props={null} />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Trocar senha" props={null} />
        </BotaoArea>

        <BotaoArea>
          <Botao texto="Sair" props={() => signOut()} />
        </BotaoArea>
      </BotoesContainer>
    </Container>
  ) : (
    <LottieView source={require("../../../assets/loading.json")} autoPlay loop />
  );
}
