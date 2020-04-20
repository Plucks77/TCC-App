import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Alert,
  AsyncStorage,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";
import LottieView from "lottie-react-native";
import { Formik, replace } from "formik";
import * as yup from "yup";

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
  Erro,
  ViewInput,
  ScrollCampos,
} from "./styles";

const cadastroSchema = yup.object({
  nome: yup
    .string()
    .required("Seu nome é necessário!")
    .min(5, "Seu nome deve ter pelo menos 5 dígitos!"),
  email: yup
    .string()
    .required("O endereço de email é necessário!")
    .test(
      "valida-email",
      "Por favor, digite um enderço de email válido!",
      (val) => {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(val);
      }
    ),
  senha: yup
    .string()
    .required("A senha é necessária!")
    .min(8, "Sua senha tem pelo menos 8 dígitos!"),
  confirmaSenha: yup
    .string()
    .required("Confirme sua senha digitando a mesma de cima!")
    .test("passwords-match", "Verifique se digitou a mesma senha!", function (
      value
    ) {
      return this.parent.senha === value;
    }),
  tel: yup
    .string()
    .required("Seu telefone é necessário!")
    .min(14, "Seu telefone deve ter pelo menos 10 dígitos"),
});

export default function Cadastro({ navigation }) {
  const [ready, setReady] = useState(true);

  async function handleCadastro(nome, email, senha, tel) {
    setReady(false);
    try {
      await api
        .post("/register", { username: nome, email, password: senha, tel })
        .then(async (response) => {
          await AsyncStorage.setItem("token", response.data.token.toString());
          await AsyncStorage.setItem(
            "user_id",
            response.data.user.id.toString()
          );
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
  }
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // seta o state dizendo que o teclado ta aberto
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // seta o state dizendo que o teclado ta fechado
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return ready ? (
    <Container>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <TituloArea>
            <Seta onPress={() => navigation.navigate("Login")}>
              <FontAwesome name="arrow-left" size={35} />
            </Seta>
            <Titulo>Cadastro</Titulo>
            <View style={{ flex: 1 }} />
          </TituloArea>

          <Formik
            initialValues={{
              nome: "",
              email: "",
              senha: "",
              confirmaSenha: "",
              tel: "",
            }}
            validationSchema={cadastroSchema}
            onSubmit={(values, actions) => {
              const tel = values.tel
                .replace(" ", "")
                .replace("-", "")
                .replace("(", "")
                .replace(")", "");
              handleCadastro(values.nome, values.email, values.senha, tel);
            }}
          >
            {(props) => (
              <ScrollCampos>
                <Campos aberto={isKeyboardVisible}>
                  <ViewInput>
                    <Input
                      placeholder="Nome"
                      autoCapitalize="words"
                      autoCorrect={false}
                      value={props.values.nome}
                      onChangeText={props.handleChange("nome")}
                      onBlur={props.handleBlur("nome")}
                      maxLength={50}
                    />
                    <Erro>{props.touched.nome && props.errors.nome}</Erro>
                  </ViewInput>

                  <ViewInput>
                    <Input
                      placeholder="Email"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={props.values.email}
                      onChangeText={props.handleChange("email")}
                      onBlur={props.handleBlur("email")}
                      maxLength={50}
                    />
                    <Erro>{props.touched.email && props.errors.email}</Erro>
                  </ViewInput>

                  <ViewInput>
                    <Input
                      placeholder="Senha"
                      secureTextEntry={true}
                      value={props.values.senha}
                      onChangeText={props.handleChange("senha")}
                      onBlur={props.handleBlur("senha")}
                      maxLength={50}
                    />
                    <Erro>{props.touched.senha && props.errors.senha}</Erro>
                  </ViewInput>

                  <ViewInput>
                    <Input
                      placeholder="Confirme sua senha"
                      secureTextEntry={true}
                      value={props.values.confirmaSenha}
                      onChangeText={props.handleChange("confirmaSenha")}
                      onBlur={props.handleBlur("confirmaSenha")}
                      maxLength={50}
                    />
                    <Erro>
                      {props.touched.confirmaSenha &&
                        props.errors.confirmaSenha}
                    </Erro>
                  </ViewInput>

                  <ViewInput>
                    <TextInputMask
                      type={"cel-phone"}
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                        dddMask: "(99) ",
                      }}
                      placeholder="Telefone"
                      maxLength={15}
                      value={props.values.tel}
                      onChangeText={props.handleChange("tel")}
                      onBlur={props.handleBlur("tel")}
                      style={InputMask}
                    />
                    <Erro>{props.touched.tel && props.errors.tel}</Erro>
                  </ViewInput>

                  <Botao onPress={props.handleSubmit}>
                    <Text style={{ fontWeight: "bold" }}>Cadastrar</Text>
                  </Botao>
                </Campos>
              </ScrollCampos>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  ) : (
    <LottieView
      source={require("../../../assets/loading.json")}
      autoPlay
      loop
    />
  );
}
