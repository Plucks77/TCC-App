import styled from "styled-components/native";

export const Container = styled.View`
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
