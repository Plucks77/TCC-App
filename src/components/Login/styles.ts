import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${global.background};
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
  width: 310px;
  height: 40px;
  border: 2px;
  border-color: ${global.button};
  color: ${global.text};
  font-size: 20px;
  padding-left: 35px;
  border-radius: 10px;
`;

export const Erro = styled.Text`
  font-weight: bold;
  color: ${global.error};
  text-align: center;
  margin-top: 5px;
`;

export const Texto = styled.Text`
  color: ${global.text};
  font-weight: normal;
  margin-top: 15px;
`;
