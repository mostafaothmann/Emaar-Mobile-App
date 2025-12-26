import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, type IconProps } from '@/Icons/Icon'; // 👈 import IconProps

interface ModifiedButtonProps
{
 text:string,
 handleClick: (type:any) => void; // 👈 callback function,
 textClassName:string,
 buttonClassName:string,
}

const ModifiedButtonNoIcon = ({handleClick,text,buttonClassName,textClassName}:ModifiedButtonProps) => {
  return (
    <View >
      <Pressable
      className= {buttonClassName}
      onPress={handleClick}
    >
      <Text className={textClassName} >{text}</Text>
    </Pressable>
    </View>
  )
}
//'text-body text-primary dark:text-secondary '
export default ModifiedButtonNoIcon

const styles = StyleSheet.create({})