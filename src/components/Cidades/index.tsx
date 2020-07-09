import React, { useRef, useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { LayoutAnimation, Platform, UIManager } from "react-native";

import api from "../../api";

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

interface City {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

export default function CidadesProposta({ navigation, route }) {
  const [cities, setCities] = useState<City[]>([]);
  const [cityVisible, setCityVisible] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    api
      .get("/cities")
      .then((res) => {
        setCities(res.data);
        setReady(true);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  const scrollView = useRef(null);

  const toggleCity = (id: number) => {
    if (id === cityVisible) {
      setCityVisible(0);
    } else {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setCityVisible(id);
    }
  };

  return ready ? (
    <Container ref={scrollView}>
      <CidadesContainer>
        {cities.map((city) => (
          <CidadeContainer key={city.id} onPress={() => toggleCity(city.id)}>
            <>
              <Imagem
                source={{
                  uri: city.image_url,
                }}
              >
                <CidadeNome>{city.name}</CidadeNome>
                <SetaContainer>
                  <Feather
                    name={cityVisible === city.id ? "arrow-up-circle" : "arrow-down-circle"}
                    size={30}
                    color="white"
                  />
                </SetaContainer>
              </Imagem>
              {cityVisible === city.id && (
                <DescricaoContainer>
                  <DescricaoTexto>{city.description}</DescricaoTexto>

                  <DescricaoBotao
                    onPress={() =>
                      navigation.navigate("Locais", { city_id: city.id, city_name: city.name })
                    }
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
        ))}
      </CidadesContainer>
    </Container>
  ) : (
    <ShimmerPlaceHolder
      autoRun={true}
      style={{
        width: 350,
        height: 200,
        backgroundColor: "lightgray",
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 20,
      }}
    />
  );
}
