import { Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { Text } from 'react-native'
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon'
import { useNavigation } from '@react-navigation/native'
import { useAuthStore } from '@/stores/customersStore/auth.store'
import { ITextString } from '@/components/sharedComponents/ITextString'
import { buttonClassName, inputClassName, textButttonClassName, textClassName } from '@/assets/styleConstants'
import { ChevronDownIcon } from '@/icons2'
import { cssInterop } from 'react-native-css-interop'
import { Snackbar as PaperSnackbar } from 'react-native-paper';

export function CustomerLogin() {
  const { login, authData, loading, error } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pressed, setPressed] = useState(false);

  //snackbar
  const [visibleSnack, setVisibleSnack] = useState(false);
  const [textSnack, setTextSnack] = useState('');
  cssInterop(PaperSnackbar, {
    className: 'style',
  });

  const handleLogin = async () => {
    if (!email ) {
      await setTextSnack(`Sorry, enter your email please!`)
      setVisibleSnack(true);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      await setTextSnack('Sorry, enter valid email please!')
      setVisibleSnack(true);
      return;
    }
     if (!password ) {
      await setTextSnack(`Sorry, enter your password please!`)
      setVisibleSnack(true);
      return;
    }
    if (password.length < 8) {
      await setTextSnack(`Sorry, password is too short !`)
      setVisibleSnack(true);
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^_])[A-Za-z\d@$!%*?&#^_]{8,}$/;
    if (!passwordRegex.test(password)) {
      await setTextSnack(`Sorry, password is not good!`)
      setVisibleSnack(true);
      return;
    }
    await login(email, password);
    setPressed(!pressed);
  };
  const navigation = useNavigation();
  const navigateToSignUp = () => {
    navigation.navigate('CustomerSignup');
  }
  return (
    <View className='justify-center flex-1 items-center dark:bg-primary bg-secondary'>

      <ITextString text="Email :" textClassName={textClassName} value={email}
        inputClassName={inputClassName} onChange={(newVal) => setEmail(String(newVal))}>
      </ITextString>
      <ITextString text="Password :" textClassName={textClassName} value={password}
        inputClassName={inputClassName} onChange={(newVal) => setPassword(String(newVal))}>
      </ITextString>
      <ModifiedButtonNoIcon text='Login' textClassName={textButttonClassName}
        buttonClassName={`${buttonClassName} mt-[100]`} handleClick={handleLogin} >
      </ModifiedButtonNoIcon>
      <Pressable
        className='underline'
        onPress={navigateToSignUp}
      >
        <Text className={`${textClassName} underline mt-[100]`} >I don't have an account yet </Text>
      </Pressable>
      <PaperSnackbar
        className='bg-primary dark:bg-secondary rounded-full w-[90%] m-auto'
        visible={visibleSnack}
        onDismiss={() => setVisibleSnack(false)}
        duration={3000}
      >
        <Text className=' text-secondary dark:text-primary text-body text-center'>{textSnack}</Text>
      </PaperSnackbar>
    </View>
  )
}
