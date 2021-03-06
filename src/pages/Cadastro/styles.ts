import styled from "styled-components/native";
import { palette } from "../../styles/global";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${palette.white};
`;

export const ScrollCampos = styled.ScrollView`
  margin-top: 50px;
`;

export const Campos = styled.KeyboardAvoidingView`
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => (props.aberto ? "300px" : "0px")};
`;

export const ViewInput = styled.View`
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  width: 310px;
  height: 40px;
  border-width: 2px;
  border-color: ${palette.secundary};
  color: ${palette.secundary};
  font-size: 20px;
  padding-left: 35px;
  border-radius: 10px;
`;
export const InputMask = {
  width: 310,
  height: 40,
  borderWidth: 2,
  borderColor: palette.secundary,
  color: palette.secundary,
  fontSize: 20,
  paddingLeft: 35,
  borderRadius: 10,
};

export const Erro = styled.Text`
  color: ${palette.error};
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
`;
