import React from "react";
import { Modal } from "react-native";
import { Container, Titulo, ViewExterna, ViewInterna, Texto, Botao, BotaoTexto } from "./styles";

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
            <Titulo>Aguarde!</Titulo>
            <Texto>
              No dia do pacote, quando clicar aqui você verá opções como escanear seu códio QR Code!
            </Texto>
            <Botao onPress={() => setShowModal(false)}>
              <BotaoTexto>Fechar</BotaoTexto>
            </Botao>
          </ViewInterna>
        </ViewExterna>
      </Modal>
    </Container>
  );
};

export default ModalExplicacaoPacote;
