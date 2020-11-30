import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import Routes from "./src/routes/resolver";
import { AuthProvider } from "./src/contexts/auth";
import { PurchaseProvider } from "./src/contexts/purchase";
import { LanguageProvider } from "./src/contexts/language";
import "intl";
import "./src/languages/pt-BR.json";
import "./src/languages/en-US.json";
import "./src/languages/sp-ES.json";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <LanguageProvider>
        <AuthProvider>
          <PurchaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
            <Routes />
          </PurchaseProvider>
        </AuthProvider>
      </LanguageProvider>
    </NavigationContainer>
  );
};

export default App;
