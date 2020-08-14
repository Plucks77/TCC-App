import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useAuth } from "../../contexts/auth";
import api from "../../api";

const Compras: React.FC = () => {
  const [compras, setCompras] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    api.get(`/purchases/user/${user}`).then((res) => {
      setCompras(res.data);
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {compras.map((pacote, i) => (
        <Text key={i}>{pacote.pacote_id}</Text>
      ))}
    </View>
  );
};

export default Compras;
