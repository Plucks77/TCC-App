import styled from "styled-components";
import { palette } from "../../styles/global";

export const Container = styled.ScrollView.attrs(() => ({}))`
  flex: 1;
  color: ${palette.white};
`;

export const PacoteContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  margin-top: 10px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const Foto = styled.Image`
  width: 350px;
  height: 200px;
  border-radius: 5px;
`;

export const Nome = styled.Text`
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: 30%;
  left: 25px;
  color: ${palette.white};
  text-shadow-radius: 5px;
  text-shadow-color: black;
  text-shadow-offset: 0px 0px;
`;

export const Data = styled.Text`
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  right: 25px;
  color: ${palette.white};
  text-shadow-radius: 5px;
  text-shadow-color: black;
  text-shadow-offset: 0px 0px;
`;
