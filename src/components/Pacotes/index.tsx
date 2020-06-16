import React from "react";
import { TouchableHighlight, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import global from "../../styles/global";

import {
  Container,
  Titulo,
  Seta,
  AreaPacote,
  Categoria,
  ScrollPacotes,
  FotoPacote,
  PacoteTexto,
  PacoteView,
  PacoteTextoView,
  Cidade,
  TituloContainer,
} from "./styles";

export default function Pacotes({ navigation, route }) {
  return (
    <Container>
      <TituloContainer>
        <Seta onPress={() => navigation.navigate("Locais")}>
          <FontAwesome name="arrow-left" size={35} color={global.text} />
        </Seta>
        <Titulo>Pacotes</Titulo>
      </TituloContainer>
      <Cidade>{route.params.local}</Cidade>

      <ScrollView>
        <AreaPacote>
          <Categoria>Aventura</Categoria>
          <ScrollPacotes horizontal={true} showsHorizontalScrollIndicator={true}>
            <TouchableHighlight
              onPress={() =>
                navigation.navigate("Pacote", {
                  titulo: "Pacote de aventura 1",
                  valor: "R$ 1000,00",
                })
              }
            >
              <PacoteView>
                <FotoPacote source={require("../../../assets/pacote1.jpg")} />
                <PacoteTextoView>
                  <PacoteTexto>Pacote de aventura 1</PacoteTexto>
                  <PacoteTexto>R$ 1000,00</PacoteTexto>
                </PacoteTextoView>
              </PacoteView>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() =>
                navigation.navigate("Pacote", {
                  titulo: "Pacote de aventura 2",
                  valor: "R$ 2000,00",
                })
              }
            >
              <PacoteView>
                <FotoPacote source={require("../../../assets/pacote2.jpg")} />
                <PacoteTextoView>
                  <PacoteTexto>Pacote de aventura 2</PacoteTexto>
                  <PacoteTexto>R$ 2000,00</PacoteTexto>
                </PacoteTextoView>
              </PacoteView>
            </TouchableHighlight>
          </ScrollPacotes>
        </AreaPacote>

        <AreaPacote>
          <Categoria>Casual</Categoria>

          <ScrollPacotes horizontal={true} showsHorizontalScrollIndicator={true}>
            <TouchableHighlight
              onPress={() =>
                navigation.navigate("Pacote", {
                  titulo: "Pacote casual 1",
                  valor: "R$ 3000,00",
                })
              }
            >
              <PacoteView>
                <FotoPacote source={require("../../../assets/pacote4.jpg")} />
                <PacoteTextoView>
                  <PacoteTexto>Pacote casual 1</PacoteTexto>
                  <PacoteTexto>R$ 3000,00</PacoteTexto>
                </PacoteTextoView>
              </PacoteView>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() =>
                navigation.navigate("Pacote", {
                  titulo: "Pacote casual 2",
                  valor: "R$ 4000,00",
                })
              }
            >
              <PacoteView>
                <FotoPacote source={require("../../../assets/pacote3.jpg")} />
                <PacoteTextoView>
                  <PacoteTexto>Pacote casual 2</PacoteTexto>
                  <PacoteTexto>R$ 4000,00</PacoteTexto>
                </PacoteTextoView>
              </PacoteView>
            </TouchableHighlight>
          </ScrollPacotes>
        </AreaPacote>
      </ScrollView>
    </Container>
  );
}
