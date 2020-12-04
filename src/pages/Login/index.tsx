import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FormattedMessage, useIntl } from "react-intl";

import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { Formik } from "formik";
import LottieView from "lottie-react-native";
import * as yup from "yup";

import { useAuth } from "../../contexts/auth";
import { useLanguage } from "../../contexts/language";
import Botao from "../../components/Botao";
import { palette } from "../../styles/global";

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
  LogoBandeira,
  AreaBandeiras,
} from "./styles";

///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const loginSchema = yup.object({
  email: yup
    .string()
    .required(((<FormattedMessage id="error_email_needed" />) as unknown) as string)
    .test(
      "valida-email",
      ((<FormattedMessage id="error_email_valid" />) as unknown) as string,
      (val) => {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(val);
      }
    ),
  password: yup
    .string()
    .required(((<FormattedMessage id="error_password_needed" />) as unknown) as string)
    .min(8, ((<FormattedMessage id="error_password_valid" />) as unknown) as string),
});

export default function Login({ navigation }) {
  const { signIn } = useAuth();
  const { selectLang } = useLanguage();
  const intl = useIntl();

  function handleLanguageChange(language) {
    selectLang(language);
  }

  const [ready, setReady] = useState(true);
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  async function login(email, password) {
    setReady(false);
    setUser({ email, password });
    const response = await signIn(email, password);

    if (response === "email") {
      setReady(true);
      Alert.alert("Oooops...", intl.messages.error_wrong_email as string);
    }
    if (response === "password") {
      setReady(true);
      Alert.alert("Oooops...", intl.messages.error_wrong_password as string);
    }
  }

  return ready ? (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position">
          <LogoView>
            <Logo source={require("../../../assets/LOGO.png")} resizeMode="contain" />
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
                    color={palette.secundary}
                  />
                  <Input
                    placeholder={intl.messages.profile_email}
                    placeholderTextColor={palette.secundary}
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
                    color={palette.secundary}
                  />
                  <Input
                    placeholder={intl.messages.password}
                    placeholderTextColor={palette.secundary}
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                    onBlur={props.handleBlur("password")}
                    secureTextEntry={showPassword ? false : true}
                    maxLength={50}
                  />
                  <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
                    <Entypo
                      name={showPassword ? "eye-with-line" : "eye"}
                      size={25}
                      style={{
                        position: "absolute",
                        alignSelf: "flex-end",
                        marginTop: 7,
                        paddingRight: 6,
                      }}
                      color={palette.secundary}
                    />
                  </TouchableWithoutFeedback>
                  <Erro>{props.touched.password && props.errors.password}</Erro>
                </ViewInput>
                <ViewBotao>
                  <Botao texto={intl.messages.login} props={props.handleSubmit} primary={true} />
                </ViewBotao>
                <Botao
                  texto={intl.messages.register}
                  props={() => navigation.navigate("Cadastro")}
                  primary={false}
                />
                <TouchableOpacity onPress={() => navigation.navigate("Esqueci minha senha")}>
                  <Texto>{intl.messages.forgot_password}</Texto>
                </TouchableOpacity>
                <AreaBandeiras>
                  <TouchableOpacity onPress={() => handleLanguageChange("pt-BR")}>
                    <LogoBandeira source={require("../../../assets/bandeiras/brasil.png")} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => handleLanguageChange("en-US")}>
                    <LogoBandeira source={require("../../../assets/bandeiras/usa.png")} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => handleLanguageChange("sp-ES")}>
                    <LogoBandeira source={require("../../../assets/bandeiras/espanha.png")} />
                  </TouchableOpacity>
                </AreaBandeiras>
              </AreaInputs>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  ) : (
    <LottieView source={require("../../../assets/loading.json")} autoPlay loop />
  );
}
