import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";
import {
  Container,
  Header,
  Titulo,
  CidadeContainer,
  Imagem,
  CidadeNome,
  SetaContainer,
  CidadesContainer,
} from "./CidadesPropostaStyles";

export default function CidadesProposta({ navigation }) {
  return (
    <Container>
      <CidadesContainer>
        <CidadeContainer onPress={() => navigation.navigate("Locais", { cidade: "Resende" })}>
          <Imagem source={require("../../../assets/Resende2.jpg")}>
            <CidadeNome>Resende</CidadeNome>
            <SetaContainer>
              <Feather name="arrow-right-circle" size={30} color="white" />
            </SetaContainer>
          </Imagem>
        </CidadeContainer>

        <CidadeContainer
          onPress={() => {
            navigation.navigate("Locais", { cidade: "Itatiaia" });
          }}
        >
          <Imagem source={require("../../../assets/Itatiaia2.jpg")}>
            <CidadeNome>Itatiaia</CidadeNome>
            <SetaContainer>
              <Feather name="arrow-right-circle" size={30} color="white" />
            </SetaContainer>
          </Imagem>
        </CidadeContainer>
      </CidadesContainer>
    </Container>
    // <View
    //   style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "yellow" }}
    // >
    //   <Text
    //     style={{
    //       color: "blue",
    //       fontSize: 55,
    //       textShadowRadius: 5,
    //       textShadowColor: "red",
    //       textShadowOffset: { width: 0, height: 0 },
    //       elevation: 5,
    //     }}
    //   >
    //     Foda-se?
    //   </Text>
    //   <View
    //     style={{
    //       width: 100,
    //       height: 100,
    //       backgroundColor: "blue",
    //       shadowOpacity: 1,
    //       shadowRadius: 5,
    //       shadowColor: "red",
    //       shadowOffset: { width: 0, height: 0 },
    //       elevation: 10,
    //     }}
    //   ></View>
    // </View>
  );
}
