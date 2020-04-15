import React from "react";
import { View, Text } from "react-native";

import { Container, Titulo, CidadesArea, CidadeNome } from "./styles";

export default function Locais({ navigation, route }) {
  const { cidade } = route.params;
  return (
    <Container>
      {cidade === "Resende" ? (
        <>
          <Titulo>Selecione um local</Titulo>
          <CidadesArea>
            <CidadeNome>Mauá</CidadeNome>
            <CidadeNome>Serrinha</CidadeNome>
            <CidadeNome>Capelinha</CidadeNome>
            <CidadeNome>Engenheiro passos</CidadeNome>
          </CidadesArea>
        </>
      ) : (
        <>
          <Titulo>Selecione um local</Titulo>
          <CidadesArea>
            <CidadeNome>Penedo</CidadeNome>
            <CidadeNome>Maringá</CidadeNome>
            <CidadeNome>Maromba</CidadeNome>
          </CidadesArea>
        </>
      )}
    </Container>
  );
}
