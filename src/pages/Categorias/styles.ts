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
