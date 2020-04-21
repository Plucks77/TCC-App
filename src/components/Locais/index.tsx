import React from "react";
import { TouchableOpacity } from "react-native";

import { Container, Titulo, CidadesArea, CidadeNome } from "./styles";

export default function Locais({ navigation, route }) {
  const { cidade } = route.params;
  return (
    <Container>
      {cidade === "Resende" ? (
        <>
          <Titulo>Selecione um local</Titulo>
          <CidadesArea>
            <TouchableOpacity onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Mauá</CidadeNome>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Serrinha</CidadeNome>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Capelinha</CidadeNome>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Engenheiro passos</CidadeNome>
            </TouchableOpacity>
          </CidadesArea>
        </>
      ) : (
        <>
          <Titulo>Selecione um local</Titulo>
          <CidadesArea>
            <TouchableOpacity onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Penedo</CidadeNome>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Maringá</CidadeNome>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Pacotes")}>
              <CidadeNome>Maromba</CidadeNome>
            </TouchableOpacity>
          </CidadesArea>
        </>
      )}
    </Container>
  );
}
