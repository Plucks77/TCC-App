import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${global.background};
  align-items: center;
  justify-content: center;
`;

export const Texto = styled.Text`
  color: ${global.text};
  font-weight: normal;
  margin-top: 15px;
`;
