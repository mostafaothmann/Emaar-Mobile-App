import { ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { useCustomerDataStore } from '@/stores/customersStore/data.store'
import { ITextString } from '@/components/sharedComponents/ITextString';
import { inputClassName, textClassName } from '@/assets/styleConstants';
import ModifiedButton from '@/components/sharedComponents/ModifiedButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation';

export interface UpdateCustomer {
  phone: number;
  secondPhone: number;
}
export default function CustoemeSecurityPagePasswordChangable() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { dataCustomer, updateCustomerData } = useCustomerDataStore()
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const upload = async () => {
    try {
      if (password == password1) {
        const { offers, properties, ...rest } = dataCustomer;
        const updatedCustomer = { ...rest, password };
        const status = updateCustomerData(updatedCustomer);
        console.log(status)
      }
      // navigation.navigate('CustomerSecurityPage')
    } catch (error) { console.log("error", error) }
  }
  return (
    <View className='bg-secondary dark:bg-primary flex-1 items-center pt-[100]'>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',     // ✅ centers children horizontally
          justifyContent: 'center', // ✅ centers children vertically
          // ✅ allows vertical centering
        }}
        className='w-[100%]'>
        <ITextString text='new password :' value={password} textClassName={textClassName}
          inputClassName={inputClassName} onChange={newVal => setPassword(String(newVal))}></ITextString>
        <ITextString text='ensure new password :' value={password1} textClassName={textClassName}
          inputClassName={inputClassName} onChange={newVal => setPassword1(String(newVal))}></ITextString>
      </ScrollView>
      <View>
      </View>
      <ModifiedButton text='update' textClassName={`text-secondary dark:text-primary mr-[20] text-body`}
        buttonClassName={`mt-[20] mb-[40] bg-primary dark:bg-secondary rounded-full h-[40] flex-row-reverse justify-between items-center`} icon='UserPen'
        iconClassName={`dark:text-primary text-secondary ml-[10] mr-[10]`}
        handleClick={upload}>
      </ModifiedButton>
    </View>
  )
}


