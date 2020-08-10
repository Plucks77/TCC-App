import styled from "styled-components/native";
import global, { palette } from "../../styles/global";

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {},
}))``;

export const CidadesContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

export const CidadeContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Imagem = styled.ImageBackground.attrs(() => ({
  borderRadius: 5,
  resizeMode: "stretch",
}))`
  width: 350px;
  height: 200px;
  flex-direction: column;
  z-index: 10;
  shadow-opacity: 1;
  shadow-radius: 1px;
  shadow-color: black;
  shadow-offset: 0px 0px;
  elevation: 1;
`;

export const CidadeNome = styled.Text`
  color: white;
  flex: 1;
  margin-top: 50px;
  font-size: 25px;
  margin-left: 10px;
  text-shadow-radius: 5px;
  text-shadow-color: black;
  text-shadow-offset: 0px 0px;
`;

export const SetaContainer = styled.View`
  width: 350px;
  height: 80px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const DescricaoContainer = styled.View`
  width: 350px;
  background: ${palette.lightGray};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-top: 5px;
  z-index: 5;
`;

export const DescricaoTexto = styled.Text`
  color: #122624;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  padding: 10px;
`;

export const DescricaoBotao = styled.TouchableOpacity`
  width: 350px;
  height: 30px;
  border-radius: 5px;
  align-self: center;
  flex-direction: row;
  background: rgba(78, 140, 15, 1);
`;

export const DescricaoBotaoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const DescricaoBotaoTexto = styled.Text`
  color: white;
  font-weight: bold;
  flex: 1;
  text-align: center;
  margin-left: 10px;
`;

export const DescricaoBotaoIcone = styled.View`
  margin-right: 10px;
`;
