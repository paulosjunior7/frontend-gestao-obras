import React, { createContext, Dispatch } from "react";
import { DefaultTheme } from "styled-components";

import usePersistedState from "../utils/usePersistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { KEY_LOCAL_STORAGE_THEME } from "../constants/localStorage";
import { LIGHT } from "../constants/theme";

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
  setTheme: Dispatch<DefaultTheme>;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    'theme',
    light
  );

  function toggleTheme() {
    if (theme.title === LIGHT) {
      const d = dark;
      d.colors.secundary = theme.colors.secundary;
      setTheme(d);
    } else {
      const l = light;
      l.colors.secundary = theme.colors.secundary;
      setTheme(l);
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme , setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };