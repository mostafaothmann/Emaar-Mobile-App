import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { CustomerAddPropertyParamList } from '@/navigation'
import { usePropertiesDataStore } from '@/stores/propertiesStore/data.store'
import { AddPropertyContext } from './AddPropertyProvider'

//Where you can choose type fo ownering of the building 
export default function ChooseTypeOfOwnering() {
  //AddPropertyContext
  const { typeOfOwnering, setTypeOfOwnering, property, setProperty } = useContext(AddPropertyContext);
  //Save Type Of Ownering
  const saveTypeOfOwnering = (typeOfOwnering: number) => {
    if (property)
      property.typeOfOwneringId = typeOfOwnering;
    setTypeOfOwnering(typeOfOwnering);
  }
  //Store
  const { dataTypeOfOwnerings, getTypeOfOwneringsData, loading, error } = usePropertiesDataStore()
  useEffect(() => {
    getTypeOfOwneringsData();
    console.log(property)
  }, []);
  //Navigation to the second and Changing Object Data 
  const navigation = useNavigation<NavigationProp<CustomerAddPropertyParamList>>();
  const navigateToChooseVideoAndPhotosPage = (typeOFOwnering: number) => {
    saveTypeOfOwnering(typeOFOwnering);
    navigation.navigate(`ChooseVideoAndPhotosPage`);
  }
  return (
    <View className='bg-primary dark:bg-secondary flex-1  -mt-[60] h-full'>
      <Text className='mt-[100] text-center text-body text-secondary dark:text-primary'>
        The type of ownering is ------</Text>
      {/* Moved flex-row + flex-wrap here */}
      <View className='flex-row flex-wrap w-full justify-center items-center '>
        <ScrollView
          contentContainerStyle={{ paddingVertical: 40, alignItems: 'center', paddingBottom: 220 }}>
          {dataTypeOfOwnerings?.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => navigateToChooseVideoAndPhotosPage(item.id)}
              className='m-[10] rounded-[10] w-[170] h-[120] bg-secondary dark:bg-primary'>
              <View
                className='flex-1 justify-center items-center mt-[10]'
              >
                <View className='flex-1 flex-row justify-start mr-[10] ml-[10]'>

                  <Text className='text-primary dark:text-secondary  text-body ml-[10] '>
                    {item.name}
                  </Text>
                </View>
                <Text className='text-primary dark:text-secondary text-center text-body-2  mb-[10]'>
                  {item.description}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View >
  )
}




