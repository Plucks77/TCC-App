import React, { useState } from "react";
import { View, Text, Alert, AsyncStorage, Keyboard } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";
import LottieView from "lottie-react-native";

import api from "../../api";
import {
  Container,
  Input,
  Botao,
  TituloArea,
  Titulo,
  Campos,
  Seta,
  InputMask,
} from "./styles";

export default function Cadastro({ navigation }) {
  const [user, setUser] = useState({
    nome: "",
    email: "",
    senha: "",
    senha_conf: "",
    tel: "",
  });
  const [ready, setReady] = useState(true);
  let phoneField;

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
    setReady(false);
    const valido = handleState();
    if (valido === 1) {
      try {
        const { nome, email, senha } = user;
        const tel = phoneField.getRawValue();
        await api
          .post("/register", { username: nome, email, password: senha, tel })
          .then(async (response) => {
            await AsyncStorage.setItem("token", response.data.token.toString());
            await AsyncStorage.setItem(
              "user_id",
              response.data.user.id.toString()
            );
            limpaCampos();
            navigation.navigate("Principal", { screen: "Cidades" });
            setReady(true);
          })
          .catch((error) => {
            console.log(error.response);
          });
      } catch (e) {
        console.log(e);
        setReady(true);
      }
    } else if (valido === 2) {
      setReady(true);
      Alert.alert("Oooops...", "A senha e a confirmação devem ser iguais!");
    } else if (valido === 3) {
      setReady(true);
      Alert.alert("Oooops...", "Preencha todos os campos!");
    }
  }

  function limpaCampos() {
    setUser({ nome: "", email: "", senha: "", senha_conf: "", tel: "" });
  }

  return ready ? (
    <Container behavior="position" keyboardVerticalOffset={-150}>
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
          onChangeText={(v) => setUser({ ...user, nome: v })}
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={user.email}
          onChangeText={(v) => setUser({ ...user, email: v })}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={user.senha}
          onChangeText={(v) => setUser({ ...user, senha: v })}
        />
        <Input
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          value={user.senha_conf}
          onChangeText={(v) => setUser({ ...user, senha_conf: v })}
        />

        <TextInputMask
          type={"cel-phone"}
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) ",
          }}
          placeholder="Telefone"
          maxLength={15}
          value={user.tel}
          onChangeText={(v) => {
            setUser({ ...user, tel: v });
            if (v.length === 15) {
              Keyboard.dismiss();
            }
          }}
          ref={(ref) => (phoneField = ref)}
          style={InputMask}
        />
      </Campos>

      <Botao onPress={handleSubmit}>
        <Text style={{ fontWeight: "bold" }}>Cadastrar</Text>
      </Botao>
    </Container>
  ) : (
    <LottieView
      source={require("../../../assets/loading.json")}
      autoPlay
      loop
    />
  );
}
