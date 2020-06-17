import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${global.background};
`;

export const TituloContainer = styled.View`
  margin-top: 50px;
  flex-direction: row;
`;

export const Titulo = styled.Text`
  flex: 2;
  margin-left: -10px;
  font-size: 30px;
  text-align: center;
  color: ${global.text};
  font-weight: bold;
`;

export const Seta = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ViewInfos = styled.ScrollView.attrs(() => ({
  alignItems: "center",
}))`
  margin-top: 25px;

  flex: 1;
`;

export const Texto = styled.Text`
  font-size: 18px;
  font-weight: 500;
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
  align-items: center;
  flex: 1;
`;
