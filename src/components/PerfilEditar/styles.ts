import styled from "styled-components/native";
import global from "../../styles/global";
import { palette } from "../../styles/global";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${palette.white};
`;

export const ViewInfos = styled.ScrollView.attrs(() => ({
  alignItems: "center",
}))`
  margin-top: 95px;

  flex: 1;
`;

export const Texto = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${palette.secundary};
  margin-left: 10px;
`;

export const Input = styled.TextInput`
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

export const BotaoArea = styled.View`
  align-items: center;
  flex: 1;
`;
