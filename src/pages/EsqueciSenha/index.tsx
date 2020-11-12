import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import LottieView from "lottie-react-native";

import api from "../../api";
import Botao from "../../components/Botao";
import { palette } from "../../styles/global";
import {
  Container,
  TextoArea,
  Texto,
  BotaoArea,
  ViewInput,
  Input,
  Erro,
  ViewEnviado,
  Campos,
} from "./styles";

const emailSchema = yup.object({
  email: yup
    .string()
    .required("O endereço de email é necessário!")
    .test("valida-email", "Por favor, digite um enderço de email válido!", (val) => {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(val);
    }),
});

export default function EsqueciSenha({ navigation }) {
  const [enviado, setEnviado] = useState(false);
  const [endereco, setEndereco] = useState("");
  const [ready, setReady] = useState(true);

  async function handleEnviar(email) {
    await api
      .post("/forgotpassword", { email })
      .then(() => {
        setEndereco(email);
        setEnviado(true);
        setReady(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return ready ? (
    <Container>
      {!enviado ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position">
            <TextoArea>
              <Texto>
                Informe o endereço de e-mail da conta cadastrada para que possamos enviar um link de
                redefinição de senha
              </Texto>
            </TextoArea>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={emailSchema}
              onSubmit={(values, actions) => {
                setReady(false);
                actions.resetForm();
                handleEnviar(values.email);
              }}
            >
              {(props) => (
                <Campos>
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
                      placeholder="Email"
                      placeholderTextColor={palette.secundary}
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
                    <Botao texto="Enviar" props={props.handleSubmit} primary={true} />
                  </BotaoArea>
                </Campos>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      ) : (
        <ViewEnviado>
          <Texto>
            Enviamos um e-mail para o endereço {endereco} contendo as informações para redefinir a
            senha.
          </Texto>
        </ViewEnviado>
      )}
    </Container>
  ) : (
    <LottieView source={require("../../../assets/loading.json")} autoPlay loop />
  );
}
