import styled from "styled-components/native";
import { palette } from "../../styles/global";

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;

export const Cidade = styled.Text`
  color: ${palette.secundary};
  text-align: center;
  font-weight: 500;
`;

export const CidadesArea = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
}))``;

export const CidadeBotao = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))``;

export const CidadeFoto = styled.ImageBackground.attrs(() => ({
  borderRadius: 5,
  resizeMode: "stretch",
}))`
  width: 350px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  shadow-opacity: 1;
  shadow-radius: 1px;
  shadow-color: black;
  shadow-offset: 0px 0px;
  elevation: 1;
`;

export const CidadeNome = styled.Text`
  color: ${palette.white};
  font-size: 25px;
  margin-left: 10px;
  text-shadow-radius: 5px;
  text-shadow-color: black;
  text-shadow-offset: 0px 0px;
`;
