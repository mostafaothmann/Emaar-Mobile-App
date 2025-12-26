import { Pressable, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../AppContext';
import AntDesign from '@expo/vector-icons/AntDesign';

const CustomerHeader = () => {
  const { openDrawerCustomer, setOpenDrawerCustomer } = useContext(AppContext);
  const openDrawer = () => {
    setOpenDrawerCustomer(true)
  }
  return (
    <View className='h-[80] bg-secondary dark:bg-primary '>
      <Text className='text-primary dark:text-secondary text-h1 m-auto mt-[35]'>
        Emaar
      </Text>
      <View className='bg-secondary  dark:bg-primary p-0 justify-center items-end'>
        <Pressable
          onPress={() => openDrawer()}>
          <AntDesign name="menu" size={24} color="black" className='text-primary dark:text-secondary w-[24] h-[24]' />
        </Pressable>
      </View>
    </View>
  )
}

export default CustomerHeader