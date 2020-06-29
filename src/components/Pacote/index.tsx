import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

import Botao from "../Botao";
import {
  Container,
  Imagem,
  ViewBotao,
  Campo,
  CampoTitulo,
  TextoContainer,
  CampoTexto,
  LikeContainer,
} from "./styles";
import global, { palette } from "../../styles/global";
import { useEffect } from "react";

export default function Pacote({ navigation, route }) {
  const { titulo, valor, local } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: titulo });
  }, []);

  return (
    <Container>
      <LikeContainer>
        <FontAwesome name="heart" size={30} color={palette.white} />
      </LikeContainer>

      <Swiper
        style={{ height: 150, marginBottom: 10 }}
        showsButtons={false}
        activeDotColor="white"
        dotColor="gray"
      >
        <Imagem source={require("../../../assets/pacote1.jpg")} />
        <Imagem source={require("../../../assets/pacote2.jpg")} />
      </Swiper>
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
          <CampoTexto>Um guia muito bom por ter nascido e morado na cidade por 40 anos</CampoTexto>
        </TextoContainer>
      </Campo>
      <Campo>
        <CampoTitulo>Preço</CampoTitulo>
        <TextoContainer>
          <CampoTexto>R$ {valor}</CampoTexto>
        </TextoContainer>
      </Campo>
      <ViewBotao>
        <Botao texto="Comprar" props={null} />
      </ViewBotao>
    </Container>
  );
}
