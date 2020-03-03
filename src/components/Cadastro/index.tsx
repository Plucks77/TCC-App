import React, { useState, useEffect } from "react";
import { View, Text, SegmentedControlIOSComponent } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import api from "../../api";
import {
  Container,
  Input,
  Botao,
  TituloArea,
  Titulo,
  Campos,
  Seta
} from "./styles";

export default function Cadastro({ navigation }) {
  const [user, setUser] = useState({
    nome: "",
    email: "",
    senha: "",
    senha_conf: "",
    tel: ""
  });
  const [ready, setReady] = useState(true);

  function handleState() {
    if (
      user.email !== "" &&
      user.nome !== "" &&
      user.senha !== "" &&
      user.senha_conf !== "" &&
      user.tel !== ""
    ) {
      if (user.senha === user.senha_conf) {
        return 1; //valido
      } else {
        return 2; //senhas nao combinam
      }
    }
    return 3; //nem tudo esta preenchido
  }

  async function handleSubmit() {
    const valido = handleState();
    if (valido === 1) {
      try {
        const { nome, email, senha, tel } = user;
        await api
          .post("/register", { nome, email, senha, tel })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error.response);
          });
      } catch (e) {
        console.log(e);
      }
    } else if (valido === 2) {
      console.log("Senhas não combinam");
    } else if (valido === 3) {
      console.log("Preencha tudo!");
    }
  }

  return (
    <Container>
      <TituloArea>
        <Seta onPress={() => navigation.navigate("Login")}>
          <FontAwesome name="arrow-left" size={35} />
        </Seta>
        <Titulo>Cadastro</Titulo>
        <View style={{ flex: 1 }} />
      </TituloArea>

      <Campos>
        <Input
          placeholder="Nome"
          autoCapitalize="words"
          autoCorrect={false}
          value={user.nome}
          onChangeText={v => setUser({ ...user, nome: v })}
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={user.email}
          onChangeText={v => setUser({ ...user, email: v })}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={user.senha}
          onChangeText={v => setUser({ ...user, senha: v })}
        />
        <Input
          placeholder="Confirme a senha"
          secureTextEntry={true}
          value={user.senha_conf}
          onChangeText={v => setUser({ ...user, senha_conf: v })}
        />
        <Input
          placeholder="Telefone"
          keyboardType="number-pad"
          value={user.tel}
          onChangeText={v => setUser({ ...user, tel: v })}
        />
      </Campos>

      <Botao onPress={handleSubmit}>
        <Text>Cadastrar</Text>
      </Botao>
    </Container>
  );
}
