import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${global.background};
`;

export const Titulo = styled.Text`
  margin-top: 50px;
  font-size: 30px;
  text-align: center;
  color: ${global.text};
  font-weight: bold;
`;

export const CidadesArea = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const CidadeNome = styled.Text`
  font-size: 25px;
  color: ${global.text};
`;
