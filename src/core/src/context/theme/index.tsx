import { createContext, ReactNode, useContext, useState } from "react";
import { Theme, themes } from "./colorTypes";

interface InitialState {
  isDark: boolean;
  toggleTheme: () => void;
  colors: Theme;
}

const getUserDarkMode = () => {
  return window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : "light";
};

const initialState: InitialState = {
  isDark: getUserDarkMode() === "dark",
  toggleTheme: () => {},
  colors: themes.darkTheme,
};

const themeStore = createContext<InitialState>(initialState);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(initialState.isDark);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <themeStore.Provider
      value={{
        isDark,
        toggleTheme,
        colors: isDark ? themes.darkTheme : themes.lightTheme,
      }}
    >
      {children}
    </themeStore.Provider>
  );
};

const useTheme = () => {
  return useContext(themeStore);
};

export { ThemeProvider, useTheme };
