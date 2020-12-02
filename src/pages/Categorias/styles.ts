import styled from "styled-components";
import { palette } from "../../styles/global";

export const Container = styled.View`
  flex: 1;
  background-color: ${palette.white};
`;

export const MenuContainer = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: ${palette.lightGray};
  border-bottom-width: 0.5px;
  border-bottom-color: gray;
`;

export const MenuNome = styled.Text`
  font-size: 18px;
`;

export const CategoriasContainer = styled.ScrollView``;

export const CategoriaContainer = styled.View`
  margin: 10px 10px;
  flex: 1;
`;

export const CategoriaNome = styled.Text`
  font-size: 24px;
  font-weight: 500;
  margin: 5px;
`;

export const PacoteContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  flex: 1;
  align-items: center;
  margin-bottom: 20px;
`;

export const PacoteFoto = styled.Image`
  width: 350px;
  height: 150px;
  border-radius: 5px;
  resize-mode: stretch;
`;

export const PacoteTextoNome = styled.Text`
  margin: 5px;
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  color: ${palette.white};
  position: absolute;
  left: 20px;
  top: 10px;
  text-shadow-radius: 5px;
  text-shadow-color: black;
  text-shadow-offset: 0px 0px;
`;

export const PacoteTextoValor = styled.Text`
  margin: 5px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${palette.white};
  position: absolute;
  right: 20px;
  bottom: 10px;
  text-shadow-radius: 5px;
  text-shadow-color: black;
  text-shadow-offset: 0px 0px;
`;