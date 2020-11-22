import React, { useState, useEffect } from "react";
import { View, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import LottieView from "lottie-react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { FormattedMessage, useIntl } from "react-intl";

import Botao from "../../components/Botao";
import { useAuth } from "../../contexts/auth";
import { palette } from "../../styles/global";

import { Container, Input, Campos, InputMask, Erro, ViewInput, ScrollCampos } from "./styles";

const cadastroSchema = yup.object({
  nome: yup
    .string()
    .required(((<FormattedMessage id="error_name_needed" />) as unknown) as string)
    .min(5, ((<FormattedMessage id="error_name_digits" />) as unknown) as string),
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
  senha: yup
    .string()
    .required(((<FormattedMessage id="error_password_needed" />) as unknown) as string)
    .min(8, ((<FormattedMessage id="error_password_valid" />) as unknown) as string),
  confirmaSenha: yup
    .string()
    .required(((<FormattedMessage id="error_confirm_password" />) as unknown) as string)
    .test(
      "passwords-match",
      ((<FormattedMessage id="error_passwords_match" />) as unknown) as string,
      function (value) {
        return this.parent.senha === value;
      }
    ),
  tel: yup
    .string()
    .required(((<FormattedMessage id="error_phone_needed" />) as unknown) as string)
    .min(14, ((<FormattedMessage id="error_phone_digits" />) as unknown) as string),
});

export default function Cadastro({ navigation }) {
  const [ready, setReady] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    nome: "",
    email: "",
    senha: "",
    conf_senha: "",
    tel: "",
  });
  const { register } = useAuth();
  const intl = useIntl();

  async function handleCadastro(nome, email, senha, conf_senha, tel) {
    setReady(false);
    setUser({ nome, email, senha, conf_senha, tel });

    const envtel = tel.replace(" ", "").replace("-", "").replace("(", "").replace(")", "");

    const response = await register(nome, email, senha, envtel);

    if (response === "user") {
      setReady(true);
      Alert.alert("Oooops...", intl.messages.error_user_already_registered as string);
    }
    if (response === "email") {
      setReady(true);
      Alert.alert("Oooops...", intl.messages.error_email_already_registered as string);
    }
  }
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true); // seta o state dizendo que o teclado ta aberto
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false); // seta o state dizendo que o teclado ta fechado
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return ready ? (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
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
                    <FontAwesome
                      name="user"
                      size={25}
                      style={{
                        position: "absolute",
                        marginTop: 8,
                        paddingLeft: 6,
                      }}
                      color={palette.secundary}
                    />
                    <Input
                      placeholder={intl.messages.profile_name}
                      placeholderTextColor={palette.secundary}
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
                    <MaterialIcons
                      name="email"
                      size={25}
                      style={{
                        position: "absolute",
                        marginTop: 8,
                        paddingLeft: 6,
                      }}
                      color={palette.secundary}
                    />
                    <Input
                      placeholder={intl.messages.profile_email}
                      placeholderTextColor={palette.secundary}
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
                    <MaterialIcons
                      name="lock"
                      size={25}
                      style={{
                        position: "absolute",
                        marginTop: 8,
                        paddingLeft: 6,
                      }}
                      color={palette.secundary}
                    />
                    <Input
                      placeholder={intl.messages.password}
                      placeholderTextColor={palette.secundary}
                      secureTextEntry={showPassword ? false : true}
                      value={props.values.senha}
                      onChangeText={props.handleChange("senha")}
                      onBlur={props.handleBlur("senha")}
                      clearTextOnFocus={false}
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
                          paddingRight: 7,
                        }}
                        color={palette.secundary}
                      />
                    </TouchableWithoutFeedback>
                    <Erro>{props.touched.senha && props.errors.senha}</Erro>
                  </ViewInput>

                  <ViewInput>
                    <MaterialIcons
                      name="lock"
                      size={25}
                      style={{
                        position: "absolute",
                        marginTop: 8,
                        paddingLeft: 6,
                      }}
                      color={palette.secundary}
                    />
                    <Input
                      placeholder={intl.messages.confirm_password}
                      placeholderTextColor={palette.secundary}
                      secureTextEntry={showPassword ? false : true}
                      value={props.values.confirmaSenha}
                      onChangeText={props.handleChange("confirmaSenha")}
                      onBlur={props.handleBlur("confirmaSenha")}
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
                          paddingRight: 7,
                        }}
                        color={palette.secundary}
                      />
                    </TouchableWithoutFeedback>
                    <Erro>{props.touched.confirmaSenha && props.errors.confirmaSenha}</Erro>
                  </ViewInput>

                  <ViewInput>
                    <MaterialIcons
                      name="local-phone"
                      size={25}
                      style={{
                        position: "absolute",
                        marginTop: 8,
                        paddingLeft: 6,
                      }}
                      color={palette.secundary}
                    />
                    <TextInputMask
                      type={"cel-phone"}
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                        dddMask: "(99) ",
                      }}
                      placeholder={intl.messages.profile_phone as string}
                      placeholderTextColor={palette.secundary}
                      maxLength={15}
                      value={props.values.tel}
                      onChangeText={props.handleChange("tel")}
                      onBlur={props.handleBlur("tel")}
                      style={InputMask}
                    />
                    <Erro>{props.touched.tel && props.errors.tel}</Erro>
                  </ViewInput>

                  <Botao
                    texto={intl.messages.register_user}
                    props={props.handleSubmit}
                    primary={true}
                  />
                </Campos>
              </ScrollCampos>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  ) : (
    <LottieView source={require("../../../assets/loading.json")} autoPlay loop />
  );
}
