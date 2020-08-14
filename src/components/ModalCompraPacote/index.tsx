import React from "react";
import { Text, Modal, View, TouchableOpacity } from "react-native";

import { Container } from "./styles";

interface props {
  visible: boolean;
  setShowModal(boolean);
}

const ModalCompraPacote: React.FC<props> = ({ visible, setShowModal }) => {
  return (
    <Container>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text>Sucesso!</Text>
            <Text>Você pode ver seu pacote comprado no novo menu que surgiu ali embaixo! </Text>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default ModalCompraPacote;
