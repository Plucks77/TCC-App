import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";

import global from "../../styles/global";

import { Container, OpcoesContainer, Opcao, Icone, Texto } from "./styles";

export default function Idiomas({ navigation }) {
  return (
    <Container>
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
