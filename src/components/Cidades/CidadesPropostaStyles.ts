import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {},
}))``;

export const CidadesContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const CidadeContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Imagem = styled.ImageBackground.attrs(() => ({
  borderRadius: 25,
  resizeMode: "stretch",
}))`
  width: 350px;
  height: 200px;
  flex-direction: column;

  shadow-opacity: 1;
  shadow-radius: 1px;
  shadow-color: black;
  shadow-offset: 0px 0px;
  elevation: 1;
`;

export const CidadeNome = styled.Text`
  color: white;
  flex: 2;
  margin-top: 50px;
  font-size: 25px;
  margin-left: 10px;
  text-shadow-radius: 5px;
  text-shadow-color: black;
  text-shadow-offset: 0px 0px;
`;

export const SetaContainer = styled.View`
  background: rgba(108, 134, 140, 0.15);
  width: 350px;
  height: 80px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const DescricaoContainer = styled.View`
  width: 350px;
  background: rgba(78, 140, 15, 0.9);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-top: 25px;
  margin-top: -20px;
  z-index: -5;
`;

export const DescricaoTexto = styled.Text`
  color: white;
  padding: 10px;
`;

export const DescricaoBotao = styled.TouchableOpacity`
  width: 350px;
  height: 30px;
  border-radius: 5px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background: rgba(78, 140, 15, 1);
`;

export const DescricaoBotaoTexto = styled.Text`
  color: white;
  font-weight: bold;
`;
