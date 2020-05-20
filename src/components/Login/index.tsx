import React, { useState, useEffect } from "react";
import {
  AsyncStorage,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import api from "../../api";
import { Formik } from "formik";
import LottieView from "lottie-react-native";
import * as yup from "yup";

import Botao from "../Botao";

import {
  Container,
  Input,
  ViewInput,
  Texto,
  Erro,
  AreaInputs,
  Logo,
  LogoView,
  ViewBotao,
} from "./styles";
import global from "../../styles/global";
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
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

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
    setUser({ email, password });
    try {
      await api
        .post("/login", { email, password })
        .then(async (response) => {
          await AsyncStorage.setItem("token", response.data.token.toString());
          await AsyncStorage.setItem(
            "user_id",
            response.data.user_id.toString()
          );
          navigation.navigate("Main");
          setUser({ email: "", password: "" });
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
            <Logo
              source={require("../../../assets/LOGO.png")}
              resizeMode="contain"
            />
          </LogoView>
          <Formik
            initialValues={{ email: user.email, password: user.password }}
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
                    style={{
                      position: "absolute",
                      marginTop: 7,
                      paddingLeft: 6,
                    }}
                    color={global.text}
                  />
                  <Input
                    placeholder="Email"
                    placeholderTextColor={global.text}
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
                    style={{
                      position: "absolute",
                      marginTop: 7,
                      paddingLeft: 6,
                    }}
                    color={global.text}
                  />
                  <Input
                    placeholder="Senha"
                    placeholderTextColor={global.text}
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                    onBlur={props.handleBlur("password")}
                    secureTextEntry={showPassword ? false : true}
                    maxLength={50}
                  />
                  <TouchableWithoutFeedback
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Entypo
                      name={showPassword ? "eye-with-line" : "eye"}
                      size={25}
                      style={{
                        position: "absolute",
                        alignSelf: "flex-end",
                        marginTop: 7,
                        paddingRight: 6,
                      }}
                      color={global.text}
                    />
                  </TouchableWithoutFeedback>
                  <Erro>{props.touched.password && props.errors.password}</Erro>
                </ViewInput>
                <ViewBotao>
                  <Botao texto="Entrar" props={props.handleSubmit} />
                </ViewBotao>
                <Botao
                  texto="Fazer cadastro"
                  props={() => navigation.navigate("Cadastro")}
                />
                <TouchableOpacity onPress={null}>
                  <Texto>Esqueci minha senha</Texto>
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
