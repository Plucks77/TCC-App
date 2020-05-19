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
  margin-bottom: 40px;
`;

export const AreaPacote = styled.View`
  height: 250px;
`;

export const Categoria = styled.Text`
  color: ${global.text};
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ScrollPacotes = styled.ScrollView``;

export const PacoteView = styled.View`
  flex-direction: column;
  margin-left: 10px;
  padding: 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${global.tab_menu_secundary};
  border-radius: 5px;
`;

export const FotoPacote = styled.Image`
  width: 350px;
  height: 150px;
  resize-mode: stretch;
  border-radius: 5px;
`;

export const PacoteTextoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const NomePacote = styled.Text`
  color: ${global.text};
  font-size: 16px;
`;

export const ValorPacote = styled.Text`
  color: ${global.text};
  font-size: 16px;
`;
