import React from "react";
import { AppLoading } from "expo";

import { useAuth } from "../contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { View, Text } from "react-native";

const Routes: React.FC = () => {
  const { singned, loading } = useAuth();

  if (loading) {
    return <AppLoading />;
  }

  return singned ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
