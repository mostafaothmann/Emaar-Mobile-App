import { Text, TextInput, View } from 'react-native'

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface data {
    text:string;
    value:string,
    inputClassName:string,
    textClassName:string,
    onChange: (newValue:string) => void; // 👈 callback function
}
export function TextArea ({text,value,onChange,inputClassName,textClassName}:data) {
  return (
    <View className='w-[80%] max-w-[350] m-2'>
    <Text  className={textClassName}>
    {text}
    </Text>
    <TextInput
      value={String(value)}
      onChangeText={onChange}
      multiline={true} 
      numberOfLines={10} 
      textAlignVertical="top"
      className={inputClassName}
    />   
    </View>
   )
 
}

