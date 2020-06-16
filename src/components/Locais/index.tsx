import React from "react";
import { TouchableOpacity } from "react-native";

import { Container, Titulo, CidadesArea, CidadeNome, CidadeBotao } from "./styles";

export default function Locais({ navigation, route }) {
  const { cidade } = route.params;
  return (
    <Container>
      {cidade === "Resende" ? (
        <>
          <Titulo>Selecione um local</Titulo>
          <CidadesArea>
            <CidadeBotao onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Mauá</CidadeNome>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Serrinha</CidadeNome>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Capelinha</CidadeNome>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Engenheiro Passos</CidadeNome>
            </CidadeBotao>
          </CidadesArea>
        </>
      ) : (
        <>
          <Titulo>Selecione um local</Titulo>
          <CidadesArea>
            <CidadeBotao onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Penedo</CidadeNome>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Maringá</CidadeNome>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Maromba</CidadeNome>
            </CidadeBotao>
          </CidadesArea>
        </>
      )}
    </Container>
  );
}
