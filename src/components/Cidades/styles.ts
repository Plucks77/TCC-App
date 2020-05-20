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
  align-self: center;
  margin-top: 35px;
  background: rgba(129, 139, 231, 0.5);
  border-color: rgba(129, 139, 231, 1);
  border-width: 2px;
  border-radius: 10px;
  width: 370px;
  height: 210px;
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
