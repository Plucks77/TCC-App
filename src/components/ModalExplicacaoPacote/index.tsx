import React from "react";
import { Modal } from "react-native";
import { Container, Titulo, ViewExterna, ViewInterna, Texto, Botao, BotaoTexto } from "./styles";
import { FormattedMessage } from "react-intl";

interface props {
  visible: boolean;
  setShowModal(boolean);
}

const ModalExplicacaoPacote: React.FC<props> = ({ visible, setShowModal }) => {
  return (
    <Container>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <ViewExterna>
          <ViewInterna>
            <Titulo>
              <FormattedMessage id="message_wait" />
            </Titulo>
            <Texto>
              <FormattedMessage id="message_wait_text" />
            </Texto>
            <Botao onPress={() => setShowModal(false)}>
              <BotaoTexto>
                <FormattedMessage id="message_close" />
              </BotaoTexto>
            </Botao>
          </ViewInterna>
        </ViewExterna>
      </Modal>
    </Container>
  );
};

export default ModalExplicacaoPacote;
