import styled from "styled-components/native";
import global from "../../styles/global";

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${global.background};
`;
export const Seta = styled.TouchableOpacity`
  flex: 1;
  margin-left: 10px;
`;
export const TituloArea = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const TextoArea = styled.View`
  margin: 5px;
  margin-bottom: 50px;
`;

export const Texto = styled.Text`
  font-size: 20px;
  color: ${global.text};
  text-align: center;
`;

export const ViewInput = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const BotaoArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Erro = styled.Text`
  color: ${global.error};
  font-weight: bold;
  color: crimson;
  text-align: center;
  margin-top: 5px;
`;

export const ViewEnviado = styled.View`
  flex: 1;
`;
