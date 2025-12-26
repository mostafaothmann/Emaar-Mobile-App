import { ActivityIndicator, Pressable, ScrollView, View } from 'react-native'

import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ITextString } from '../../../components/sharedComponents/ITextString'
import { useAuthStore } from '../../../stores/customersStore/auth.store'
import { Text } from 'react-native'
import { Icon } from '@/Icons/Icon'
import ModifiedButton from '@/components/sharedComponents/ModifiedButton'
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon'


export function Login() {
      const { login, authData, loading, error } = useAuthStore();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [pressed, setPressed] = useState(false);
      const handleLogin = async () => {
            await login(email, password);
            setPressed(!pressed);
      };


      //styles
      const inputClassName = 'dark:border-primary border-secondary bg-forty rounded-[10] border-4  text-body p-[5] w-[100%]'
      const textClassName = 'text-body text-primary dark:text-secondary -mb-2 -mt-4'
      const buttonClassName = 'bg-primary dark:bg-secondary text-secondary dark:text-primary  mt-[30] h-[40] rounded-full text-body items-center justify-center w-[160]'
      const textButtonClassName = 'text-body text-secondary dark:text-primary text-center m-auto'
      const iconClassName = 'text-secondary dark:text-primary'
      return (

            <View className='justify-center flex-1 items-center dark:bg-primary bg-secondary'>

                  <ITextString text="Email :" textClassName={textClassName} value={email} inputClassName={inputClassName} onChange={(newVal) => setEmail(String(newVal))}></ITextString>

                  <ITextString text="Password :" textClassName={textClassName} value={password} inputClassName={inputClassName} onChange={(newVal) => setPassword(String(newVal))}></ITextString>


                  <ModifiedButtonNoIcon text='Login' textClassName={textButtonClassName} buttonClassName={buttonClassName} handleClick={handleLogin} ></ModifiedButtonNoIcon>

            </View>


      )


}
