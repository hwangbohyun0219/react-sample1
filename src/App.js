import React, { createContext, useState } from 'react';
import Page from './component1018/Page';

export const LanguageContext = createContext();



function App() {
  const [language, setLanguage] = useState('ko'); 

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'ko' : 'en'));
  };

  return (
    <div className="app">
      <LanguageContext.Provider value={{language, toggleLanguage}}>
        <Page/>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;