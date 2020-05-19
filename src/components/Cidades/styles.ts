import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${global.background};
`;

export const Titulo = styled.Text`
  margin-top: 50px;
  text-align: center;
  font-size: 30px;
  color: ${global.text};
  font-weight: bold;
`;

export const Local = styled.View`
  margin-top: 35px;
`;

export const Texto = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${global.text};
`;

export const Imagem = styled.Image`
  width: 350px;
  height: 150px;
  align-self: center;
  margin-top: 10px;
  border-radius: 5px;
`;
