import React, { createContext, useEffect, useState } from 'react';
import { getAllSettings } from '../lib/storyblok-gapi';

const defaultValue = {
  language: '',
  settings: {},
  setSettings: () => null,
};

export const SettingsContext = createContext(defaultValue);

const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultValue.settings);
  const [language, setLanguage] = useState(defaultValue.language);

  useEffect(() => {
    (async () => {
      console.log('all settings');
      const allSettings = await getAllSettings();
      console.log(allSettings);
      setSettings(allSettings?.SettingsItems?.items[0]);
    })();
  }, []);

  return (
    <SettingsContext.Provider
      value={{ settings, setSettings, language, setLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
