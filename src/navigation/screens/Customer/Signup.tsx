import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ITextString } from '@/components/sharedComponents/ITextString';
import { ITextNumber } from '@/components/sharedComponents/ITextNumber';


export function Signup () {
   const [firstName,setFirstName] =useState<string>('');
   const [lastName,setLastName] =useState<string>('');
   const [email,setEmail] =useState<string>('');
   const [age, setAge] = useState<number>(0);
   const [phone, setPhone] = useState<number>(0);
   const [password, setPassword] = useState<string>('');
   const [passwordAgain, setPasswordAgain] = useState<string>('');



  return (

    
    <SafeAreaView className="flex-1 bg-primary dark:bg-secondary pt-[-100] ">
      <ScrollView
        className="flex-1 mt-[50]"
        contentContainerStyle={{ flexGrow: 1 }} // 👈 makes content fill height
      >
    <View className='justify-center flex-1 items-center dark:bg-secondary bg-primary'>


     <ITextString text="First Name :" value={firstName} onChange={(newVal) => setFirstName(String(newVal))}></ITextString>

     <ITextString text="Last Name :" value={lastName} onChange={(newVal) => setLastName(String(newVal))}></ITextString>

     <ITextNumber text="Age :" value={age}   onChange={(newVal) => setAge(Number(newVal))}></ITextNumber>

     <ITextNumber text="Phone :" value={phone}   onChange={(newVal) => setPhone(Number(newVal))}></ITextNumber>

     <ITextString text="Email :" value={email} onChange={(newVal) => setEmail(String(newVal))}></ITextString>

     <ITextString text="Password :" value={password}   onChange={(newVal) => setPassword(String(newVal))}></ITextString>
 
     <ITextString text="Password Again:" value={passwordAgain}   onChange={(newVal) => setPasswordAgain(String(newVal))}></ITextString>

    </View>    
    </ScrollView>
    </SafeAreaView>
  
   )
 
}

