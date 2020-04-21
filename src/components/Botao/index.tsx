import React from "react";

import { BotaoCorpo, BotaoTexto } from "./styles";

export default function Botao({ texto, props }) {
  return (
    <BotaoCorpo onPress={props}>
      <BotaoTexto>{texto}</BotaoTexto>
    </BotaoCorpo>
  );
}
