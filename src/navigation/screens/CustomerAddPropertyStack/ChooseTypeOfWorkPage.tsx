import { FlatList, ImageBackground, Pressable, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { CustomerAddPropertyParamList } from '@/navigation';
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon';
import { usePropertiesDataStore } from '@/stores/propertiesStore/data.store';
import { buttonClassNameInverted, textButttonClassNameInverted } from '@/assets/styleConstants';
import { AddPropertyContext } from './AddPropertyProvider';
import { ScrollView } from 'react-native';

export default function ChooseTypeOfWorkPage() {
  //AddPropertyContext
  const { property, setProperty, setTypeOfWork } = useContext(AddPropertyContext);

  const saveTypeOfWork = (typeOfWork: number) => {
    if (property)
      property.typeOfWorkId = typeOfWork;
    setTypeOfWork(typeOfWork);
  }

  //store
  const { dataTypeOfWork, getTypeOfWorkData, loading, error } = usePropertiesDataStore();

  useEffect(() => {
    getTypeOfWorkData();
    console.log(property)

  }, []);


  const navigation = useNavigation<NavigationProp<CustomerAddPropertyParamList>>();
  const navigateToChooseTypeOfOwneringPage = (typeOfWork: number) => {
    saveTypeOfWork(typeOfWork);
    navigation.navigate(`ChooseTypeOfOwneringPage`);
  }
  return (
    <View className='bg-primary dark:bg-secondary flex-1 flex-col -mt-[60] h-full'>
      <Text className='mt-[100] text-center text-body text-secondary dark:text-primary'>
        I want to ------- it</Text>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          alignContent: 'center',
        }}
        className='flex-1 w-[100%] mt-[20]'
      >
        {/* Moved flex-row + flex-wrap here */}
        <View className='flex-row flex-wrap w-full justify-center items-center '>
          {dataTypeOfWork?.map((item, index) => (
            <Pressable
              key={index}

              onPress={() => navigateToChooseTypeOfOwneringPage(item.id)}
              className='m-[10] rounded-[10] w-[40%] h-[120] bg-secondary dark:bg-primary'>

              <View
                className='flex-1 justify-center items-center'
              >
                <Text className='text-primary dark:text-secondary text-center text-h1'>
                  {item.name}
                </Text>
              </View>

            </Pressable>
          ))}
        </View>

      </ScrollView>
    </View>
  )
}


