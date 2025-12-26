import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  textClassNameInverted } from '@/assets/styleConstants';


interface IItemProps {
  text: string,
  fun :()=>void,
  iconText:string,
}
const IItemDirectorWithText = ({ text,iconText ,fun}: IItemProps) => {
  return (
    <View className='w-[95%] h-[60] mr-auto ml-auto p-[10]
     bg-primary dark:bg-secondary rounded-[10]  mb-[12]'>
      <Pressable 
      onPress={fun}
      className='h-full w-[90%] items-center justify-center flex-row'>

      <View className='w-[80%] flex-row '>
         <View className='w-[10%] h-full mr-[10]'>
        </View>
        <Text className={textClassNameInverted}>{text}</Text>
       
      </View>
      <Text className='text-body text-secondary dark:text-primary'>{iconText}</Text>
      <FontAwesome name="chevron-right" size={24} className='text-secondary dark:text-primary'/>
            </Pressable>

    </View>
  )
}

export default IItemDirectorWithText

