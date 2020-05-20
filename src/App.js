
import React, { useState }from 'react';
import { I18nProvider, LOCALES} from './i18n/';
import translate from './i18n/translate';



function App() {
  const[locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <>
    <I18nProvider locale={locale}>
      <div className="container p-3">
      <button onClick={() => setLocale(LOCALES.ENGLISH)}>PORTUGUES</button>
      <button onClick={() => setLocale(LOCALES.PORTUGUESE)}>ENGLISH</button>
      </div>
      <div className="container  p-3">
        {translate("hello")}
      </div>
        
      <div className="container mt-3" >
        {translate('edit', {path:'JavaScript'})}
      </div> 
    </I18nProvider>

    </>
  );
}

export default App;