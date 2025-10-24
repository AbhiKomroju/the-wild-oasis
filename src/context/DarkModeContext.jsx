import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );
  function toggleDarkMode() {
    setDarkMode((isDarkMode) => !isDarkMode);
  }
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }, [darkMode]);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error(
      "DarkModeContext was used outside of the DarkModeContextProvider"
    );
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeContextProvider, useDarkMode };
