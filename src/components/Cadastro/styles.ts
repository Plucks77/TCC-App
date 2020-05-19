import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${global.background};
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
  color: ${global.text};
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
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  width: 310px;
  height: 40px;
  border-width: 2px;
  border-color: ${global.button};
  color: ${global.text};
  font-size: 20px;
  padding-left: 15px;
  border-radius: 10px;
`;
export const InputMask = {
  width: 310,
  height: 40,
  borderWidth: 2,
  borderColor: global.button,
  color: global.text,
  fontSize: 20,
  paddingLeft: 15,
  borderRadius: 10,
};

export const Erro = styled.Text`
  color: ${global.error};
  font-weight: bold;
  color: crimson;
  text-align: center;
  margin-top: 5px;
`;
