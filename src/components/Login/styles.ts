import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #f5f9e9;
`;

export const LogoView = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 40px;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export const AreaInputs = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ViewInput = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  width: 300px;
  border-bottom-width: 1px;
  border-bottom-color: #36453b;
  color: #36453b;
  font-size: 20px;
  padding-left: 35px;
`;

export const Erro = styled.Text`
  color: #36453b;
  font-weight: bold;
  color: crimson;
  text-align: center;
  margin-top: 5px;
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
