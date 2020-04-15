import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #f5f9e9;
`;

export const Titulo = styled.Text`
  margin-top: 50px;
  text-align: center;
  font-size: 30px;
  color: #36453b;
  font-weight: bold;
`;

export const Local = styled.View`
  margin-top: 35px;
`;

export const Texto = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #36453b;
`;

export const Imagem = styled.Image`
  width: 100%;
  height: 150px;
  resize-mode: stretch;
  align-self: center;
  margin-top: 10px;
`;
