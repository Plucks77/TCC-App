import React from "react";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { QRCode } from "react-native-custom-qr-codes-expo";

import api from "../../api";
import { palette } from "../../styles/global";
import { Container, Foto, BotoesContainer, BotaoContainer, Icone, QRCodeContainer } from "./styles";
import Botao from "../Botao";
import { useState } from "react";
import { useAuth } from "../../contexts/auth";

interface pacote {
  id: number;
  name: string;
  description: string;
  date: string;
  dias_restantes: number;
  image_url: string;
}

function PacoteAtivo({ navigation, route }) {
  const [showQRCode, setShowQRCode] = useState(false);
  const { user: user_id } = useAuth();
  const pacote = route.params.pacote as pacote;
  navigation.setOptions({ title: pacote.name });

  return !showQRCode ? (
    <Container>
      <Foto source={{ url: pacote.image_url }} />
      <BotoesContainer>
        <BotaoContainer>
          <Icone>
            <FontAwesome name="qrcode" size={24} color={palette.white} />
          </Icone>
          <Botao texto="Meu QR Code" primary={true} props={() => setShowQRCode(true)} />
        </BotaoContainer>

        <BotaoContainer>
          <Icone>
            <FontAwesome name="exclamation" size={24} color={palette.white} />
          </Icone>
          <Botao texto="Me perdi" primary={true} props={null} />
        </BotaoContainer>
      </BotoesContainer>
    </Container>
  ) : (
    <QRCodeContainer>
      <QRCode
        content={`https://tcc-backend-turismo.herokuapp.com/purchase/confirm/user/${user_id}/pacote/${pacote.id}`}
        size={310}
      />
      <Botao texto="Fechar" primary={true} props={() => setShowQRCode(false)} />
    </QRCodeContainer>
  );
}

export default PacoteAtivo;
