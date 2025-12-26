import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { CustomerAddPropertyParamList } from '@/navigation'
import { ITextNumberU } from '@/components/sharedComponents/ITextNumberU'
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon'
import { usePropertiesDataStore } from '@/stores/propertiesStore/data.store'
import { buttonClassNameInverted, inputClassName, textButttonClassNameInverted, textClassName } from '@/assets/styleConstants'
import { AddPropertyContext } from './AddPropertyProvider'
import { ITextNumber } from '@/components/sharedComponents/ITextNumber'
export default function ChooseTypeOfOwnering() {
  //AddPropertyContext
  const { typeOfOwnering, setTypeOfOwnering, property, setProperty } = useContext(AddPropertyContext);



  const saveTypeOfOwnering = (typeOfOwnering: number) => {
    if (property)
      property.typeOfOwneringId = typeOfOwnering;
    setTypeOfOwnering(typeOfOwnering);
  }




  //store
  const { dataTypeOfOwnerings, getTypeOfOwneringsData, loading, error } = usePropertiesDataStore()
  useEffect(() => {
    getTypeOfOwneringsData();
    console.log(property)
  }, []);

  //navigation to the second and Changing Object Data 
  const navigation = useNavigation<NavigationProp<CustomerAddPropertyParamList>>();
  const navigateToChooseVideoAndPhotosPage = (typeOFOwnering: number) => {
    saveTypeOfOwnering(typeOFOwnering);
    navigation.navigate(`ChooseVideoAndPhotosPage`);
  }
  return (
    <View className='bg-primary dark:bg-secondary flex-1  -mt-[60] h-full'>
      <Text className='mt-[100] text-center text-body text-secondary dark:text-primary'>
        The type of ownering is ------</Text>
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
          {dataTypeOfOwnerings?.map((item, index) => (
            <Pressable
              key={index}

              onPress={() => navigateToChooseVideoAndPhotosPage(item.id)}
              className='m-[10] rounded-[10] w-[40%] h-[120] bg-secondary dark:bg-primary'>

              <View
                className='flex-1 justify-center items-center'
              >
                <Text className='text-primary dark:text-secondary text-center text-body'>
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




