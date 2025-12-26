import { Pressable, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { textClassName } from '@/assets/styleConstants';


interface IItemProps {
  text: string,
  fun: () => void
}
const IItemDirector = ({ text, fun }: IItemProps) => {
  return (
    <View className='w-[90%] h-[60] 
     bg-secondary dark:bg-primary rounded-[10]  mb-[12]'>
      <Pressable
        onPress={fun}
        className='h-full w-[100%] items-center justify-center flex-row'>

        <View className='w-[80%] flex-row '>
          <View className='w-[10%] h-full mr-[10]'>
          </View>
          <Text className={textClassName}>{text}</Text>

        </View>
        <FontAwesome name="chevron-right" size={24} className='text-primary dark:text-secondary' />
      </Pressable>

    </View>
  )
}

export default IItemDirector

