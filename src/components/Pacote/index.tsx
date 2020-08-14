import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import * as LocalAuthentication from "expo-local-authentication";
import { Dimensions, Modal, Text, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

import api from "../../api";
import { useAuth } from "../../contexts/auth";
import { usePurchase } from "../../contexts/purchase";
import { palette } from "../../styles/global";

import Botao from "../Botao";
import ModalCompraPacote from "../ModalCompraPacote";
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
  date: string;
}

interface Guia {
  id: number;
  name: string;
  description: string;
  media: number;
  tel: string;
}

interface Foto {
  image_url: string;
}

export default function Pacote({ navigation, route }) {
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [guia, setGuia] = useState<Guia>();
  const [ready, setReady] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { pacote }: { pacote: PacoteInterface } = route.params;
  const { user } = useAuth();
  const { changeHasPurchases } = usePurchase();
  const HEADERHEIGHT = useHeaderHeight();
  const HEIGHT = Dimensions.get("window").height - HEADERHEIGHT - 100;

  const arrayData = pacote.date.split("T");
  const initialDia = arrayData[0];
  const hora = arrayData[1];
  const arrayDia = initialDia.split("-");
  const dia = arrayDia[2] + "/" + arrayDia[1] + "/" + arrayDia[0];

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

  useEffect(() => {
    api.post("/favorited", { user_id: user, pacote_id: pacote.id }).then((res) => {
      setFavorited(res.data);
    });
  }, []);

  useEffect(() => {
    api.get(`/fotos/pacote/${pacote.id}`).then((res) => {
      setFotos(res.data);
    });
  }, []);

  async function handleFavorite() {
    setFavorited(true);
    await api.post("/user/pacote/favorite", { user_id: user, pacote_id: pacote.id });
  }

  async function handleUnfavorite() {
    setFavorited(false);
    await api.post("/unfavorite", { user_id: user, pacote_id: pacote.id });
  }

  async function handleFingerPrint() {
    const response = await LocalAuthentication.authenticateAsync({
      promptMessage: `Compra no valor de R$ ${pacote.price}`,
      cancelLabel: "Cancelar",
    });
    if (response.success) {
      await api.post("/purchase", { user_id: user, pacote_id: pacote.id }).then((res) => {
        changeHasPurchases(true);
        setShowModal(true);
      });
    }
  }

  return ready ? (
    <Container>
      <ModalCompraPacote visible={showModal} setShowModal={setShowModal} />
      <LikeContainer onPress={favorited ? handleUnfavorite : handleFavorite}>
        <FontAwesome name="heart" size={30} color={favorited ? palette.favorite : palette.white} />
      </LikeContainer>

      <Swiper
        style={{ height: 150, marginBottom: 10 }}
        showsButtons={false}
        activeDotColor="white"
        dotColor="gray"
      >
        {fotos.map((foto, i) => (
          <Imagem key={i} source={{ uri: foto.image_url }} />
        ))}
      </Swiper>
      <Campo>
        <CampoTitulo>Descrição</CampoTitulo>
        <TextoContainer>
          <CampoTexto>{pacote.description}</CampoTexto>
        </TextoContainer>
      </Campo>
      <Campo>
        <CampoTitulo>Data</CampoTitulo>
        <TextoContainer>
          <CampoTexto>
            {dia} hás {hora}
          </CampoTexto>
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
        <Botao texto="Comprar" props={() => handleFingerPrint()} primary={true} />
      </ViewBotao>
    </Container>
  ) : (
    <>
      <ShimmerPlaceHolder
        autoRun={true}
        style={{
          width: 350,
          height: HEIGHT,
          backgroundColor: "lightgray",
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
    </>
  );
}
