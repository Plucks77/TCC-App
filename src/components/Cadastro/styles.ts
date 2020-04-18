import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #f5f9e9;
`;

export const TituloArea = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 100px;
`;

export const Titulo = styled.Text`
  flex: 2;
  font-size: 35px;
  font-weight: bold;
`;

export const Seta = styled.TouchableOpacity`
  flex: 1;
  margin-left: 10px;
`;

export const Campos = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 300px;
  border-bottom-width: 1px;
  border-bottom-color: #36453b;
  color: #36453b;
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 25px;
`;

export const Botao = styled.TouchableOpacity`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  background-color: #c4c4c4;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 25px;
`;
