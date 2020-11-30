import styled from "styled-components";
import { palette } from "../../styles/global";
import { Dimensions } from "react-native";
const WIDTH = Dimensions.get("window").width;

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${palette.white};
`;

export const LikeContainer = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  left: ${WIDTH - 40}px;
  z-index: 30;
`;

export const Imagem = styled.Image`
  width: ${WIDTH}px;
  height: 150px;
  resize-mode: stretch;
`;

export const Campo = styled.View`
  margin-bottom: 15px;
`;
export const CampoTitulo = styled.Text`
  font-weight: 500;
  font-size: 24px;
  padding-left: 20px;
  margin-bottom: 5px;
  color: ${palette.secundary};
`;

export const TextoContainer = styled.View`
  padding: 10px 10px 10px 20px;
  background: ${palette.lightGray};
  border: 1px solid ${palette.secundary};
  border-left-width: 0;
  border-right-width: 0;
`;

export const CampoTexto = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: ${palette.secundary};
`;

export const ViewBotao = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;
