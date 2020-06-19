import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.View`
  flex: 1;
  background-color: ${global.background};
`;
export const Header = styled.View`
  background: rgba(78, 140, 15, 0.9);
  height: 70px;
  justify-content: center;
  border: 2px solid rgba(78, 140, 15, 1);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  shadow-opacity: 1;
  shadow-radius: 5px;
  shadow-color: black;
  shadow-offset: 0px 0px;
  margin-bottom: 30px;
`;

export const Titulo = styled.Text`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: 28px;
  padding-top: 10px;
`;

export const CidadesContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

export const CidadeContainer = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
`;

export const Imagem = styled.ImageBackground.attrs(() => ({
  borderRadius: 25,
  resizeMode: "stretch",
}))`
  width: 350px;
  height: 200px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  shadow-opacity: 1;
  shadow-radius: 1px;
  shadow-color: black;
  shadow-offset: 0px 0px;
  elevation: 1;
`;

export const CidadeNome = styled.Text`
  color: white;
  font-size: 25px;
  margin-left: 10px;
  text-shadow-radius: 5px;
  text-shadow-color: black;
  text-shadow-offset: 0px 0px;
`;

export const SetaContainer = styled.View`
  background: rgba(108, 134, 140, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 100px;
  height: 200px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
