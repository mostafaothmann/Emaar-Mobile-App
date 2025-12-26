import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CompanyHeader from './CompanyHeader';
import CompanyProfile from './CompanyProfile';


const Tab = createBottomTabNavigator();

function CompanyHomeTabs() {
  const theme = useTheme();
  const isDark = theme.dark;

  /* 
     primary: "#6B1011",
     secondary: "#F3E29C",
     ternary: "#272757",
     forty: "#D9D9D9", 
  */

  return (
    <Tab.Navigator
      screenOptions={{
        header: CompanyHeader,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: isDark ? "#681312" : "#F3E29C", // swapped
          height: 80,
          paddingTop: 0,
          paddingBottom: 0,
          borderTopWidth: 0,
          elevation: 10,
          bottom: 0,
        },
      }}
    >


      <Tab.Screen
        name="    "
        component={CompanyProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center">
              <View
                className={`rounded-full p-4 transition duration-4000 ease-in-out ${focused
                    ? 'bg-primary dark:bg-secondary -mt-8 shadow-lg border-4 border-secondary dark:border-primary'
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
                  className={`mt-1 text-body ${focused
                      ? 'text-primary dark:text-secondary text-body-2 font-bold'
                      : 'hidden'
                    }`}
                >
                  ملفي
                </Text>
              </View>
            </View>
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default CompanyHomeTabs;
