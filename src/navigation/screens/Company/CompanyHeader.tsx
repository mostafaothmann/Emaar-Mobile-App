import {Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
const CompanyHeader = () => {
  return (
    <View className='h-[80] bg-secondary dark:bg-primary '>
      <Text className='text-primary dark:text-secondary text-h1 m-auto mt-[35]'>
            خاص بالشركات
      </Text>
      <View className='bg-secondary  dark:bg-primary p-0 justify-center items-end'>
        <AntDesign name="menu"className='text-primary dark:text-secondary w-[24] h-[24]' />
      </View>
    </View>
  )
}

export default CompanyHeader