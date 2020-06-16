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
            <CidadeBotao onPress={() => navigation.navigate("Pacotes", { local: "Mauá" })}>
              <CidadeNome>Mauá</CidadeNome>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Pacotes", { local: "Serrinha" })}>
              <CidadeNome>Serrinha</CidadeNome>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Pacotes", { local: "Capelinha" })}>
              <CidadeNome>Capelinha</CidadeNome>
            </CidadeBotao>

            <CidadeBotao
              onPress={() => navigation.navigate("Pacotes", { local: "Engenheiro Passos" })}
            >
              <CidadeNome>Engenheiro Passos</CidadeNome>
            </CidadeBotao>
          </CidadesArea>
        </>
      ) : (
        <>
          <Titulo>Selecione um local</Titulo>
          <CidadesArea>
            <CidadeBotao onPress={() => navigation.navigate("Pacotes", { local: "Penedo" })}>
              <CidadeNome>Penedo</CidadeNome>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Pacotes", { local: "Maringá" })}>
              <CidadeNome>Maringá</CidadeNome>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Pacotes", { local: "Maromba" })}>
              <CidadeNome>Maromba</CidadeNome>
            </CidadeBotao>
          </CidadesArea>
        </>
      )}
    </Container>
  );
}
