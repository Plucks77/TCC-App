import React, { useState, useEffect } from "react";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { FormattedMessage } from "react-intl";

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
  navigation.setOptions({ title: <FormattedMessage id="screen_choose_local" /> });

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
            onPress={() =>
              navigation.navigate("Categorias", { local_id: local.id, local_name: local.name })
            }
          >
            <LocalFoto source={{ uri: local.image_url }}>
              <LocalNome>{local.name}</LocalNome>
            </LocalFoto>
          </LocalBotao>
        ))}
      </LocalsArea>
    </Container>
  ) : (
    <>
      <ShimmerPlaceHolder
        autoRun={true}
        style={{
          width: 350,
          height: 110,
          backgroundColor: "lightgray",
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
      <ShimmerPlaceHolder
        autoRun={true}
        style={{
          width: 350,
          height: 110,
          backgroundColor: "lightgray",
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
      <ShimmerPlaceHolder
        autoRun={true}
        style={{
          width: 350,
          height: 110,
          backgroundColor: "lightgray",
          borderRadius: 5,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
    </>
  );
}
