import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: yellow;
`;

export const PacoteContainer = styled.View`
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
  color: white;
  shadow-opacity: 1;
  shadow-radius: 1px;
  shadow-color: black;
  shadow-offset: 0px 0px;
`;

export const Data = styled.Text`
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  right: 25px;
  color: white;
  shadow-opacity: 1;
  shadow-radius: 1px;
  shadow-color: black;
  shadow-offset: 0px 0px;
`;
