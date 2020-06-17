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

export default function PerfilEditar({ navigation, route }) {
  const user = route.params.user;

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
        <Input>{user.username}</Input>
        <Texto>Telefone:</Texto>
        <Input>{user.tel}</Input>
      </ViewInfos>

      <BotaoArea>
        <Botao texto="Salvar" props={() => {}} />
      </BotaoArea>
    </Container>
  );
}
