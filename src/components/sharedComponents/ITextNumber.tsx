import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface ITextProps {
  text: string;
  value: string;
  textClassName: string;
  inputClassName: string;
  onChange: (newValue: string) => void;
}

export function ITextNumber({ text, value, onChange,textClassName,inputClassName}: ITextProps) {
  return (
    <View className='w-[80%] max-w-[350] m-2'>
      <Text className={textClassName}>
        {text}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        keyboardType="numeric"
        className={inputClassName}
      />
    </View>
  );
}
