import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../contexts/auth";
import api from "../../api";

import getDate from "../../services/dayCalculator";

import { Container, Data, Foto, Nome, PacoteContainer } from "./styles";

interface pacote {
  id: number;
  name: string;
  description: string;
  date: string;
  dias_restantes: number;
  image_url: string;
}

const Compras: React.FC = () => {
  const [compras, setCompras] = useState<pacote[]>([]);
  const [diasRestantes, setDiasRestantes] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    api.get(`/purchases/user/${user}`).then((res) => {
      const compras = getDate(res.data);
      //  console.log(compras);
      setCompras(compras);
    });
  }, []);

  return (
    <Container>
      {compras.map((pacote) => (
        <PacoteContainer key={pacote.id}>
          <Foto source={{ url: pacote.image_url }} />
          <Nome>{pacote.name}</Nome>
          <Data>daqui a {pacote.dias_restantes} dias</Data>
        </PacoteContainer>
      ))}
    </Container>
  );
};

export default Compras;
