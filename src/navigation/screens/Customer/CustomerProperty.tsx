import { Text, useColorScheme, View } from 'react-native'
import React, { useEffect } from 'react'
import { CustomerAddPropertyParamList, NavigationCustomerAddProperty, RootStackParamList } from '@/navigation';
import {  NavigationIndependentTree, NavigationProp, useNavigation } from '@react-navigation/native';
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon';
import * as SplashScreen from 'expo-splash-screen';
import { createURL } from 'expo-linking';
import { buttonClassName, iconClassName, textButttonClassName } from '@/assets/styleConstants';
import ModifiedButton from '@/components/sharedComponents/ModifiedButton';
import { AppPropertyProvider } from '../CustomerAddPropertyStack/AddPropertyProvider';
import { darkTheme, lightTheme } from 'theme';


export default function CustomerProperty() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const prefix = createURL('/');
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  
  return (

    <View className="h-[100%] w-full pt-[50] bg-primary dark:bg-secondary">
      <AppPropertyProvider>
        <NavigationIndependentTree >
          <NavigationCustomerAddProperty
            theme={theme}
            linking={{
              enabled: 'auto',
              prefixes: [prefix],
            }}
            onReady={() => {
              SplashScreen.hideAsync();
            }}
          />
        </NavigationIndependentTree>
      </AppPropertyProvider>
    </View>
  )
}


