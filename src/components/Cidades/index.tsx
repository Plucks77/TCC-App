import React, { useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { LayoutAnimation, Platform, UIManager } from "react-native";
import {
  Container,
  CidadeContainer,
  Imagem,
  CidadeNome,
  SetaContainer,
  CidadesContainer,
  DescricaoContainer,
  DescricaoTexto,
  DescricaoBotao,
  DescricaoBotaoContainer,
  DescricaoBotaoTexto,
  DescricaoBotaoIcone,
} from "./styles";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CidadesProposta({ navigation }) {
  const [resendeVisible, setResendeVisible] = useState(false);
  const [itatiaiaVisible, setItatiaiaVisible] = useState(false);

  const scrollView = useRef(null);

  const toggleResende = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setResendeVisible(!resendeVisible);
    setItatiaiaVisible(false);
  };

  const toggleItatiaia = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setItatiaiaVisible(!itatiaiaVisible);
    setResendeVisible(false);
  };

  return (
    <Container
      ref={scrollView}
      onContentSizeChange={() => {
        itatiaiaVisible && scrollView.current.scrollToEnd();
      }}
    >
      {/* <Image
        style={{ position: "absolute", zIndex: -5 }}
        source={require("../../../assets/vector1.png")}
      /> */}
      <CidadesContainer>
        <CidadeContainer onPress={toggleResende}>
          <>
            <Imagem source={require("../../../assets/Resende2.jpg")}>
              <CidadeNome>Resende</CidadeNome>
              <SetaContainer>
                <Feather
                  name={resendeVisible ? "arrow-up-circle" : "arrow-down-circle"}
                  size={30}
                  color="white"
                />
              </SetaContainer>
            </Imagem>
            {resendeVisible && (
              <DescricaoContainer>
                <DescricaoTexto>
                  Localizada às margens da Rodovia Presidente Dutra (BR-116), que liga o Rio de
                  Janeiro a São Paulo, Resende é uma das mais belas cidades turísticas da Região das
                  Agulhas Negras, no sul do Estado do Rio. Portanto, se você procura paz,
                  tranquilidade, belos cenários com natureza exuberante e preservada com suas matas,
                  rios, cachoeiras, ar puro, o canto dos pássaros e diversidade de fauna e flora,
                  você encontrou o seu lugar.
                </DescricaoTexto>

                <DescricaoBotao
                  onPress={() => navigation.navigate("Locais", { cidade: "Resende" })}
                >
                  <DescricaoBotaoContainer>
                    <DescricaoBotaoTexto>Ver locais</DescricaoBotaoTexto>
                    <DescricaoBotaoIcone>
                      <Feather name="arrow-right-circle" size={25} color="white" />
                    </DescricaoBotaoIcone>
                  </DescricaoBotaoContainer>
                </DescricaoBotao>
              </DescricaoContainer>
            )}
          </>
        </CidadeContainer>

        <CidadeContainer onPress={toggleItatiaia}>
          <>
            <Imagem source={require("../../../assets/Itatiaia2.jpg")}>
              <CidadeNome>Itatiaia</CidadeNome>
              <SetaContainer>
                <Feather
                  name={itatiaiaVisible ? "arrow-up-circle" : "arrow-down-circle"}
                  size={30}
                  color="white"
                />
              </SetaContainer>
            </Imagem>
            {itatiaiaVisible && (
              <DescricaoContainer>
                <DescricaoTexto>
                  Itatiaia é um município brasileiro do Estado do Rio de Janeiro. Localiza-se a uma
                  latitude 22º29'29" sul e a uma longitude 44º33'33" oeste. Sua população estimada
                  em 2014 era de 29996 habitantes. Situa-se na divisa dos estados do Rio de Janeiro
                  e Minas Gerais, na Serra da Mantiqueira.
                </DescricaoTexto>

                <DescricaoBotao
                  onPress={() => navigation.navigate("Locais", { cidade: "Itatiaia" })}
                >
                  <DescricaoBotaoContainer>
                    <DescricaoBotaoTexto>Ver locais</DescricaoBotaoTexto>
                    <DescricaoBotaoIcone>
                      <Feather name="arrow-right-circle" size={25} color="white" />
                    </DescricaoBotaoIcone>
                  </DescricaoBotaoContainer>
                </DescricaoBotao>
              </DescricaoContainer>
            )}
          </>
        </CidadeContainer>
      </CidadesContainer>

      {/* <Image
        style={{ position: "absolute", bottom: 0, zIndex: -5 }}
        source={require("../../../assets/vector2.png")}
      /> */}
    </Container>
  );
}
