import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";

import api from "../../api";

import { Container, LocalsArea, LocalFoto, LocalNome, LocalBotao, Cidade } from "./styles";

interface Local {
  id: number;
  name: string;
  image_url: string;
}

export default function Locais({ navigation, route }) {
  const [locals, setLocals] = useState<Local[]>([]);
  const [ready, setReady] = useState(false);
  const { city_id, city_name } = route.params;

  useEffect(() => {
    api
      .get<Local[]>(`local/city/${city_id}`)
      .then((res) => {
        setLocals(res.data);
        setReady(true);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return ready ? (
    <Container>
      <Cidade>{city_name}</Cidade>

      <LocalsArea>
        {locals.map((local) => (
          <LocalBotao
            key={local.id}
            onPress={() => navigation.navigate("Categorias", { local: "Visconde de Mauá" })}
          >
            <LocalFoto source={{ uri: local.image_url }}>
              <LocalNome>{local.name}</LocalNome>
            </LocalFoto>
          </LocalBotao>
        ))}
      </LocalsArea>
    </Container>
  ) : (
    <LottieView source={require("../../../assets/loading.json")} autoPlay loop />
  );
}
