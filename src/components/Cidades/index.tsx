import React from "react";
import { TouchableWithoutFeedback } from "react-native";

import { Container, Titulo, Texto, Local, Imagem } from "./styles";

export default function Cidades({ navigation }) {
  return (
    <Container>
      <Titulo>Selecione uma cidade</Titulo>
      <Local>
        <Texto>Resende</Texto>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Locais", { cidade: "Resende" });
          }}
        >
          <Imagem
            source={require("../../../assets/Resende.jpg")}
            resizeMode="stretch"
          />
        </TouchableWithoutFeedback>
      </Local>

      <Local>
        <Texto>Itatiaia</Texto>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Locais", { cidade: "Itatiaia" });
          }}
        >
          <Imagem
            source={require("../../../assets/Itatiaia.jpg")}
            resizeMode="stretch"
          />
        </TouchableWithoutFeedback>
      </Local>
    </Container>
  );
}
