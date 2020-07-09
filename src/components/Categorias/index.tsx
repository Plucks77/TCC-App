import React, { useRef, useState, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";

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
  PacoteTextoContainer,
  PacoteTexto,
} from "./styles";

interface Pacote {
  id: number;
  name: string;
  description: string;
  price: number;
  category_name: string;
  image_url: string;
}

export default function Categorias({ navigation, route }) {
  const [pacotes, setPacotes] = useState<Pacote[]>([]);
  const [categories, setCategories] = useState([]);
  const { local_id, local_name } = route.params;
  const scrollView = useRef(null);

  navigation.setOptions({ title: local_name });

  useEffect(() => {
    api
      .get<Pacote[]>(`/pacote/local/${local_id}`)
      .then((res) => {
        setPacotes(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  useEffect(() => {
    if (pacotes) {
      const cat = [];
      pacotes.map((pacote) => {
        if (!cat.includes(pacote.category_name)) {
          cat.push(pacote.category_name);
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

  return (
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
                  <PacoteContainer key={pacote.id} onPress={() => {}}>
                    <PacoteFoto source={{ uri: pacote.image_url }} />
                    <PacoteTextoContainer>
                      <PacoteTexto>{pacote.name}</PacoteTexto>
                      <PacoteTexto>R$ {pacote.price}</PacoteTexto>
                    </PacoteTextoContainer>
                  </PacoteContainer>
                )
            )}
          </CategoriaContainer>
        ))}
      </CategoriasContainer>
    </Container>
  );
}
