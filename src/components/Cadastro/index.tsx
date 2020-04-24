import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  AsyncStorage,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";
import LottieView from "lottie-react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { Entypo } from "@expo/vector-icons";
import global from "../../styles/global";
import Botao from "../Botao";
import api from "../../api";
import {
  Container,
  Input,
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
  const [user, setUser] = useState({
    nome: "",
    email: "",
    senha: "",
    conf_senha: "",
    tel: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  async function handleCadastro(nome, email, senha, conf_senha, tel) {
    setReady(false);
    setUser({ nome, email, senha, conf_senha, tel });

    const envtel = tel
      .replace(" ", "")
      .replace("-", "")
      .replace("(", "")
      .replace(")", "");
    try {
      await api
        .post("/register", {
          username: nome,
          email,
          password: senha,
          tel: envtel,
        })
        .then(async (response) => {
          await AsyncStorage.setItem("token", response.data.token.toString());
          await AsyncStorage.setItem(
            "user_id",
            response.data.user.id.toString()
          );
          navigation.navigate("Principal", { screen: "Cidades" });
          setUser({ nome: "", email: "", senha: "", conf_senha: "", tel: "" });
        })
        .catch((error) => {
          if (error.response.data.erro.constraint === "users_username_unique") {
            Alert.alert(
              "Oooops...",
              "Este nome de usuário já está cadastrado!"
            );
          }
          if (error.response.data.erro.constraint === "users_email_unique") {
            Alert.alert(
              "Oooops...",
              "Este endereço de e-mail já está cadastrado!"
            );
          }
        });
    } catch (e) {
      console.log(e);
    }
    setReady(true);
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <TituloArea>
            <Seta onPress={() => navigation.navigate("Login")}>
              <FontAwesome name="arrow-left" size={35} color={global.text} />
            </Seta>
            <Titulo>Cadastro</Titulo>
            <View style={{ flex: 1 }} />
          </TituloArea>

          <Formik
            initialValues={{
              nome: user.nome,
              email: user.email,
              senha: user.senha,
              confirmaSenha: user.conf_senha,
              tel: user.tel,
            }}
            validationSchema={cadastroSchema}
            onSubmit={(values, actions) => {
              handleCadastro(
                values.nome,
                values.email,
                values.senha,
                values.confirmaSenha,
                values.tel
              );
            }}
          >
            {(props) => (
              <ScrollCampos>
                <Campos aberto={isKeyboardVisible}>
                  <ViewInput>
                    <Input
                      placeholder="Nome"
                      placeholderTextColor={global.text}
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
                      placeholderTextColor={global.text}
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
                      placeholderTextColor={global.text}
                      secureTextEntry={showPassword ? false : true}
                      value={props.values.senha}
                      onChangeText={props.handleChange("senha")}
                      onBlur={props.handleBlur("senha")}
                      clearTextOnFocus={false}
                      maxLength={50}
                    />
                    <TouchableWithoutFeedback
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Entypo
                        name={showPassword ? "eye-with-line" : "eye"}
                        size={25}
                        style={{ position: "absolute", alignSelf: "flex-end" }}
                        color={global.text}
                      />
                    </TouchableWithoutFeedback>
                    <Erro>{props.touched.senha && props.errors.senha}</Erro>
                  </ViewInput>

                  <ViewInput>
                    <Input
                      placeholder="Confirme sua senha"
                      placeholderTextColor={global.text}
                      secureTextEntry={showPassword ? false : true}
                      value={props.values.confirmaSenha}
                      onChangeText={props.handleChange("confirmaSenha")}
                      onBlur={props.handleBlur("confirmaSenha")}
                      maxLength={50}
                    />
                    <TouchableWithoutFeedback
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Entypo
                        name={showPassword ? "eye-with-line" : "eye"}
                        size={25}
                        style={{ position: "absolute", alignSelf: "flex-end" }}
                        color={global.text}
                      />
                    </TouchableWithoutFeedback>
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
                      placeholderTextColor={global.text}
                      maxLength={15}
                      value={props.values.tel}
                      onChangeText={props.handleChange("tel")}
                      onBlur={props.handleBlur("tel")}
                      style={InputMask}
                    />
                    <Erro>{props.touched.tel && props.errors.tel}</Erro>
                  </ViewInput>

                  <Botao texto="Cadastrar" props={props.handleSubmit} />
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
