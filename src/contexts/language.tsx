import React, { createContext, useState, useEffect, useContext } from "react";


export interface LanguageState {
  langauge: string;
  updateLanguage: (newLanguage: string) => void;
}

export const LanguageContext: React.Context<LanguageState> = createContext({
  langauge: 'ZH',
  updateLanguage: () => {},
});

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider: React.FC = ({ children }) => {
  const [stateLanguage, updateStateLanguage] = useState('ZH')
  const updateLanguage = (newLanguage: string): void => {
    updateStateLanguage(newLanguage);
  }
  const language = 'ZH'
  const languageState: LanguageState = {
    language,
    updateLanguage,
  };

  return(
    <LanguageContext.Provider value={languageState}>{children}</LanguageContext.Provider>
  );
}
