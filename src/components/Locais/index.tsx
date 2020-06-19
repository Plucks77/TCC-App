import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import {
  Container,
  Titulo,
  CidadesArea,
  CidadeNome,
  CidadeBotao,
  TituloContainer,
  Seta,
  Cidade,
} from "./styles";
import global from "../../styles/global";

export default function Locais({ navigation, route }) {
  const { cidade } = route.params;
  return (
    <Container>
      {cidade === "Resende" ? (
        <>
          <Cidade>em {cidade}</Cidade>

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
          <Cidade>em {cidade}</Cidade>

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
