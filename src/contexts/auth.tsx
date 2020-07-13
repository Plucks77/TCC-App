import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../api";
import * as auth from "../services/auth";

interface AuthContextData {
  singned: boolean;
  user: Response | string | null;
  signIn(email, password): Promise<Response | string>;
  register(username, email, password, tel): Promise<Response2 | string>;
  signOut(): void;
  loading: boolean;
}

interface Response {
  token: string;
  user_id: string;
}

interface Response2 {
  token: string;

  user: {
    id: string;
    email: string;
    username: string;
    tel: string;
  };
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Response | string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storaged_user_id = await AsyncStorage.getItem("@Valetour:user_id");
      const sotraged_token = await AsyncStorage.getItem("@Valetour:token");

      if (storaged_user_id && sotraged_token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(sotraged_token)}`;

        setUser(storaged_user_id);
      }
      setLoading(false);
    }
    loadStoragedData();
  }, []);

  async function signIn(email, password) {
    const response = await auth.signIn(email, password);
    if (typeof response !== "string") {
      setUser(response.user_id);

      api.defaults.headers.Authorization = `Bearer ${response.token}`;

      await AsyncStorage.setItem("@Valetour:user_id", JSON.stringify(response.user_id));
      await AsyncStorage.setItem("@Valetour:token", JSON.stringify(response.token));
    }

    return response;
  }

  async function register(username, email, password, tel) {
    const response = await auth.register(username, email, password, tel);

    if (typeof response !== "string") {
      setUser(response.user.id);

      api.defaults.headers.Authorization = `Bearer ${response.token}`;

      await AsyncStorage.setItem("@Valetour:user.id", JSON.stringify(response.user.id));
      await AsyncStorage.setItem("@Valetour:token", JSON.stringify(response.token));
    }
    return response;
  }

  async function signOut() {
    setUser(null);
    await AsyncStorage.removeItem("@Valetour:user_id");
    await AsyncStorage.removeItem("@Valetour:token");
  }

  return (
    <AuthContext.Provider value={{ singned: !!user, user, signIn, signOut, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
