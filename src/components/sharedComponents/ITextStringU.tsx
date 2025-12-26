import { Text, TextInput, View } from 'react-native'

import React from 'react'

interface data {
    text:string;
    value:string,
    textClassName:string,
    inputClassName:string
}
export function ITextStringU ({text,value,textClassName,inputClassName}:data) {
  return (
    <View className='w-[80%] max-w-[350] m-2'>
    <Text  className={textClassName}>
    {text}
    </Text>
    <TextInput
      value={String(value)}
      editable={false}
      className={inputClassName}
    />   
    </View>
   )
}


