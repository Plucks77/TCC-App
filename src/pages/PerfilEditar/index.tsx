import React, { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { useAuth } from "../../contexts/auth";
import api from "../../api";
import Botao from "../../components/Botao";

import { Container, ViewInfos, Texto, Input, BotaoArea } from "./styles";

interface User {
  id: string;
  username: string;
  tel: string;
}

export default function PerfilEditar({ navigation, route }) {
  const [user, setUser] = useState<User>();
  const { user: user_id } = useAuth();

  useEffect(() => {
    setUser(route.params.user);
  }, []);

  async function handleSalvar() {
    const newTel = user.tel.replace("(", "").replace(")", "").replace(" ", "");
    user.tel = newTel;
    api
      .put(`/user/edit/${user_id}`, user)
      .then((res) => {
        if (res.status === 200) {
          navigation.navigate("Perfil", { updatedUser: true });
        }
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <Container>
      <ViewInfos>
        <Texto>Nome:</Texto>
        <Input
          autoCapitalize="words"
          value={user?.username}
          onChangeText={(t) => setUser({ ...user, username: t })}
        />
        <Texto>Telefone:</Texto>
        <Input
          keyboardType="phone-pad"
          value={user?.tel}
          onChangeText={(t) => setUser({ ...user, tel: t })}
        />
      </ViewInfos>

      <BotaoArea>
        <Botao texto="Salvar" props={() => handleSalvar()} primary={true} />
      </BotaoArea>
    </Container>
  );
}
