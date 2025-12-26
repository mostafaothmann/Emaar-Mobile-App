import {  Pressable, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { Text} from 'react-native'
import { Icon } from '@/Icons/Icon'
import { useAuthStore } from '@/stores/customersStore/auth.store'
import { ITextString } from '@/components/sharedComponents/ITextString'
import { ITextNumber } from '@/components/sharedComponents/ITextNumber'
import { Link, useNavigation } from '@react-navigation/native'
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon'
import { Customer } from '@/stores/customersStore/auth.store'
import { useCustomerDataStore } from '@/stores/customersStore/data.store'

export function CustomerSignup () {
  const {signup,dataC} =useCustomerDataStore()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState(9);

  const handleSignup = async () => {
    console.log("presse")
        await signup({email,password,firstName,lastName,age,phone} as Customer);
        console.log("dataC",{email,password,firstName,lastName,age,phone} )
  };
  const navigation =useNavigation();
   const navigateToLogin =() =>{
     navigation.navigate('CustomerLogin');
  }

  //styles
  const inputClassName='dark:border-primary border-secondary bg-forty rounded-[10] border-4  text-body p-[5] '
  const textClassName='text-body text-primary dark:text-secondary -mb-2 -mt-4'
  const buttonClassName='bg-primary dark:bg-secondary text-secondary dark:text-primary  mt-[30] h-[90] rounded-full text-body items-center justify-center w-[190]'
  const textButtonClassName='text-body text-secondary dark:text-primary text-center m-auto'
  const iconClassName='text-secondary dark:text-primary'

  return (
      <ScrollView
       className="bg-secondary dark:bg-primary"
        contentContainerStyle={{ 
             alignItems: 'center',     // ✅ centers children horizontally
             justifyContent: 'center', // ✅ centers children vertically
             flexGrow: 1,              // ✅ allows vertical centering

        }} // 👈 makes content fill height
      >
   
     <ITextString text="First Name :" textClassName={textClassName} value={firstName} inputClassName={inputClassName}  onChange={(newVal) => setFirstName(String(newVal))}></ITextString>

     <ITextString text="Last Name :" textClassName={textClassName} value={lastName} inputClassName={inputClassName}  onChange={(newVal) => setLastName(String(newVal))}></ITextString>

     <ITextString text="Email :" textClassName={textClassName} value={email} inputClassName={inputClassName}  onChange={(newVal) => setEmail(String(newVal))}></ITextString>

     <ITextString text="Password :" textClassName={textClassName} value={password} inputClassName={inputClassName}   onChange={(newVal) => setPassword(String(newVal))}></ITextString>

     <ITextNumber text="Age :" textClassName={textClassName} value={age} inputClassName={inputClassName}  onChange={(newVal) =>setAge(Number(newVal))} ></ITextNumber>
     
     <ITextNumber text="Phone :" textClassName={textClassName} value={phone} inputClassName={inputClassName}  onChange={(newVal) =>setPhone(Number(newVal))} ></ITextNumber>

     
      <ModifiedButtonNoIcon text='Signup'  textClassName={textButtonClassName} buttonClassName={buttonClassName}  handleClick={handleSignup}></ModifiedButtonNoIcon>
   
       <Pressable
          className='underline mt-[100]'
          onPress={navigateToLogin}
        >
          <Text className={`${textClassName} underline `} >already have an account </Text>
        </Pressable> 
     </ScrollView>
    
   )
 

}
