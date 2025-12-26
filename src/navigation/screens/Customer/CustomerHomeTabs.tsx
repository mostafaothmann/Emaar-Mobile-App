import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Property from './CustomerProperty';
import Companies from './CustomerCompanies';
import Profile from './CustomerProfile';
import CustomerHeader from './CustomerHeader';
import { CustomerProperties } from './CustomerProperties';
import { CustomerMaterials } from './CustomerMaterials';
import { useColorScheme } from 'nativewind';
import { useSafeAreaInsets } from "react-native-safe-area-context";


import { styled } from "nativewind";


function CustomerHomeTabs() {
  const insets = useSafeAreaInsets();

  const Tab = createBottomTabNavigator();
  const { colorScheme } = useColorScheme();
  let isDark = false;
  if (colorScheme == "dark")
    isDark = true;
  else
    isDark = false;
  /* 
     primary: "#6B1011",
     secondary: "#F3E29C",
     ternary: "#272757",
     forty: "#D9D9D9", 
  */

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: isDark ? "#681312" : "#F3E29C", // swapped
          height: 40 + insets.bottom,
          paddingTop: 0,
          paddingBottom: insets.bottom,
          borderTopWidth: 0,
          elevation: 10,
          bottom: 0,
        },
      }}
    >
      <Tab.Screen
        name="       "
        component={CustomerProperties}
        options={{
          headerShown: true,
          header: () => <CustomerHeader />,
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              <View
                className={`rounded-full p-4 transition duration-4000 ease-in-out ${focused
                  ? 'bg-primary dark:bg-secondary  shadow-lg border-4 border-secondary dark:border-primary'
                  : 'bg-transparent mt-0'
                  }`}
              >
                <FontAwesome6 name="building-columns" className={`${focused
                  ? 'text-secondary dark:text-primary w-[20] h-[20]'
                  : 'text-primary dark:text-secondary w-[20] h-[20]'
                  }`} />
              </View>
              <View className="p-0 w-[50] justify-center  items-center">
                <Text
                  className={`mb-5 text-body-5 ${focused
                    ? 'text-primary dark:text-secondary text-body-3 font-bold'
                    : 'hidden'
                    }`}
                >
                  properties
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name=" "
        component={CustomerMaterials}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              <View
                className={`rounded-full p-4 transition duration-4000 ease-in-out ${focused
                  ? 'bg-primary dark:bg-secondary  shadow-lg border-4 border-secondary dark:border-primary'
                  : 'bg-transparent mt-0'
                  }`}
              >
                <MaterialIcons name="storefront"
                  className={`${focused
                    ? 'text-secondary dark:text-primary w-[25] h-[25]'
                    : 'text-primary dark:text-secondary w-[20] h-[20]'
                    }`} />
              </View>
              <View className="p-0 w-[50] justify-center items-center">
                <Text
                  className={`mb-5 text-body-5 ${focused
                    ? 'text-primary dark:text-secondary text-body-3 font-bold'
                    : 'hidden'
                    }`}
                >
                  materials
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="      "
        component={Property}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              <View
                className={`rounded-full p-4 transition duration-4000 ease-in-out ${focused
                  ? 'bg-primary dark:bg-secondary -mt-8 shadow-lg border-4 border-secondary dark:border-primary'
                  : 'bg-transparent mt-0'
                  }`}
              >
                <AntDesign name="plus-square" className={`${focused
                  ? 'text-secondary dark:text-primary w-[25] h-[25]'
                  : 'text-primary dark:text-secondary w-[20] h-[20]'
                  }`} />

              </View>
              <View className="p-0 w-[50] justify-center items-center">
                <Text
                  className={`text-center text-body-2 ${focused
                    ? 'text-primary dark:text-secondary text-body-3 font-bold'
                    : 'hidden'
                    }`}
                >
                  New Property
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="   "
        component={Companies}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              <View
                className={`rounded-full p-4 transition duration-4000 ease-in-out ${focused
                  ? 'bg-primary dark:bg-secondary  shadow-lg border-4 border-secondary dark:border-primary'
                  : 'bg-transparent mt-0'
                  }`}
              >
                <FontAwesome name="building-o" className={`${focused
                  ? 'text-secondary dark:text-primary w-[25] h-[25]'
                  : 'text-primary dark:text-secondary w-[20] h-[20]'
                  }`} />
              </View>
              <View className="p-0 w-[50] justify-center items-center">
                <Text
                  className={`mb-5 text-body-5 ${focused
                    ? 'text-primary dark:text-secondary text-body-3 font-bold'
                    : 'hidden'
                    }`}
                >
                  Companies
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="        "
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              <View
                className={`rounded-full p-4 transition duration-4000 ease-in-out ${focused
                  ? 'bg-primary dark:bg-secondary  shadow-lg border-4 border-secondary dark:border-primary'
                  : 'bg-transparent mt-0'
                  }`}
              >
                <Ionicons name="person-circle-outline" className={`${focused
                  ? 'text-secondary dark:text-primary w-[25] h-[25]'
                  : 'text-primary dark:text-secondary w-[20] h-[20]'
                  }`} />

              </View>
              <View className="p-0 w-[50] justify-center items-center">
                <Text
                  className={`mb-5 text-body-5 ${focused
                    ? 'text-primary dark:text-secondary text-body-3 font-bold'
                    : 'hidden'
                    }`}
                >
                  My Profile
                </Text>
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default CustomerHomeTabs;
