import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.View`
  flex: 1;
  background-color: ${global.background};
`;

export const TituloContainer = styled.View`
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
`;

export const Seta = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Titulo = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${global.text};
  text-align: center;
  flex: 2;
  margin-left: -10px;
`;

export const OpcoesContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const Opcao = styled.TouchableOpacity`
  background: ${global.buttonLight};
  border: 2px solid ${global.button};
  border-radius: 20px;
  width: 300px;
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

export const Icone = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Texto = styled.Text`
  color: ${global.text};
  font-weight: 500;
  font-size: 24px;
  flex: 2;
  margin-left: -10px;
`;
