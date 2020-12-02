import React, { useRef, useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { TouchableOpacity, View, Text } from "react-native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { useIntl } from "react-intl";

import api from "../../api";

import {
  Container,
  MenuContainer,
  MenuNome,
  CategoriasContainer,
  CategoriaContainer,
  CategoriaNome,
  PacoteContainer,
  PacoteFoto,
  PacoteTextoNome,
  PacoteTextoValor,
} from "./styles";

interface Pacote {
  id: number;
  name: string;
  description: string;
  price: number;
  category_name: string;
  image_url: string;
  guia_id: number;
  date: string;
}

export default function Categorias({ navigation, route }) {
  const [pacotes, setPacotes] = useState<Pacote[]>([]);
  const [categories, setCategories] = useState([]);
  const [ready, setReady] = useState(false);
  const { local_id, local_name } = route.params;
  const intl = useIntl();
  const scrollView = useRef(null);

  navigation.setOptions({ title: local_name });

  useEffect(() => {
    api
      .get<Pacote[]>(`/pacote/local/${local_id}`)
      .then((res) => {
        setPacotes(res.data);
        setReady(true);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  useEffect(() => {
    if (pacotes) {
      const cat = [];
      pacotes.map((pacote) => {
        let categ;

        if (intl.locale === "en-US") {
          switch (pacote.category_name) {
            case "Ação":
              categ = "Action";
              pacote.category_name = categ;
              break;
            case "Aventura":
              categ = "Adventure";
              pacote.category_name = categ;
              break;
            case "Casual":
              categ = "Casual";
              pacote.category_name = categ;
              break;
          }
        }
        if (intl.locale === "sp-ES") {
          switch (pacote.category_name) {
            case "Ação":
              categ = "Acción";
              pacote.category_name = categ;
              break;
            case "Aventura":
              categ = "Aventura";
              pacote.category_name = categ;
              break;
            case "Casual":
              categ = "Casual";
              pacote.category_name = categ;
              break;
          }
        }

        if (intl.locale === "pt-BR") {
          switch (pacote.category_name) {
            case "Ação":
              categ = "Ação";
              break;
            case "Aventura":
              categ = "Aventura";
              break;
            case "Casual":
              categ = "Casual";
              break;
          }
        }
        if (!cat.includes(categ)) {
          cat.push(categ);
        }
      });
      setCategories(cat);
    }
  }, [pacotes]);

  function handleScroll(y: number) {
    scrollView.current.scrollTo({ x: 0, y, animated: true });
  }

  let positions = [];

  function insertAndSortePositions(p: number) {
    positions.push(p);
    positions = positions.sort();
  }

  if (ready && pacotes.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 16 }}>
          <FormattedMessage id="no_packages_found" />
        </Text>
      </View>
    );
  }

  return ready ? (
    <Container>
      <MenuContainer>
        {categories.map((categorie, i) => (
          <TouchableOpacity key={i} onPress={() => handleScroll(positions[i])}>
            <MenuNome>{categorie}</MenuNome>
          </TouchableOpacity>
        ))}
      </MenuContainer>

      <CategoriasContainer ref={scrollView}>
        {categories.map((categorie, i) => (
          <CategoriaContainer
            key={i}
            onLayout={(e) => insertAndSortePositions(e.nativeEvent.layout.y)}
          >
            <CategoriaNome>{categorie}</CategoriaNome>
            {pacotes.map(
              (pacote) =>
                pacote.category_name === categorie && (
                  <PacoteContainer
                    key={pacote.id}
                    onPress={() => {
                      navigation.navigate("Pacote", { pacote: pacote });
                    }}
                  >
                    <PacoteFoto source={{ uri: pacote.image_url }} />

                    <PacoteTextoNome>{pacote.name}</PacoteTextoNome>
                    <PacoteTextoValor>R$ {pacote.price}</PacoteTextoValor>
                  </PacoteContainer>
                )
            )}
          </CategoriaContainer>
        ))}
      </CategoriasContainer>
    </Container>
  ) : (
    <>
      <ShimmerPlaceHolder
        autoRun={true}
        style={{
          width: 350,
          height: 150,
          backgroundColor: "lightgray",
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
      <ShimmerPlaceHolder
        autoRun={true}
        style={{
          width: 350,
          height: 150,
          backgroundColor: "lightgray",
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
      <ShimmerPlaceHolder
        autoRun={true}
        style={{
          width: 350,
          height: 150,
          backgroundColor: "lightgray",
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
      <ShimmerPlaceHolder
        autoRun={true}
        style={{
          width: 350,
          height: 150,
          backgroundColor: "lightgray",
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
    </>
  );
}
