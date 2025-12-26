import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ModifiedButtonProps
{
 text:string,
 handleClick: (type:any) => void; // 👈 callback function,
 textClassName:string,
 buttonClassName:string,
 iconClassName:string,
}

const ModifiedButton = ({handleClick,text,buttonClassName,textClassName,iconClassName}:ModifiedButtonProps) => {
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
export default ModifiedButton

const styles = StyleSheet.create({})