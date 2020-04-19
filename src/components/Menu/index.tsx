import React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Menu({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 50,
        left: 1,
        zIndex: 1,
      }}
      onPress={() => navigation.toggleDrawer()}
    >
      <Entypo name="menu" size={40} color="#36453b" />
    </TouchableOpacity>
  );
}