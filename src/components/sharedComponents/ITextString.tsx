import { Text, TextInput, View } from 'react-native'

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface data {
    text:string;
    textClassName:string;
    inputClassName:string;
    value:string,
    onChange: (newValue:string) => void; // 👈 callback function
}
export function ITextString ({text,value,onChange,inputClassName,textClassName}:data) {
  return (
    <View className='w-[80%] max-w-[350] m-2'>
    <Text  className={textClassName}>
    {text}
    </Text>
    <TextInput
      value={String(value)}
      onChangeText={onChange}
      className={inputClassName}
    />   
    </View>
   )
 
}

