import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { IntlProvider } from "react-intl";
import Spanish from "../languages/sp-ES.json";
import English from "../languages/en-US.json";
import Portuguese from "../languages/pt-BR.json";

interface LanguageContextData {
  locale: string;
  selectLang(language: string): void;
}

const LanguageContext = createContext<LanguageContextData>({} as LanguageContextData);

export const LanguageProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState("pt-BR");
  const [messages, setMessages] = useState(English);

  useEffect(() => {
    async function loadStoragedData() {
      const storaged_language = await AsyncStorage.getItem("@Valetour:language");

      if (storaged_language) {
        if (storaged_language === "en-US") {
          setMessages(English);
        }
        if (storaged_language === "sp-ES") {
          setMessages(Spanish);
        }
        if (storaged_language === "pt-BR") {
          setMessages(Portuguese);
        }
      }
    }
    loadStoragedData();
  }, []);

  async function selectLang(language) {
    if (language === "en-US") {
      await AsyncStorage.setItem("@Valetour:language", "en-US");
      setMessages(English);
      return;
    }
    if (language === "sp-ES") {
      await AsyncStorage.setItem("@Valetour:language", "sp-ES");
      setMessages(Spanish);
      return;
    }
    if (language === "pt-BR") {
      await AsyncStorage.setItem("@Valetour:language", "pt-BR");
      setMessages(Portuguese);
      return;
    }
  }

  return (
    <LanguageContext.Provider value={{ selectLang, locale }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);

  return context;
}
