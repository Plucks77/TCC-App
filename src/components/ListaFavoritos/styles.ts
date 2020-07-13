import styled from "styled-components/native";
import { palette } from "../../styles/global";

export const Container = styled.ScrollView.attrs(() => ({
  flex: 1,
  marginTop: 10,
  backgroundColor: palette.white,
}))``;

export const PacoteContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  flex: 1;
  align-items: center;
  margin-bottom: 10px;
`;

export const PacoteFoto = styled.Image`
  width: 350px;
  height: 150px;
  border-radius: 5px;
  resize-mode: stretch;
`;

export const PacoteTextoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
  margin-top: -5px;
  border-radius: 5px;
  z-index: -5;
  background: ${palette.lightGray};
`;

export const PacoteTexto = styled.Text`
  margin: 5px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: ${palette.secundary};
`;
