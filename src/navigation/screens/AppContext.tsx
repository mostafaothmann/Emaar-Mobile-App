import React, { createContext, useState } from "react";
import { Theme } from "@react-navigation/native";
import {darkTheme,lightTheme} from "../../../theme"
import { useColorScheme } from "nativewind";

interface AddPropertyProps {
  openDrawerCustomer: boolean;
  setOpenDrawerCustomer: (value: boolean) => void;
  theme: Theme;
  isDark: boolean;
  setTheme: (mode: boolean) => void;
  getTheme: () => void;
}

export const AppContext = createContext<AddPropertyProps>({
  openDrawerCustomer: false,
  setOpenDrawerCustomer: () => { },
  theme: lightTheme,
  isDark: false,
  setTheme: () => { },
  getTheme: () => { }
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [openDrawerCustomer, setOpenDrawerCustomer] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [theme, setThemeState] = useState<Theme>(
    lightTheme
  );
  const setTheme = (mode: boolean) => {
    console.log("[AppProvider] setTheme called, mode:", mode);
    
  };
  const getTheme =()=>{
    return theme;
  }

  React.useEffect(() => {
    console.log("[AppProvider] theme/isDark changed:", { isDark });
  }, [isDark]);

  return (
    <AppContext.Provider
      value={{
        openDrawerCustomer,
        setOpenDrawerCustomer,
        theme,
        isDark,
        setTheme,
        getTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
