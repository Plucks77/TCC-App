import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { Text } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

import api from "../../api";
import { palette } from "../../styles/global";

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

interface PacoteInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  category_name: string;
  image_url: string;
  guia_id: number;
}

interface Guia {
  id: number;
  name: string;
  description: string;
  media: number;
  tel: string;
}

export default function Pacote({ navigation, route }) {
  const [guia, setGuia] = useState<Guia>();
  const [ready, setReady] = useState(false);
  const { pacote }: { pacote: PacoteInterface } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: pacote.name });
    api
      .get(`/guia/${pacote.guia_id}`)
      .then((res) => {
        setGuia(res.data);
        setReady(true);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return ready ? (
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
          <CampoTexto>{pacote.description}</CampoTexto>
        </TextoContainer>
      </Campo>
      <Campo>
        <CampoTitulo>Guia</CampoTitulo>
        <TextoContainer>
          <CampoTexto>{guia.name}</CampoTexto>
          <CampoTexto>{guia.description}</CampoTexto>
        </TextoContainer>
      </Campo>
      <Campo>
        <CampoTitulo>Preço</CampoTitulo>
        <TextoContainer>
          <CampoTexto>R$ {pacote.price}</CampoTexto>
        </TextoContainer>
      </Campo>
      <ViewBotao>
        <Botao
          texto="Comprar"
          props={() =>
            LocalAuthentication.authenticateAsync({
              promptMessage: `Compra no valor de R$ ${pacote.price}`,
              cancelLabel: "Cancelar",
            })
          }
        />
      </ViewBotao>
    </Container>
  ) : (
    <Text>Carregando...</Text>
  );
}
