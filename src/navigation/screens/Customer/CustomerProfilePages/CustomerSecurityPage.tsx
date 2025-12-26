import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useCustomerDataStore } from '@/stores/customersStore/data.store'
import { ITextString } from '@/components/sharedComponents/ITextString';
import { buttonClassName, iconClassName, inputClassName, textClassName, textClassNameInverted } from '@/assets/styleConstants';
import { ITextNumber } from '@/components/sharedComponents/ITextNumber';
import ModifiedButton from '@/components/sharedComponents/ModifiedButton';
import { Customer } from '@/stores/customersStore/data.store';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation';
import { ITextStringU } from '@/components/sharedComponents/ITextStringU';
import { ITextNumberU } from '@/components/sharedComponents/ITextNumberU';
import IItemDirectorWithText from '@/components/sharedComponents/IItemDirectorWithText';

export interface UpdateCustomer {
  email: string;
  secondPhone: number;
  phone: number;
  password: string;
}

export default function CustomerSecurityPage() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { dataCustomer, getCustomerData, updateCustomerData } = useCustomerDataStore()
  const dataToBeModified = dataCustomer;
  const [email, setEmail] = useState(dataToBeModified.email);
  const [phone, setPhone] = useState(dataToBeModified.phone);
  const [secondPhone, setSecondPhone] = useState(dataToBeModified.secondPhone);

  const change = (type: number) => {
    navigation.navigate('CustomerAuthenticationPassPage', { type: type });
  }



  return (
    <View className='bg-secondary dark:bg-primary flex-1 items-center pt-[100]'>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',     // ✅ centers children horizontally
          justifyContent: 'center', // ✅ centers children vertically
          // ✅ allows vertical centering
        }}
        className='w-[85%]'>
        <View className='w-[100%]'>
          <Text className='text-body text-primary dark:text-secondary'>email :</Text>
          <IItemDirectorWithText text={`${email}`} icon='Mail' iconText='change' fun={() => change(0)}></IItemDirectorWithText>
        </View>
        <View className='w-[100%]'>
            <Text className='text-body text-primary dark:text-secondary'>phone :</Text>
          <IItemDirectorWithText text={`${phone}`} icon='Phone' iconText='change' fun={() => change(0)}></IItemDirectorWithText>
        </View>
        <View className='w-[100%]'>
         <Text className='text-body text-primary dark:text-secondary'>second phone :</Text>
          <IItemDirectorWithText text={`${secondPhone}`} icon='Phone' iconText='change' fun={() => change(1)}></IItemDirectorWithText>
        </View>
      </ScrollView>
      <View>
      </View>

  
    </View>
  )
}


