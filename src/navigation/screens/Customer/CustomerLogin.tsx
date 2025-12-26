import { ActivityIndicator, Pressable, ScrollView, View } from 'react-native'

import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text} from 'react-native'
import ModifiedButton from '@/components/sharedComponents/ModifiedButton'
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon'
import { useNavigation } from '@react-navigation/native'
import { useAuthStore } from '@/stores/customersStore/auth.store'
import { ITextString } from '@/components/sharedComponents/ITextString'
import { buttonClassName, inputClassName, textButttonClassName, textClassName } from '@/assets/styleConstants'



export function CustomerLogin () {

  const { login, authData, loading, error } = useAuthStore();
  const [email, setEmail] = useState('emily.johnson@example.com');
  const [password, setPassword] = useState('StrongPassword456');
  const [pressed, setPressed] = useState(false);
  const handleLogin = async () => {
        await login(email, password);
        setPressed(!pressed);
  };

   const navigation =useNavigation();
     const navigateToSignUp =() =>{
       navigation.navigate('CustomerSignup');
    }


  return (
  
    <View className='justify-center flex-1 items-center dark:bg-primary bg-secondary'>

     <ITextString text="Email :" textClassName={textClassName} value={email} inputClassName={inputClassName}  onChange={(newVal) => setEmail(String(newVal))}></ITextString>

     <ITextString text="Password :" textClassName={textClassName} value={password} inputClassName={inputClassName}   onChange={(newVal) => setPassword(String(newVal))}></ITextString>
   
      
           <ModifiedButtonNoIcon text='Login'  textClassName={textButttonClassName} buttonClassName={buttonClassName}  handleClick={handleLogin} ></ModifiedButtonNoIcon>
 

  <Pressable
           className='underline'
           onPress={navigateToSignUp}
         >
           <Text className={`${textClassName} underline mt-[100]`} >I don't have an account yet </Text>
         </Pressable>
    </View>

  
   )
 

}
