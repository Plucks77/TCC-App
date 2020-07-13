import React, { useState, useCallback } from "react";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text } from "react-native";

import api from "../../api";
import { useAuth } from "../../contexts/auth";

import {
  Container,
  PacoteContainer,
  PacoteFoto,
  PacoteTextoContainer,
  PacoteTexto,
} from "./styles";

interface Pacote {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  guia_id: number;
}

export default function ListaFavoritos({ navigation }) {
  const [pacotes, setPacotes] = useState<Pacote[]>([]);
  const [ready, setReady] = useState(false);
  const { user } = useAuth();

  function getFavorites() {
    api
      .get(`/user/favorites/${user}`)
      .then((res) => {
        setPacotes(res.data);
        setReady(true);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  useFocusEffect(
    useCallback(() => {
      setReady(false);
      getFavorites();
    }, [])
  );

  function handleNavigate(pacote) {
    setReady(false);
    navigation.navigate("PacoteFavorito", { pacote: pacote });
  }

  if (ready && pacotes.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Você ainda não favoritou um pacote 😕</Text>
        <Text>Continue navegando e favorite um!</Text>
      </View>
    );
  }

  return ready ? (
    <Container>
      {pacotes.map((pacote) => (
        <PacoteContainer
          key={pacote.id}
          onPress={() => {
            handleNavigate(pacote);
          }}
        >
          <PacoteFoto source={{ uri: pacote.image_url }} />
          <PacoteTextoContainer>
            <PacoteTexto>{pacote.name}</PacoteTexto>
            <PacoteTexto>R$ {pacote.price}</PacoteTexto>
          </PacoteTextoContainer>
        </PacoteContainer>
      ))}
    </Container>
  ) : (
    <>
      <ShimmerPlaceHolder
        autoRun={true}
        style={{
          width: 350,
          height: 150,
          backgroundColor: "lightgray",
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
      <ShimmerPlaceHolder
        autoRun={true}
        style={{
          width: 350,
          height: 150,
          backgroundColor: "lightgray",
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
    </>
  );
}
