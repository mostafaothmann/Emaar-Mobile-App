import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface ITextProps {
  text: string;
  value: number;
  textClassName:string,
  inputClassName:string
}

export function ITextNumberU({ text, value,textClassName,inputClassName}: ITextProps) {
  return (
    <View className='w-[80%] max-w-[350] m-2'>
      <Text className={textClassName}>
        {text}
      </Text>
      <TextInput
        value={String(value)} 
        editable={false}
        className={inputClassName}
      />
    </View>
  );
}
