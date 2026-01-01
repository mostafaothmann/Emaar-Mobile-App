import { Pressable, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { Text } from 'react-native'
import { ITextString } from '@/components/sharedComponents/ITextString'
import { useNavigation } from '@react-navigation/native'
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon'
import { useCustomerDataStore } from '@/stores/customersStore/data.store'
import { buttonClassName, inputClassName, textButttonClassName, textClassName } from '@/assets/styleConstants'
import { ITextNumber } from '@/components/sharedComponents/ITextNumber'
import { Snackbar as PaperSnackbar } from 'react-native-paper';
import { cssInterop } from 'nativewind';

export function CustomerSignup() {
  cssInterop(PaperSnackbar, {
    className: 'style',
  });
  const { signup } = useCustomerDataStore()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('0963');

  //snackbar
  const [visibleSnack, setVisibleSnack] = useState(false);
  const [textSnack, setTextSnack] = useState('');

  //for identical first and last name 
  const ENGLISH_REGEX = /^[A-Za-z]{2,20}$/;
  const ARABIC_REGEX = /^[\u0600-\u06FF]{2,20}$/;

  type NameLang = 'en' | 'ar' | null;

  const detectNameLanguage = (name: string): NameLang => {
    const value = name.trim();

    if (ENGLISH_REGEX.test(value)) return 'en';
    if (ARABIC_REGEX.test(value)) return 'ar';

    return null; // invalid
  };

  const validateFullName = (firstName: string, lastName: string) => {
    const firstLang = detectNameLanguage(firstName);
    const lastLang = detectNameLanguage(lastName);

    if (!firstLang || !lastLang) {
      return { valid: false, reason: 'Invalid name format' };
    }

    if (firstLang !== lastLang) {
      return {
        valid: false,
        reason: 'First and last name must be in the same language',
      };
    }

    return { valid: true, language: firstLang };
  };

  const handleSignup = async () => {
    if (!firstName) {
      await setTextSnack(`Sorry, enter your first name !`)
      setVisibleSnack(true);
      return;
    }
    if (!lastName) {
      await setTextSnack(`Sorry, enter your last name !`)
      setVisibleSnack(true);
      return;
    }
    const nameRegex = /^(?:[A-Za-z]{2,20}|[\u0600-\u06FF]{2,20})$/;
    if (!nameRegex.test((firstName.trim()))) {
      await setTextSnack('Sorry, enter valid first name please!')
      setVisibleSnack(true);
      return;
    }
    if (!nameRegex.test(lastName)) {
      await setTextSnack('Sorry, enter valid last name please!')
      setVisibleSnack(true);
      return;
    }
    //for identical first and last name 
    const result = validateFullName(firstName, lastName);
    if (!result.valid) {
      await setTextSnack(String(result.reason))
      setVisibleSnack(true);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      await setTextSnack('Sorry, enter valid email please!')
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
    if (password != password1) {
      await setTextSnack(`Sorry, passwords don't match !`)
      setVisibleSnack(true);
      return;
    }
    if (!age) {
      await setTextSnack(`Sorry, enter your age please !`)
      setVisibleSnack(true);
      return;
    }
    if (!age || Number(age) <= 17 || Number(age) > 100) {
      await setTextSnack(`Sorry, your age is not accepted !`)
      setVisibleSnack(true);
      return;
    }
    const phoneRegex = /^0963\d{9}$/;
    if (!phoneRegex.test((phone))) {
      await setTextSnack('Sorry, enter valid phone number please!')
      setVisibleSnack(true);
      return;
    }

    await signup({ email, password, firstName, lastName, age, phone });
  };
  const navigation = useNavigation();
  const navigateToLogin = () => {
    navigation.navigate('CustomerLogin');
  }


  return (
    <View className="bg-secondary dark:bg-primary flex-1 w-[100%] pt-[50]"
    >
      <Text className='text-primary dark:text-secondary text-h1 w-[100%] text-center'>SigningUp</Text>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 40, alignItems: 'center' }}
      >
        <ITextString text="First Name :" textClassName={textClassName} value={firstName} inputClassName={inputClassName} onChange={(newVal) => setFirstName(String(newVal))}></ITextString>
        <ITextString text="Last Name :" textClassName={textClassName} value={lastName} inputClassName={inputClassName} onChange={(newVal) => setLastName(String(newVal))}></ITextString>
        <ITextString text="Email :" textClassName={textClassName} value={email} inputClassName={inputClassName} onChange={(newVal) => setEmail(String(newVal))}></ITextString>
        <ITextString text="Password :" textClassName={textClassName} value={password} inputClassName={inputClassName} onChange={(newVal) => setPassword(String(newVal))}></ITextString>
        <ITextString text="Password Again:" textClassName={textClassName} value={password1} inputClassName={inputClassName} onChange={(newVal) => setPassword1(String(newVal))}></ITextString>
        <ITextNumber text="Age :" textClassName={textClassName} value={age} inputClassName={inputClassName} onChange={(newVal) => setAge((newVal))} ></ITextNumber>
        <ITextNumber text="Phone :" textClassName={textClassName} value={phone} inputClassName={inputClassName} onChange={(newVal) => setPhone((newVal))} >
        </ITextNumber>

      </ScrollView >
      <ModifiedButtonNoIcon text='Signup' textClassName={textButttonClassName} buttonClassName={`${buttonClassName} mt-[40] m-auto`} handleClick={handleSignup}>
      </ModifiedButtonNoIcon>
      <Pressable
        className='underline mt-[20]'
        onPress={navigateToLogin}>
        <Text className={`${textClassName} underline m-auto mb-[50]`} >already have an account
        </Text>
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
