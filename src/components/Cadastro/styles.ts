import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #f5f9e9;
`;

export const TituloArea = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const Titulo = styled.Text`
  flex: 2;
  font-size: 35px;
  font-weight: bold;
`;

export const Seta = styled.TouchableOpacity`
  flex: 1;
  margin-left: 10px;
`;

export const ScrollCampos = styled.ScrollView``;

export const Campos = styled.KeyboardAvoidingView`
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => (props.aberto ? "300px" : "0px")};
`;

export const ViewInput = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 300px;
  border-bottom-width: 1px;
  border-bottom-color: #36453b;
  color: #36453b;
  font-size: 20px;
  padding-left: 10px;
`;
export const InputMask = {
  width: 300,
  borderBottomWidth: 1,
  borderBottomColor: "#36453b",
  color: "#36453b",
  fontSize: 20,
  paddingLeft: 10,
};

export const Botao = styled.TouchableOpacity`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  background-color: #c4c4c4;
  align-items: center;
  justify-content: center;
  align-self: center;
  z-index: 10;
`;

export const Erro = styled.Text`
  color: #36453b;
  font-weight: bold;
  color: crimson;
  text-align: center;
  margin-top: 5px;
`;
