'use client';
import React, { useState, useContext, createContext } from 'react';

const languages = ['JavaScript', 'Python'];

// Create a Context
const LanguageContext = createContext();

function MainSection() {
  // Consume the context
  const { favoriteLanguage, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">
        favorite programming language: {favoriteLanguage}
      </p>
      <button id="changeFavorite" onClick={toggleLanguage}>
        toggle language
      </button>
    </div>
  );
}

const ContextApi = () => {
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  const toggleLanguage = () => {
    setFavoriteLanguage((prev) =>
      prev === languages[0] ? languages[1] : languages[0],
    );
  };

  return (
    // Provide the context value
    <LanguageContext.Provider value={{ favoriteLanguage, toggleLanguage }}>
      <MainSection />
    </LanguageContext.Provider>
  );
};

export default ContextApi;
