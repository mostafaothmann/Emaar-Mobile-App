import "nativewind";
import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import { createURL } from 'expo-linking';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { Navigation, rootNavigationRef } from './navigation';
import '../global.css';
import * as Font from 'expo-font';
import { AppContext, AppProvider } from './navigation/screens/AppContext';
import { lightTheme } from 'theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
  require('./assets/fonts/ElMessiri.ttf')
]);

SplashScreen.preventAutoHideAsync();
const prefix = createURL('/');

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'ElMessiri': require('./assets/fonts/ElMessiri.ttf'),
  });

  React.useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
    <AppProvider>
      <AppWithTheme />
    </AppProvider>
    </SafeAreaProvider>
  );
}


export function AppWithTheme() {
  const { theme,getTheme} = React.useContext(AppContext);
  
   React.useEffect(
          React.useCallback(() => {
              getTheme();
          }, [theme]));
  
  return (
    <Navigation
      theme={theme}
      linking={{
        enabled: "auto",
        prefixes: [createURL("/")],
      }}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
      ref={rootNavigationRef}
    />
  );
}