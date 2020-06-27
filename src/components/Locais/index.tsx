import React from "react";

import { Container, CidadesArea, CidadeFoto, CidadeNome, CidadeBotao, Cidade } from "./styles";

export default function Locais({ navigation, route }) {
  const { cidade } = route.params;

  return (
    <Container>
      {cidade === "Resende" ? (
        <>
          <Cidade>{cidade}</Cidade>

          <CidadesArea>
            <CidadeBotao
              onPress={() => navigation.navigate("Categorias", { local: "Visconde de Mauá" })}
            >
              <CidadeFoto source={require("../../../assets/locais/maua.jpg")}>
                <CidadeNome>Visconde de Mauá</CidadeNome>
              </CidadeFoto>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Categorias", { local: "Serrinha" })}>
              <CidadeFoto source={require("../../../assets/locais/serrinha.jpg")}>
                <CidadeNome>Serrinha</CidadeNome>
              </CidadeFoto>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Categorias", { local: "Capelinha" })}>
              <CidadeFoto source={require("../../../assets/locais/capelinha.jpg")}>
                <CidadeNome>Capelinha</CidadeNome>
              </CidadeFoto>
            </CidadeBotao>

            <CidadeBotao
              onPress={() => navigation.navigate("Categorias", { local: "Engenheiro Passos" })}
            >
              <CidadeFoto source={require("../../../assets/locais/engpassos.jpg")}>
                <CidadeNome>Engenherio Passos</CidadeNome>
              </CidadeFoto>
            </CidadeBotao>
          </CidadesArea>
        </>
      ) : (
        <>
          <Cidade>em {cidade}</Cidade>

          <CidadesArea>
            <CidadeBotao onPress={() => navigation.navigate("Categorias", { local: "Penedo" })}>
              <CidadeFoto source={require("../../../assets/locais/penedo.jpg")}>
                <CidadeNome>Penedo</CidadeNome>
              </CidadeFoto>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Categorias", { local: "Maringá" })}>
              <CidadeFoto source={require("../../../assets/locais/maringa.jpg")}>
                <CidadeNome>Maringá</CidadeNome>
              </CidadeFoto>
            </CidadeBotao>

            <CidadeBotao onPress={() => navigation.navigate("Categorias", { local: "Maromba" })}>
              <CidadeFoto source={require("../../../assets/locais/maromba.jpg")}>
                <CidadeNome>Maromba</CidadeNome>
              </CidadeFoto>
            </CidadeBotao>
          </CidadesArea>
        </>
      )}
    </Container>
  );
}
