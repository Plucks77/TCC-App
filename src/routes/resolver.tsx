import React from "react";
import { AppLoading } from "expo";

import { useAuth } from "../contexts/auth";
import { usePurchase } from "../contexts/purchase";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { Text } from "react-native";

const Routes: React.FC = () => {
  const { singned } = useAuth();
  const { loading } = usePurchase();

  if (loading) {
    // return <AppLoading />;
    // return <Text>Carregando...</Text>;
  }

  return singned ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
