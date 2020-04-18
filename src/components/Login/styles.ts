import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #f5f9e9;
  align-items: center;
  justify-content: center;
`;

export const ViewInput = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 300px;
  border-bottom-width: 1px;
  border-bottom-color: #36453b;
  color: #36453b;
  font-size: 20px;
  padding-left: 35px;
  margin-bottom: 25px;
`;

export const Botao = styled.TouchableOpacity`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  background-color: #c4c4c4;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Texto = styled.Text`
  color: #36453b;
  font-weight: bold;
`;
