import { Pressable, ScrollView, Text, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppContext';
import { ModifiedImage } from '@/components/sharedComponents/ModifiedImage';
import paint from '@/assets/images/paint.jpg'
import { imageClassName } from '@/assets/styleConstants';
import { useCustomerDataStore } from '@/stores/customersStore/data.store';
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import IItemProfileDirector from '@/components/sharedComponents/IItemDirector';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RootStackParamList } from '@/navigation';
import IItemDirector from '@/components/sharedComponents/IItemDirector';

const CustomerProfile = () => {
  const { openDrawerCustomer, setOpenDrawerCustomer } = useContext(AppContext);
  const openDrawer = () => {
    console.log(openDrawerCustomer)
    setOpenDrawerCustomer(true)
  }
  const { dataCustomer, getCustomerData } = useCustomerDataStore()
  useFocusEffect(
    useCallback(() => {
      getCustomerData();
    }, [dataCustomer]));

  /* const [firstName, setFirstName] = useState(dataCustomer.firstName)
  const [lastName, setLastName] = useState(dataCustomer.lastName)
  const [email, setEmail] = useState(dataCustomer.email) */
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const moveToCustomerUploadVerificatinoDocumentPage = () => {
    navigation.navigate(`UploadVerificatinoDocumentPage`)
  }

  const moveToPersonalDetails = () => {
    navigation.navigate(`CustomerPersonalDetailsPage`)
  }

  const moveToCustomerLanguagesPage = () => {
    navigation.navigate(`CustomerLanguagesPage`)
  }
  const moveToCustomerSecurityPage = () => {
    navigation.navigate(`CustomerSecurityPage`)
  }

  const moveToCustomerApperancePage = () => {
    navigation.navigate(`CustomerApperancePage`)
  }

  const moveToCustomerCurrencyPage = () => {
    navigation.navigate(`CustomerCurrencyPage`)
  }

  const moveToCustomerPrivcyPage = () => {
    navigation.navigate(`CustomerPrivcyPage`)
  }

  const moveToCustomerRateUsPage = () => {
    navigation.navigate(`CustomerRateUsPage`)
  }

  const moveToCustomerAccountSettingsPage = () => {
    navigation.navigate(`CustomerAccountSettingsPage`)
  }

  const moveToCustomerAboutEmaarPage = () => {
    navigation.navigate(`CustomerAboutEmaarPage`)
  }





  return (
    <View className='bg-primary dark:bg-secondary flex-1 pt-[50] pb-[100]'>
      <View className='w-[100%] items-center'>
        <View className='w-[80%] h-[120] flex-row items-center justify-center'>

          <View className='w-[70] h-[70] overflow-hidden rounded-full border-2 border-secondary dark:border-primary'>
            <ModifiedImage imageClassName="h-[100%] w-[100%] " src={paint} mode='cover' ></ModifiedImage>
          </View>
          <View className='h-[70] max-w-[280] w-[80%] ml-[10] mr-[10] justify-center'>
            <Text className='text-secondary dark:text-primary'>{dataCustomer.firstName} {dataCustomer.lastName}</Text>
            <Text className='text-secondary dark:text-primary'>{dataCustomer.email}</Text>
          </View>
          <Pressable onPress={moveToCustomerUploadVerificatinoDocumentPage}>
                  <FontAwesome name="chevron-right" className='text-secondary dark:text-primary'/>

          </Pressable>

        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',     // ✅ centers children horizontally
          justifyContent: 'center', // ✅ centers children vertically
          // ✅ allows vertical centering
        }}
        className='bg-primary dark:bg-secondary '>
        <IItemDirector text='Personal Details'  fun={moveToPersonalDetails}></IItemDirector>
        <IItemDirector text='Languages'  fun={moveToCustomerLanguagesPage}></IItemDirector>
        <IItemDirector text='Account Settings'  fun={moveToCustomerAccountSettingsPage}></IItemDirector>
        <IItemDirector text='Security' fun={moveToCustomerSecurityPage}></IItemDirector>
        <IItemDirector text='Apperance' fun={moveToCustomerApperancePage}></IItemDirector>
        <IItemDirector text='Currency' fun={moveToCustomerCurrencyPage}></IItemDirector>
        <IItemDirector text='Privcy Policy' fun={moveToCustomerPrivcyPage}></IItemDirector>
        <IItemDirector text='Rate Us' fun={moveToCustomerRateUsPage}></IItemDirector>
        <IItemDirector text='About Emaar' fun={moveToCustomerAboutEmaarPage}></IItemDirector>
      </ScrollView>
    </View>
  )
}

export default CustomerProfile

