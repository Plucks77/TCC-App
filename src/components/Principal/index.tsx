import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Container } from "./styles";

export default function Principal({ navigation }) {
  return (
    <Container>
      <TouchableOpacity
        style={{ position: "absolute", top: 40, left: 15 }}
        onPress={() => navigation.toggleDrawer()}
      >
        <Entypo name="menu" size={40} />
      </TouchableOpacity>
      <Text>Principal</Text>
    </Container>
  );
}
