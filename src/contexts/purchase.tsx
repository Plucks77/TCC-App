import React, { createContext, useState, useEffect, useContext } from "react";

import api from "../api";
import { useAuth } from "./auth";

interface PurchaseContextData {
  hasPurchases: boolean;
  loading: boolean;
  changeHasPurchases(boolean);
}

const PurchaseContext = createContext<PurchaseContextData>({} as PurchaseContextData);

export const PurchaseProvider: React.FC = ({ children }) => {
  const [hasPurchases, setHasPurchases] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      api.get(`/purchases/haspurchases/${user}`).then((res) => {
        setHasPurchases(res.data);
        setLoading(false);
      });
    }
  }, [user]);

  function changeHasPurchases(value: boolean) {
    setHasPurchases(value);
  }

  return (
    <PurchaseContext.Provider value={{ hasPurchases, loading, changeHasPurchases }}>
      {children}
    </PurchaseContext.Provider>
  );
};

export function usePurchase() {
  const context = useContext(PurchaseContext);

  return context;
}
