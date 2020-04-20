import React, { useState, useEffect } from "react";
import {
  AsyncStorage,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import api from "../../api";

import { Formik } from "formik";

import LottieView from "lottie-react-native";

import * as yup from "yup";

import {
  Container,
  Input,
  ViewInput,
  Botao,
  Texto,
  Erro,
  AreaInputs,
  Logo,
  LogoView,
} from "./styles";
///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const loginSchema = yup.object({
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
  password: yup
    .string()
    .required("A senha é necessária!")
    .min(8, "Sua senha tem pelo menos 8 dígitos!"),
});

export default function Login({ navigation }) {
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setReady(false);
    async function RemoveDados() {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user_id");
    }
    RemoveDados();
    setReady(true);
  }, []);

  async function login(email, password) {
    setReady(false);
    try {
      await api
        .post("/login", { email, password })
        .then(async (response) => {
          await AsyncStorage.setItem("token", response.data.token.toString());
          await AsyncStorage.setItem(
            "user_id",
            response.data.user_id.toString()
          );
          navigation.navigate("Principal", { screen: "Cidades" });
        })
        .catch((error) => {
          const erro = error.response.data[0].field;
          if (erro === "password") {
            Alert.alert("Oooops...", "Senha incorreta!");
          }
          if (erro === "email") {
            Alert.alert("Oooops...", "Verifique se digitou o email correto!");
          }
        });
    } catch (e) {
      console.log(e);
    }
    setReady(true);
  }

  return ready ? (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position">
          <LogoView>
            <Logo source={require("../../../assets/LOGO.png")} />
          </LogoView>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              login(values.email, values.password);
            }}
          >
            {(props) => (
              <AreaInputs>
                <ViewInput>
                  <MaterialIcons
                    name="email"
                    size={25}
                    style={{ position: "absolute" }}
                  />
                  <Input
                    placeholder="Email"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                    onBlur={props.handleBlur("email")}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    maxLength={50}
                  />
                  <Erro>{props.touched.email && props.errors.email}</Erro>
                </ViewInput>

                <ViewInput>
                  <MaterialIcons
                    name="lock"
                    size={25}
                    style={{ position: "absolute" }}
                  />
                  <Input
                    placeholder="Senha"
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                    onBlur={props.handleBlur("password")}
                    secureTextEntry={true}
                    maxLength={50}
                  />
                  <Erro>{props.touched.password && props.errors.password}</Erro>
                </ViewInput>
                <Botao onPress={props.handleSubmit}>
                  <Texto>Entrar</Texto>
                </Botao>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Cadastro")}
                >
                  <Texto style={{ fontWeight: "normal" }}>Cadastro</Texto>
                </TouchableOpacity>
              </AreaInputs>
            )}
          </Formik>
        </KeyboardAvoidingView>
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
