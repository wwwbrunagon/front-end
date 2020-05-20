
import React, { useState }from 'react';
import { I18nProvider, LOCALES} from './i18n/';
import translate from './i18n/translate';
import { Header } from './styles';
import {ThemeProvider} from 'styled-components';
import THEMES from './constants/themes';
import {getTheme} from "./getTheme";



function App() {
  const[locale, setLocale] = useState(LOCALES.PORTUGUESE);
  const [themeName, setThemeName] = useState(THEMES.DARK)
  return (
    <ThemeProvider theme={getTheme(themeName)}>
    <Header>
    <I18nProvider locale={locale}>
      <div className="container p-3">
      <button onClick={() => setLocale(LOCALES.PORTUGUESE)}>PORTUGUES</button>
      <button onClick={() => setLocale(LOCALES.ENGLISH)}>ENGLISH</button>
      </div>
      <div className="container p-3">
        {translate("hello")}
      </div>        
      <div className="container m-3" >
        {translate('edit', {path:'JavaScript'})}
      </div> 
    </I18nProvider>
    <div className="container align-self-start mr-3">
      <button onClick={() => setThemeName(THEMES.DARK)}>DARK</button>
      <button onClick={() => setThemeName(THEMES.LIGHT)}>LIGHT</button>
    </div>
    
    </Header>
    </ThemeProvider>
    
  );
}

export default App;