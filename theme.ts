import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";

export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    "--primary-color": "#6B1011",
    "--secondary-color": "#F3E29C",
    "--ternary-color": "#272757",
    "--forty-color": "#D9D9D9",
  }, 
};

export const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    "--primary-color": "#F3E29C",
    "--secondary-color": "#6B1011",
    "--ternary-color": "#272757",
    "--forty-color": "#D9D9D9",
  },
};
