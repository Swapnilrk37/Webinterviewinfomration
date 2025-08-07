import React, { useState } from 'react';
import English from './lang/English';
import French from './lang/French';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="App"> {/* This makes the whole page styled */}
      <header className="App-header">
        <button
          onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
          className="lang-button"
        >
          {lang === 'en' ? 'Voir en français' : 'View in English'}
        </button>

        {lang === 'en' ? <English /> : <French />}
      </header>
    </div>
  );
}

export default App;
