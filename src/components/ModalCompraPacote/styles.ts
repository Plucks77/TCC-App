import styled from "styled-components/native";
import { palette } from "../../styles/global";

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;

export const Titulo = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Texto = styled.Text``;

export const Botao = styled.TouchableOpacity`
  margin: 20px 0px;
`;

export const BotaoTexto = styled.Text`
  color: blue;
`;

export const ViewExterna = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ViewInterna = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  padding-bottom: 0px;
  align-items: center;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;
