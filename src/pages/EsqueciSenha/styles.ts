import styled from "styled-components";
import { palette } from "../../styles/global";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${palette.white};
`;

export const TextoArea = styled.View`
  margin: 5px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Texto = styled.Text`
  font-size: 20px;
  color: ${palette.secundary};
  text-align: center;
`;

export const Campos = styled.KeyboardAvoidingView`
  align-items: center;
  justify-content: center;
`;

export const ViewInput = styled.View`
  flex-direction: column;
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

export const BotaoArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Erro = styled.Text`
  color: ${palette.error};
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
`;

export const ViewEnviado = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
