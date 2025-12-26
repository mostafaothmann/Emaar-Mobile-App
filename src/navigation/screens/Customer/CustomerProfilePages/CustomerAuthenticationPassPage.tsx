import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation';
import { useCustomerDataStore } from '@/stores/customersStore/data.store';
import { ITextString } from '@/components/sharedComponents/ITextString';
import { inputClassName, textClassName } from '@/assets/styleConstants';
import ModifiedButton from '@/components/sharedComponents/ModifiedButton';
//This Page is to authenticate the user and to see if the pass is correct 
const CustomerAuthenticationPassPage = () => {
  //Route Section 👈
  type AuthenticainRouteProp = RouteProp<RootStackParamList, 'CustomerAuthenticationPassPage'>;
  const route = useRoute<AuthenticainRouteProp>();
  const typeOfChange = route.params.type;

  const { dataCustomer } = useCustomerDataStore()
  const dataToBeModified = dataCustomer;
  const [password, setPassword] = useState(dataToBeModified.password);
  const [password1, setPassword1] = useState('strongPassword456');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const ensure = () => {
    if (password1 == password) {
      if (typeOfChange == 0) { navigation.navigate('CustoemeSecurityPagePhonesChangable') }
      else { navigation.navigate('CustomerSecurityPagePasswordChangable') }
    }
  }
  return (
    <View className='pt-[100]'>
      <ITextString text='password :' value={password1} textClassName={textClassName}
        inputClassName={inputClassName} onChange={newVal => setPassword1(newVal)}></ITextString>
      <ModifiedButton text='Ensure Password' textClassName={`text-secondary dark:text-primary mr-[20] text-body`}
        buttonClassName={`mt-[20] mb-[40] bg-primary dark:bg-secondary rounded-full h-[40] flex-row-reverse justify-between items-center`} icon='UserPen'
        iconClassName={`dark:text-primary text-secondary ml-[10] mr-[10]`}
        handleClick={() => ensure()}>
      </ModifiedButton>
    </View>
  )
}

export default CustomerAuthenticationPassPage

const styles = StyleSheet.create({})