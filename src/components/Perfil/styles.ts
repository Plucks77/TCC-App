import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${global.background};
`;

export const Titulo = styled.Text`
  margin-top: 50px;
  font-size: 40px;
  text-align: center;
  color: ${global.text};
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ViewInfos = styled.ScrollView.attrs(() => ({
  alignItems: "center",
}))`
  margin-top: 25px;
  flex: 1;
`;

export const Texto = styled.Text`
  font-size: 18px;
  color: ${global.text};
  margin-left: 10px;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  color: ${global.text};
  margin-bottom: 20px;
  border: 2px;
  border-radius: 10px;
  width: 310px;
  height: 40px;
  padding-left: 10px;
  border-color: #818be7;
`;

export const BotaoArea = styled.View`
  margin-bottom: 10px;
`;
