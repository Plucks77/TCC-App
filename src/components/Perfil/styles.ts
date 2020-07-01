import styled from "styled-components/native";
import { palette } from "../../styles/global";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${palette.white};
`;

export const Icone = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const ViewInfos = styled.ScrollView.attrs(() => ({
  alignItems: "center",
}))`
  margin-top: 25px;
`;

export const Texto = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${palette.secundary};
  margin-left: 10px;
`;

export const Input = styled.TextInput.attrs(() => ({
  editable: false,
}))`
  font-size: 18px;
  color: ${palette.secundary};
  margin-bottom: 20px;
  border: 2px;
  border-radius: 10px;
  width: 310px;
  height: 40px;
  padding-left: 10px;
  border-color: ${palette.secundary};
`;

export const BotoesContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const BotaoArea = styled.View`
  margin-bottom: 15px;
`;
