import React from "react";
import { View, Text } from "react-native";

import {
  Container,
  Titulo,
  ScrollFotos,
  Imagem,
  Texto,
  Descricao,
  ViewFotos,
  Guia,
  Valor,
} from "./styles";

export default function Pacote({ navigation, route }) {
  const { titulo, valor } = route.params;
  return (
    <Container>
      <Titulo>{titulo}</Titulo>
      <ViewFotos>
        <ScrollFotos horizontal={true} showsHorizontalScrollIndicator={false}>
          <Imagem source={require("../../../assets/pacote1.jpg")} />
          <Imagem source={require("../../../assets/pacote2.jpg")} />
        </ScrollFotos>
      </ViewFotos>

      <Descricao>
        <Texto>Descrição:</Texto>
        <Texto>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at! Harum
          neque deserunt tempore velit labore, ab consectetur placeat dolores
          veritatis at alias suscipit quod ad iure dolore voluptatem ex!
        </Texto>
      </Descricao>

      <Guia>
        <Texto>Guia:</Texto>
        <Texto>Um guia muito bom</Texto>
      </Guia>

      <Valor>
        <Texto>Valor:</Texto>
        <Texto>{valor}</Texto>
      </Valor>
    </Container>
  );
}
