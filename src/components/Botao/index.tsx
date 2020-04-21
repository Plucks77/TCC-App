import React from "react";

import { BotaoCorpo, BotaoTexto } from "./styles";

export default function Botao({ texto }) {
  return (
    <BotaoCorpo>
      <BotaoTexto>{texto}</BotaoTexto>
    </BotaoCorpo>
  );
}
