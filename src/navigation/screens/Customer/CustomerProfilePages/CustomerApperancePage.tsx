import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../AppContext';
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon';
import { buttonClassName, textClassName, textClassNameInverted } from '@/assets/styleConstants';
import { useColorScheme } from 'nativewind';

const CustomerApperancePage = () => {
  const { setTheme } = useContext(AppContext);
  const {colorScheme,toggleColorScheme,setColorScheme}=useColorScheme();

  return (
    <View className='flex-1 bg-secondary dark:bg-primary pt-[100]'>
      <ModifiedButtonNoIcon text='Dark' handleClick={() =>  setColorScheme('dark')} textClassName={textClassNameInverted} buttonClassName={buttonClassName}>

      </ModifiedButtonNoIcon>
      <ModifiedButtonNoIcon text='Light' handleClick={() => setColorScheme('light')} textClassName={textClassNameInverted} buttonClassName={buttonClassName}>


      </ModifiedButtonNoIcon>

         <ModifiedButtonNoIcon text='System' handleClick={() => setColorScheme('system')} textClassName={textClassNameInverted} buttonClassName={buttonClassName}>
        

      </ModifiedButtonNoIcon>
    </View>
  )
}

export default CustomerApperancePage

