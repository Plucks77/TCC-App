import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import Botao from "../Botao";
import {
  Container,
  TituloContainer,
  Titulo,
  ScrollFotos,
  Imagem,
  ViewFotos,
  ViewBotao,
  Campo,
  CampoTitulo,
  TextoContainer,
  CampoTexto,
  Seta,
  Share,
  Cidade,
} from "./styles";
import global from "../../styles/global";

export default function Pacote({ navigation, route }) {
  const { titulo, valor, local } = route.params;
  return (
    <Container>
      <Cidade>{local}</Cidade>

      <ViewFotos>
        <ScrollFotos horizontal={true} showsHorizontalScrollIndicator={true}>
          <Imagem source={require("../../../assets/pacote1.jpg")} />
          <Imagem source={require("../../../assets/pacote2.jpg")} />
        </ScrollFotos>
      </ViewFotos>

      <Campo>
        <CampoTitulo>Descrição</CampoTitulo>
        <TextoContainer>
          <CampoTexto>
            Passeio piriri pororo dia 25 começa hás 09:00 passa pelo parara pororo e vai pelo bla
            bla bla.
          </CampoTexto>
        </TextoContainer>
      </Campo>

      <Campo>
        <CampoTitulo>Guia</CampoTitulo>
        <TextoContainer>
          <CampoTexto>Mário Roberto da Silva</CampoTexto>
        </TextoContainer>
      </Campo>

      <Campo>
        <CampoTitulo>Preço</CampoTitulo>
        <TextoContainer>
          <CampoTexto>{valor}</CampoTexto>
        </TextoContainer>
      </Campo>

      <ViewBotao>
        <Botao texto="Comprar" props={null} />
      </ViewBotao>
    </Container>
  );
}
