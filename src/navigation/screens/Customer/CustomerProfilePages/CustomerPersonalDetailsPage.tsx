import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { UpdateCustomer, useCustomerDataStore } from '@/stores/customersStore/data.store'
import { ITextString } from '@/components/sharedComponents/ITextString';
import { buttonClassName, iconClassName, inputClassName, textClassName, textClassNameInverted } from '@/assets/styleConstants';
import { ITextNumber } from '@/components/sharedComponents/ITextNumber';
import ModifiedButton from '@/components/sharedComponents/ModifiedButton';
import { Customer } from '@/stores/customersStore/data.store';

export default function CustomerPersonalDetailsPage() {
  const { dataCustomer, getCustomerData, updateCustomerData } = useCustomerDataStore()
  const dataToBeModified = dataCustomer;
  const [email, setEmail] = useState(dataToBeModified.email);
  const [location, setLocation] = useState(dataToBeModified.location);
  const [age, setAge] = useState(dataToBeModified.age);
  const [firstName, setFirstName] = useState(dataToBeModified.firstName);
  const [lastName, setLastName] = useState(dataToBeModified.lastName);
  const [websiteLink, setWebsiteLink] = useState(dataToBeModified.websiteLink);
  const [facebookLink, setFacebookLink] = useState(dataToBeModified.facebookLink);
  const [phone, setPhone] = useState(dataToBeModified.phone);
  const [secondPhone, setSecondPhone] = useState(dataToBeModified.secondPhone);
  const [photo, setPhoto] = useState(dataToBeModified.photo);
  const [linkedinLink, setLinkedinLink] = useState(dataToBeModified.linkedinLink);
  const [instaLink, setInstaLink] = useState(dataToBeModified.instaLink);
  const [description, setDescription] = useState(dataToBeModified.description);
  const [password, setPassword] = useState(dataToBeModified.password);




  const upload = () => {
    const updatedCustomer: UpdateCustomer = { password, linkedinLink, instaLink, description ,phone, photo, secondPhone, facebookLink, websiteLink, firstName, lastName, email, location, age }
    console.log(updatedCustomer);
    updateCustomerData(updatedCustomer);
  }
  return (
    <View className='bg-secondary dark:bg-primary flex-1 items-center pt-[100]'>
      <ScrollView
              contentContainerStyle={{
                alignItems: 'center',     // ✅ centers children horizontally
                justifyContent: 'center', // ✅ centers children vertically
                // ✅ allows vertical centering
              }}
              className='w-[100%]'>
      <ITextString text='description :' value={instaLink} textClassName={textClassName}
        inputClassName={inputClassName} onChange={newVal => setDescription(String(newVal))}></ITextString>
      <ITextString text='email :' value={email} textClassName={textClassName}
        inputClassName={inputClassName} onChange={newVal => setEmail(String(newVal))}></ITextString>
      <ITextNumber text='age :' value={age} textClassName={textClassName}
        inputClassName={inputClassName} onChange={newVal => setAge(Number(newVal))}></ITextNumber>
      <ITextNumber text='phone :' value={phone} textClassName={textClassName}
        inputClassName={inputClassName} onChange={newVal => setPhone(Number(newVal))}></ITextNumber>
      <ITextNumber text='second phone :' value={secondPhone} textClassName={textClassName}
        inputClassName={inputClassName} onChange={newVal => setSecondPhone(Number(newVal))}></ITextNumber>
      <ITextString text='instagram Link :' value={instaLink} textClassName={textClassName}
        inputClassName={inputClassName} onChange={newVal => setInstaLink(String(newVal))}></ITextString>
      <ITextString text='facebook Link :' value={facebookLink} textClassName={textClassName}
        inputClassName={inputClassName} onChange={newVal => setFacebookLink(String(newVal))}></ITextString>
      <ITextString text='linkedIn Link :' value={linkedinLink} textClassName={textClassName}
        inputClassName={inputClassName} onChange={newVal => setLinkedinLink(String(newVal))}></ITextString>
      <ITextString text='website Link :' value={websiteLink} textClassName={textClassName}
        inputClassName={inputClassName} onChange={newVal => setWebsiteLink(String(newVal))}></ITextString>
      </ScrollView>
      <View>
      </View>
      <ModifiedButton text='update' textClassName={`text-secondary dark:text-primary mr-[20] text-body`}
        buttonClassName={`mt-[20] mb-[40] bg-primary dark:bg-secondary rounded-full h-[40] flex-row-reverse justify-between items-center`} icon='UserPen'
        iconClassName={`dark:text-primary text-secondary ml-[10] mr-[10]`}
        handleClick={upload}>
      </ModifiedButton>
    </View>
  )
}


