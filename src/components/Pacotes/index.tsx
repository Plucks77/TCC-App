import React from "react";
import { TouchableHighlight } from "react-native";

import Menu from "../Menu";

import {
  Container,
  Titulo,
  AreaPacote,
  Categoria,
  ScrollPacotes,
  FotoPacote,
  NomePacote,
  ValorPacote,
  PacoteView,
  PacoteTextoView,
} from "./styles";

export default function Pacotes({ navigation }) {
  return (
    <Container>
      <Menu navigation={navigation} />
      <Titulo>Pacotes</Titulo>
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
                <NomePacote>Pacote de aventura 1</NomePacote>
                <ValorPacote>R$ 1000,00</ValorPacote>
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
                <NomePacote>Pacote de aventura 2</NomePacote>
                <ValorPacote>R$ 2000,00</ValorPacote>
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
                <NomePacote>Pacote casual 1</NomePacote>
                <ValorPacote>R$ 3000,00</ValorPacote>
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
                <NomePacote>Pacote casual 2</NomePacote>
                <ValorPacote>R$ 4000,00</ValorPacote>
              </PacoteTextoView>
            </PacoteView>
          </TouchableHighlight>
        </ScrollPacotes>
      </AreaPacote>
    </Container>
  );
}
