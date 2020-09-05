import React from "react";
import { Text, Modal, View, TouchableOpacity } from "react-native";

import { Container, Titulo, Texto, Botao, BotaoTexto, ViewExterna, ViewInterna } from "./styles";

interface props {
  visible: boolean;
  setShowModal(boolean);
}

const ModalCompraPacote: React.FC<props> = ({ visible, setShowModal }) => {
  return (
    <Container>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <ViewExterna>
          <ViewInterna>
            <Titulo>Sucesso!</Titulo>
            <Texto>Você pode ver seu pacote comprado no novo menu que surgiu ali embaixo! </Texto>
            <Botao onPress={() => setShowModal(false)}>
              <BotaoTexto>Fechar</BotaoTexto>
            </Botao>
          </ViewInterna>
        </ViewExterna>
      </Modal>
    </Container>
  );
};

export default ModalCompraPacote;
