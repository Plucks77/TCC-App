import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import global from "../../styles/global";

import { Container, Texto, Titulo, OpcoesContainer, Opcao, Icone } from "./styles";
import { Linking } from "react-native";

export default function Configuracoes({ navigation }) {
  function handleWhatsapp() {
    const text = "Tenho a seguinte dúvida sobre o aplicativo ValeTour:  ";
    Linking.openURL(`whatsapp://send?phone=55 24 992859059&text=${text}`);
  }
  return (
    <Container>
      <Titulo>Configurações</Titulo>

      <OpcoesContainer>
        <Opcao onPress={() => navigation.navigate("Idiomas")}>
          <Icone>
            <FontAwesome name="language" size={25} color={global.text} />
          </Icone>
          <Texto>Idioma</Texto>
        </Opcao>

        <Opcao onPress={() => handleWhatsapp()}>
          <Icone>
            <FontAwesome name="whatsapp" size={25} color={global.text} />
          </Icone>
          <Texto>Fale conosco</Texto>
        </Opcao>

        <Opcao>
          <Icone>
            <FontAwesome name="file-text" size={25} color={global.text} />
          </Icone>
          <Texto>Manual</Texto>
        </Opcao>
      </OpcoesContainer>
    </Container>
  );
}
