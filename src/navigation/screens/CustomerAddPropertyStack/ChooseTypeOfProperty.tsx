import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { CustomerAddPropertyParamList } from '@/navigation'
import { ITextNumberU } from '@/components/sharedComponents/ITextNumberU'
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon'
import { usePropertiesDataStore } from '@/stores/propertiesStore/data.store'
import { buttonClassName, buttonClassNameInverted, imageClassName, textButttonClassName, textButttonClassNameInverted } from '@/assets/styleConstants'
import { AddPropertyContext } from './AddPropertyProvider'
import { ScrollView } from 'react-native'
import { ModifiedImage } from '@/components/sharedComponents/ModifiedImage'



export default function ChooseTypeOfProperty() {

  //AddPropertyContext
  const { property, setProperty, setTypeOfProperty } = useContext(AddPropertyContext);


  //function to change the Type of property
  const saveTypeOfProperty = (typeOfProperty: number) => {
    if (property)
      property.typeOfPropertyId = typeOfProperty;
    setTypeOfProperty(typeOfProperty);
  }

  const getLocalImage = (fileName: string) => {
    switch (fileName) {
      case "villa":
        return require('@/assets/images/villa.jpg');
      case "apartment":
        return require('@/assets/images/apartment.jpg');
      case "townhouse":
        return require('@/assets/images/townhouse.jpg');

    }
  };


  //store
  const { dataTypeOfProperties, getTypeOfPropertiesData, loading, error } = usePropertiesDataStore();

  useEffect(() => {
    getTypeOfPropertiesData();
    console.log(property)

  }, []);

  //navigation to the second
  const navigation = useNavigation<NavigationProp<CustomerAddPropertyParamList>>();
  const navigateToChooseTypeOfWorkPage = (typeOfProperty: number) => {
    saveTypeOfProperty(typeOfProperty);
    navigation.navigate(`ChooseTypeOfWorkPage`);
  }
  return (
    <View className='bg-primary dark:bg-secondary flex-1 flex-col -mt-[60] h-full'>
      <Text className='mt-[100] text-center text-body text-secondary dark:text-primary'>My property is a -------</Text>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          alignContent: 'center',
        }}
        className='flex-1 w-[100%] mt-[20]'
      >
        {/* Moved flex-row + flex-wrap here */}
        <View className='flex-row flex-wrap w-full justify-center '>

          {dataTypeOfProperties?.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => navigateToChooseTypeOfWorkPage(item.id)}
              className='m-[10] rounded-full w-[70%] h-[150] '>
              <ImageBackground
                source={getLocalImage(item.image)}            // your image
                resizeMode="cover"        // like background-size: cover
                className='w-full h-full rounded-[10] opacity-90 justify-end items-start pl-[10] overflow-hidden ' // align content inside
              >
                <View
                >
                  <Text className='text-secondary dark:text-primary text-center text-h1 '>
                    {item.name}
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          ))}
        </View>

      </ScrollView>
    </View>


  )
}


