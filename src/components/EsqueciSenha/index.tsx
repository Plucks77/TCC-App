import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";

import api from "../../api";
import Botao from "../Botao";
import global from "../../styles/global";
import {
  Container,
  TituloArea,
  Seta,
  TextoArea,
  Texto,
  BotaoArea,
  ViewInput,
  Input,
  Erro,
  ViewEnviado,
} from "./styles";

const emailSchema = yup.object({
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
});

export default function EsqueciSenha({ navigation }) {
  const [enviado, setEnviado] = useState(false);
  const [endereco, setEndereco] = useState("");

  async function handleEnviar(email) {
    await api
      .post("/forgotpassword", { email })
      .then(() => {
        setEndereco(email);
        setEnviado(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <Container>
      {!enviado ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position">
            <TituloArea>
              <Seta onPress={() => navigation.navigate("Login")}>
                <FontAwesome name="arrow-left" size={35} color={global.text} />
              </Seta>
              <View style={{ flex: 2 }} />
            </TituloArea>
            <TextoArea>
              <Texto>
                Informe o endereço de e-mail da conta cadastrada para que
                possamos enviar um link de redefinição de senha
              </Texto>
            </TextoArea>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={emailSchema}
              onSubmit={(values, actions) => {
                actions.resetForm();
                handleEnviar(values.email);
              }}
            >
              {(props) => (
                <>
                  <ViewInput>
                    <Input
                      placeholder="Email"
                      placeholderTextColor={global.text}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      maxLength={50}
                      onChangeText={props.handleChange("email")}
                      value={props.values.email}
                      onBlur={props.handleBlur("email")}
                    />
                    <Erro>{props.touched.email && props.errors.email}</Erro>
                  </ViewInput>
                  <BotaoArea>
                    <Botao texto="Enviar" props={props.handleSubmit} />
                  </BotaoArea>
                </>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      ) : (
        <ViewEnviado>
          <TituloArea>
            <Seta onPress={() => navigation.navigate("Login")}>
              <FontAwesome name="arrow-left" size={35} color={global.text} />
            </Seta>
            <View style={{ flex: 2 }} />
          </TituloArea>
          <Texto>
            Enviamos um e-mail para o endereço {endereco} contendo as
            informações para redefinir a senha.
          </Texto>
        </ViewEnviado>
      )}
    </Container>
  );
}
