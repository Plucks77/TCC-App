import styled from "styled-components/native";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: #f5f9e9;
`;

export const Titulo = styled.Text`
  margin-top: 50px;
  font-size: 30px;
  text-align: center;
  color: #36453b;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Texto = styled.Text`
  font-size: 18px;
  color: #36453b;
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
  background: #e7eed1;
  border-radius: 5px;
  padding: 5px;
`;

export const Guia = styled.View`
  margin: 10px;
  background: #e7eed1;
  border-radius: 5px;
  padding: 5px;
`;

export const Valor = styled.View`
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
  background: #e7eed1;
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
  color: #36453b;
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

export const BotaoConfirmar = styled.TouchableOpacity`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  background-color: #c4c4c4;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;
