import styled from "styled-components/native";
import global, { palette } from "../../styles/global";

export const BotaoCorpo = styled.TouchableOpacity`
  width: 300px;
  height: 35px;
  border-radius: 10px;
  background-color: ${palette.primary};
  align-items: center;
  justify-content: center;
`;

export const BotaoTexto = styled.Text`
  color: ${palette.white};
  font-weight: bold;
`;
