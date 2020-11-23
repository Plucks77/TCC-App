import React, { useState } from "react";
import { Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { QRCode } from "react-native-custom-qr-codes-expo";
import * as Location from "expo-location";
import { FormattedMessage, useIntl } from "react-intl";

import api from "../../api";
import { palette } from "../../styles/global";
import { Container, Foto, BotoesContainer, BotaoContainer, Icone, QRCodeContainer } from "./styles";
import Botao from "../../components/Botao";
import { useAuth } from "../../contexts/auth";

interface pacote {
  id: number;
  name: string;
  description: string;
  date: string;
  dias_restantes: number;
  image_url: string;
  guia_id: number;
}

function PacoteAtivo({ navigation, route }) {
  const [showQRCode, setShowQRCode] = useState(false);
  const { user: user_id } = useAuth();
  const intl = useIntl();

  const pacote = route.params.pacote as pacote;
  navigation.setOptions({ title: pacote.name });

  return !showQRCode ? (
    <Container>
      <Foto source={{ uri: pacote.image_url }} />
      <BotoesContainer>
        <BotaoContainer>
          <Icone>
            <FontAwesome name="qrcode" size={24} color={palette.white} />
          </Icone>
          <Botao
            texto={<FormattedMessage id="my_qr_code" />}
            primary={true}
            props={() => setShowQRCode(true)}
          />
        </BotaoContainer>

        <BotaoContainer>
          <Icone>
            <FontAwesome name="exclamation" size={24} color={palette.white} />
          </Icone>
          <Botao
            texto={<FormattedMessage id="im_lost" />}
            primary={true}
            props={() =>
              Alert.alert(
                intl.messages.calm as string,
                intl.messages.calm_message as string,
                [
                  {
                    text: "OK",
                    onPress: async () => {
                      await Location.requestPermissionsAsync();
                      const location = await Location.getCurrentPositionAsync({});
                      console.log(location.coords.latitude, location.coords.longitude);
                      await api.post("/guia/send-notification", {
                        guia_id: pacote.guia_id,
                        user_id,
                        x: location.coords.latitude,
                        y: location.coords.longitude,
                      });
                    },
                  },
                  {
                    text: intl.messages.cancel as string,
                    onPress: () => {},
                  },
                ],
                { cancelable: false }
              )
            }
          />
        </BotaoContainer>
      </BotoesContainer>
    </Container>
  ) : (
    <QRCodeContainer>
      <QRCode content={user_id} size={310} />
      <Botao
        texto={<FormattedMessage id="message_close" />}
        primary={true}
        props={() => setShowQRCode(false)}
      />
    </QRCodeContainer>
  );
}

export default PacoteAtivo;
