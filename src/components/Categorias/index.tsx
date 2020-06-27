import React, { useRef, useState, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
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

export default function Categorias({ navigation, route }) {
  const [c1y, setC1y] = useState<number>();
  const [c2y, setC2y] = useState<number>();
  const [c3y, setC3y] = useState<number>();
  const scrollView = useRef(null);
  const c1 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    c1.current.measure((fx, fy, width, height, px, py) => {
      setC1y(py - height - headerHeight - 20);
    });
    c2.current.measure((fx, fy, width, height, px, py) => {
      setC2y(py - height - headerHeight - 20);
    });
    c3.current.measure((fx, fy, width, height, px, py) => {
      setC3y(py - height - headerHeight - 20);
    });
    navigation.setOptions({ title: route.params.local });
  }, []);

  function handleScroll(y: number) {
    // console.log(y);
    scrollView.current.scrollTo({ x: 0, y, animated: true });
  }

  return (
    <Container>
      <MenuContainer>
        <TouchableOpacity onPress={() => handleScroll(c1y)}>
          <MenuNome>Aventura</MenuNome>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScroll(c2y)}>
          <MenuNome>Ação</MenuNome>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleScroll(c3y)}>
          <MenuNome>Casual</MenuNome>
        </TouchableOpacity>
      </MenuContainer>

      <CategoriasContainer ref={scrollView}>
        <CategoriaContainer>
          <CategoriaNome ref={c1}>Aventura</CategoriaNome>
          <PacoteContainer
            onPress={() =>
              navigation.navigate("Pacote", {
                titulo: "Pacote 1",
                valor: 1000,
                local: route.params.local,
              })
            }
          >
            <PacoteFoto source={require("../../../assets/pacotes/pacote1.jpg")} />
            <PacoteTextoContainer>
              <PacoteTexto>Pacote 1</PacoteTexto>
              <PacoteTexto>R$ 1000,00</PacoteTexto>
            </PacoteTextoContainer>
          </PacoteContainer>

          <PacoteContainer
            onPress={() =>
              navigation.navigate("Pacote", {
                titulo: "Pacote 2",
                valor: 2000,
                local: route.params.local,
              })
            }
          >
            <PacoteFoto source={require("../../../assets/pacotes/pacote1.jpg")} />
            <PacoteTextoContainer>
              <PacoteTexto>Pacote 2</PacoteTexto>
              <PacoteTexto>R$ 2000,00</PacoteTexto>
            </PacoteTextoContainer>
          </PacoteContainer>
        </CategoriaContainer>

        <CategoriaContainer>
          <CategoriaNome ref={c2}>Ação</CategoriaNome>
          <PacoteContainer
            onPress={() =>
              navigation.navigate("Pacote", {
                titulo: "Pacote 3",
                valor: 3000,
                local: route.params.local,
              })
            }
          >
            <PacoteFoto source={require("../../../assets/pacotes/pacote1.jpg")} />
            <PacoteTextoContainer>
              <PacoteTexto>Pacote 3</PacoteTexto>
              <PacoteTexto>R$ 3000,00</PacoteTexto>
            </PacoteTextoContainer>
          </PacoteContainer>

          <PacoteContainer
            onPress={() =>
              navigation.navigate("Pacote", {
                titulo: "Pacote 4",
                valor: 4000,
                local: route.params.local,
              })
            }
          >
            <PacoteFoto source={require("../../../assets/pacotes/pacote1.jpg")} />
            <PacoteTextoContainer>
              <PacoteTexto>Pacote 4</PacoteTexto>
              <PacoteTexto>R$ 4000,00</PacoteTexto>
            </PacoteTextoContainer>
          </PacoteContainer>

          <PacoteContainer
            onPress={() =>
              navigation.navigate("Pacote", {
                titulo: "Pacote 5",
                valor: 5000,
                local: route.params.local,
              })
            }
          >
            <PacoteFoto source={require("../../../assets/pacotes/pacote1.jpg")} />
            <PacoteTextoContainer>
              <PacoteTexto>Pacote 5</PacoteTexto>
              <PacoteTexto>R$ 5000,00</PacoteTexto>
            </PacoteTextoContainer>
          </PacoteContainer>
        </CategoriaContainer>

        <CategoriaContainer>
          <CategoriaNome ref={c3}>Casual</CategoriaNome>
          <PacoteContainer
            onPress={() =>
              navigation.navigate("Pacote", {
                titulo: "Pacote 6",
                valor: 6000,
                local: route.params.local,
              })
            }
          >
            <PacoteFoto source={require("../../../assets/pacotes/pacote1.jpg")} />
            <PacoteTextoContainer>
              <PacoteTexto>Pacote 6</PacoteTexto>
              <PacoteTexto>R$ 6000,00</PacoteTexto>
            </PacoteTextoContainer>
          </PacoteContainer>

          <PacoteContainer
            onPress={() =>
              navigation.navigate("Pacote", {
                titulo: "Pacote 7",
                valor: 7000,
                local: route.params.local,
              })
            }
          >
            <PacoteFoto source={require("../../../assets/pacotes/pacote1.jpg")} />
            <PacoteTextoContainer>
              <PacoteTexto>Pacote 7</PacoteTexto>
              <PacoteTexto>R$ 7000,00</PacoteTexto>
            </PacoteTextoContainer>
          </PacoteContainer>

          <PacoteContainer
            onPress={() =>
              navigation.navigate("Pacote", {
                titulo: "Pacote 8",
                valor: 8000,
                local: route.params.local,
              })
            }
          >
            <PacoteFoto source={require("../../../assets/pacotes/pacote1.jpg")} />
            <PacoteTextoContainer>
              <PacoteTexto>Pacote 8</PacoteTexto>
              <PacoteTexto>R$ 8000,00</PacoteTexto>
            </PacoteTextoContainer>
          </PacoteContainer>
        </CategoriaContainer>
      </CategoriasContainer>
    </Container>
  );
}
