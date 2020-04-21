import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${global.background};
`;

export const Titulo = styled.Text`
  margin-top: 50px;
  font-size: 30px;
  text-align: center;
  color: ${global.text};
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Texto = styled.Text`
  font-size: 18px;
  color: ${global.text};
`;

export const ScrollFotos = styled.ScrollView``;

export const ViewFotos = styled.View`
  margin-bottom: 20px;
`;

export const Imagem = styled.Image`
  width: 350px;
  height: 150px;
  resize-mode: stretch;
  margin-left: 10px;
`;

export const Descricao = styled.View`
  margin: 10px;
  background: ${global.background_text};
  border-radius: 5px;
  padding: 5px;
`;

export const Guia = styled.View`
  margin: 10px;
  background: ${global.background_text};
  border-radius: 5px;
  padding: 5px;
`;

export const Valor = styled.View`
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
  background: ${global.background_text};
  border-radius: 5px;
  padding: 5px;
`;

export const Recomendacoes = styled.View`
  margin: 10px;
`;

export const ServicosView = styled.View`
  margin: 10px;
`;

export const ServicoNome = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${global.text};
`;

export const ScrollServicos = styled.ScrollView``;

export const ServicoView = styled.View`
  margin: 10px 5px;
`;

export const ServicoFoto = styled.Image`
  width: 350px;
  height: 150px;
  resize-mode: stretch;
`;

export const ServicoArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const ViewBotao = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
