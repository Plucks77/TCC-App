import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";

import global from "../../styles/global";

import {
  Container,
  Titulo,
  TituloContainer,
  Seta,
  OpcoesContainer,
  Opcao,
  Icone,
  Texto,
} from "./styles";

export default function Idiomas({ navigation }) {
  return (
    <Container>
      <TituloContainer>
        <Seta onPress={() => navigation.navigate("Configuracoes")}>
          <FontAwesome name="arrow-left" size={30} color={global.text} />
        </Seta>
        <Titulo>Idiomas</Titulo>
      </TituloContainer>

      <OpcoesContainer>
        <Opcao onPress={() => navigation.navigate("Idiomas")}>
          <Icone>
            <Image source={require("../../../assets/bandeiras/brasil.png")} />
          </Icone>
          <Texto>Português</Texto>
        </Opcao>

        <Opcao onPress={() => {}}>
          <Icone>
            <Image source={require("../../../assets/bandeiras/usa.png")} />
          </Icone>
          <Texto>Inglês</Texto>
        </Opcao>

        <Opcao>
          <Icone>
            <Image source={require("../../../assets/bandeiras/espanha.png")} />
          </Icone>
          <Texto>Espanhol</Texto>
        </Opcao>
      </OpcoesContainer>
    </Container>
  );
}
