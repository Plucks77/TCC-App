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
  margin-bottom: 5px;
`;

export const Cidade = styled.Text`
  font-size: 15px;
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
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
`;

export const ScrollPacotes = styled.ScrollView`
  margin: 0 10px;
`;

export const PacoteView = styled.View`
  flex-direction: column;
  margin-left: 10px;
  padding: 10px 10px 5px 10px;
  background: ${global.buttonLight};
  border-radius: 5px;
  border: 2px solid ${global.button};
  width: 300px;
`;

export const FotoPacote = styled.Image`
  align-self: center;
  width: 250px;
  height: 150px;
  resize-mode: stretch;
  border-radius: 5px;
`;

export const PacoteTextoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const PacoteTexto = styled.Text`
  color: ${global.text};
  font-size: 16px;
`;
