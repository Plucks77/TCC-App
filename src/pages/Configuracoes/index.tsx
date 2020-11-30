import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FormattedMessage, useIntl } from "react-intl";

import { useAuth } from "../../contexts/auth";
import { palette } from "../../styles/global";

import { Container, Texto, OpcoesContainer, Opcao, Icone } from "./styles";
import { Linking } from "react-native";

export default function Configuracoes({ navigation }) {
  const { signOut } = useAuth();
  navigation.setOptions({ title: <FormattedMessage id="screen_configurations" /> });
  function handleWhatsapp() {
    const text = "Tenho a seguinte dúvida sobre o aplicativo ValeTour:  ";
    Linking.openURL(`whatsapp://send?phone=55 24 992859059&text=${text}`);
  }
  return (
    <Container>
      <OpcoesContainer>
        <Opcao onPress={() => navigation.navigate("Idiomas")}>
          <Icone>
            <FontAwesome name="language" size={25} color={palette.white} />
          </Icone>
          <Texto>
            <FormattedMessage id="configuration_changelanguage" />
          </Texto>
        </Opcao>

        <Opcao onPress={() => handleWhatsapp()}>
          <Icone>
            <FontAwesome name="whatsapp" size={25} color={palette.white} />
          </Icone>
          <Texto>
            <FormattedMessage id="configuration_contact" />
          </Texto>
        </Opcao>

        <Opcao onPress={() => {}}>
          <Icone>
            <FontAwesome name="file-text" size={25} color={palette.white} />
          </Icone>
          <Texto>
            <FormattedMessage id="configuration_manual" />
          </Texto>
        </Opcao>
      </OpcoesContainer>
    </Container>
  );
}
