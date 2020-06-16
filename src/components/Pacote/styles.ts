import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${global.background};
`;

export const TituloContainer = styled.View`
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 5px;
`;

export const Seta = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const Share = styled.TouchableOpacity`
  margin-right: 5px;
`;

export const Titulo = styled.Text`
  font-size: 30px;
  text-align: center;
  color: ${global.text};
  font-weight: bold;
  margin-left: -5px;
  margin-right: -5px;
  flex: 2;
`;

export const Cidade = styled.Text`
  text-align: center;
  color: ${global.text};
  font-weight: 500;
  margin-bottom: 40px;
`;

export const ScrollFotos = styled.ScrollView``;

export const ViewFotos = styled.View`
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Imagem = styled.Image`
  width: 330px;
  height: 150px;
  resize-mode: stretch;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
`;

export const Campo = styled.View`
  margin-bottom: 5px;
`;
export const CampoTitulo = styled.Text`
  font-weight: 500;
  font-size: 24px;
  padding-left: 20px;
  margin-bottom: 5px;
  color: ${global.text};
`;

export const TextoContainer = styled.View`
  padding: 10px 10px 10px 60px;
  background: ${global.buttonLight};
  border: 2px solid ${global.button};
  border-left-width: 0;
  margin-right: 40px;
  margin-left: -40px;
  border-radius: 30px;
`;

export const CampoTexto = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: ${global.text};
`;

export const ViewBotao = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;
