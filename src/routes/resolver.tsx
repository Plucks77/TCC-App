import React from "react";
import { AppLoading } from "expo";

import { useAuth } from "../contexts/auth";
import { usePurchase } from "../contexts/purchase";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  const { singned } = useAuth();
  const { loading } = usePurchase();

  if (loading) {
    return <AppLoading />;
  }

  return singned ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
