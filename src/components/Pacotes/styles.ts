import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #f5f9e9;
`;

export const Titulo = styled.Text`
  margin-top: 50px;
  font-size: 30px;
  text-align: center;
  color: #36453b;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const AreaPacote = styled.View`
  height: 250px;
`;

export const Categoria = styled.Text`
  color: #36453b;
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ScrollPacotes = styled.ScrollView``;

export const PacoteView = styled.View`
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`;

export const FotoPacote = styled.Image`
  width: 350px;
  height: 150px;
  resize-mode: stretch;
`;

export const PacoteTextoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const NomePacote = styled.Text`
  color: #36453b;
  font-size: 16px;
`;

export const ValorPacote = styled.Text`
  color: #36453b;
  font-size: 16px;
`;
