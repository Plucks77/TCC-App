import React from "react";
import { Text, Modal, View, TouchableOpacity } from "react-native";
import { FormattedMessage } from "react-intl";

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
            <Titulo>
              <FormattedMessage id="message.success" />
            </Titulo>
            <Texto>
              <FormattedMessage id="message.menu" />
            </Texto>
            <Botao onPress={() => setShowModal(false)}>
              <BotaoTexto>
                <FormattedMessage id="message.close" />
              </BotaoTexto>
            </Botao>
          </ViewInterna>
        </ViewExterna>
      </Modal>
    </Container>
  );
};

export default ModalCompraPacote;
