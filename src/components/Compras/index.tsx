import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../contexts/auth";
import api from "../../api";

import ModalExplicacaoPacote from "../ModalExplicacaoPacote";
import getDate from "../../services/dayCalculator";

import { Container, Data, Foto, Nome, PacoteContainer } from "./styles";

interface pacote {
  id: number;
  name: string;
  description: string;
  date: string;
  dias_restantes: number;
  image_url: string;
  guia_id: number;
}

function Compras({ navigation }) {
  const [compras, setCompras] = useState<pacote[]>([]);
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    api.get(`/purchases/user/${user}`).then((res) => {
      const compras = getDate(res.data);
      setCompras(compras);
    });
  }, []);

  return (
    <Container style={showModal ? { opacity: 0.5 } : {}}>
      <ModalExplicacaoPacote visible={showModal} setShowModal={setShowModal} />
      {compras.map((pacote) => (
        <PacoteContainer
          key={pacote.id}
          onPress={() =>
            pacote.dias_restantes !== 0
              ? setShowModal(true)
              : navigation.navigate("PacoteAtivo", { pacote: pacote })
          }
        >
          <Foto source={{ url: pacote.image_url }} />
          <Nome>{pacote.name}</Nome>
          {pacote.dias_restantes === 0 ? (
            <Data>hoje!</Data>
          ) : pacote.dias_restantes !== 1 ? (
            <Data> daqui a {pacote.dias_restantes} dias!</Data>
          ) : (
            <Data> amanhã!</Data>
          )}
        </PacoteContainer>
      ))}
    </Container>
  );
}

export default Compras;
