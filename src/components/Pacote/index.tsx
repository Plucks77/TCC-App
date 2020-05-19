import React from "react";

import Menu from "../Menu";
import Botao from "../Botao";
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
  ViewBotao,
} from "./styles";

export default function Pacote({ navigation, route }) {
  const { titulo, valor } = route.params;
  return (
    <Container>
      {/* <Menu navigation={navigation} /> */}
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
          A região das pedras é muito conhecida por ter pedras. {"\n"}
          Você vai passar pelas incríveis pedras e aprender sobre elas, passando
          por pontes e pedras.{"\n"}
          Sua viagem terá início no dia 30 de abril hás 15:00 horas.
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
      <ViewBotao>
        <Botao texto="Contratar" props={null} />
      </ViewBotao>
    </Container>
  );
}
