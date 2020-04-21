import styled from "styled-components/native";
import global from "../../styles/global";

export const BotaoCorpo = styled.TouchableOpacity`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  background-color: ${global.button};
  align-items: center;
  justify-content: center;
`;

export const BotaoTexto = styled.Text`
  color: ${global.text};
  font-weight: bold;
`;