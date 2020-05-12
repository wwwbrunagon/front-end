
import React from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div className="App">
        <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
        <button onClick={()=>handleClick('pt')} >
            Portugues
          </button>
          <button onClick={()=>handleClick('en')} >
            English
          </button>   
        </nav>
        <header className="App-header">          
          <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3>           
        </header>
    </div>
  );
}

export default App;