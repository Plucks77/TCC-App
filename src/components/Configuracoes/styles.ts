import styled from "styled-components/native";
import global from "../../styles/global";
import { palette } from "../../styles/global";

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;

export const OpcoesContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const Opcao = styled.TouchableOpacity`
  background: ${palette.primary};
  border-radius: 20px;
  width: 300px;
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

export const Icone = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Texto = styled.Text`
  color: ${palette.white};
  font-weight: 500;
  font-size: 24px;
  flex: 2;
  margin-left: -10px;
`;
