import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Menu from "../Menu";
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
  Recomendacoes,
  ServicosView,
  ScrollServicos,
  ServicoView,
  ServicoFoto,
  ServicoArea,
  ServicoNome,
  BotaoConfirmar,
} from "./styles";

export default function Pacote({ navigation, route }) {
  const { titulo, valor } = route.params;
  return (
    <Container>
      <Menu navigation={navigation} />
      <Titulo>{titulo}</Titulo>
      <ViewFotos>
        <ScrollFotos horizontal={true} showsHorizontalScrollIndicator={true}>
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

      <Recomendacoes>
        <Texto>Recomendações:</Texto>
      </Recomendacoes>

      <ServicosView>
        <ServicoNome>Hotelaria</ServicoNome>

        <ScrollServicos horizontal={true}>
          <ServicoView>
            <ServicoFoto source={require("../../../assets/hotel1.jpg")} />
            <ServicoArea>
              <Texto>Hotel parceiro 1</Texto>
              <Texto>Até 5%</Texto>
            </ServicoArea>
          </ServicoView>

          <ServicoView>
            <ServicoFoto source={require("../../../assets/hotel1.jpg")} />
            <ServicoArea>
              <Texto>Hotel parceiro 2</Texto>
              <Texto></Texto>
            </ServicoArea>
          </ServicoView>
        </ScrollServicos>
      </ServicosView>

      <ServicosView>
        <ServicoNome>Restaurantes</ServicoNome>

        <ScrollServicos horizontal={true}>
          <ServicoView>
            <ServicoFoto source={require("../../../assets/restaurante1.jpg")} />
            <ServicoArea>
              <Texto>Restaurante parceiro 1</Texto>
              <Texto>Até 5%</Texto>
            </ServicoArea>
          </ServicoView>

          <ServicoView>
            <ServicoFoto source={require("../../../assets/restaurante1.jpg")} />
            <ServicoArea>
              <Texto>Restaurante parceiro 2</Texto>
              <Texto></Texto>
            </ServicoArea>
          </ServicoView>
        </ScrollServicos>
      </ServicosView>

      <BotaoConfirmar>
        <Texto>Confirmar</Texto>
      </BotaoConfirmar>
    </Container>
  );
}
