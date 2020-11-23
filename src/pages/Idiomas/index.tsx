import React from "react";
import { Image } from "react-native";
import { FormattedMessage } from "react-intl";

import { useLanguage } from "../../contexts/language";

import { Container, OpcoesContainer, Opcao, Icone, Texto } from "./styles";

export default function Idiomas({ navigation }) {
  const { selectLang } = useLanguage();

  function handleLanguageChange(language) {
    selectLang(language);
  }

  return (
    <Container>
      <OpcoesContainer>
        <Opcao onPress={() => handleLanguageChange("pt-BR")}>
          <Icone>
            <Image source={require("../../../assets/bandeiras/brasil.png")} />
          </Icone>
          <Texto>
            <FormattedMessage id="languages_portugues" />
          </Texto>
        </Opcao>

        <Opcao onPress={() => handleLanguageChange("en-US")}>
          <Icone>
            <Image source={require("../../../assets/bandeiras/usa.png")} />
          </Icone>
          <Texto>
            <FormattedMessage id="languages_english" />
          </Texto>
        </Opcao>

        <Opcao onPress={() => handleLanguageChange("sp-ES")}>
          <Icone>
            <Image source={require("../../../assets/bandeiras/espanha.png")} />
          </Icone>
          <Texto>
            <FormattedMessage id="languages_spanish" />
          </Texto>
        </Opcao>
      </OpcoesContainer>
    </Container>
  );
}
