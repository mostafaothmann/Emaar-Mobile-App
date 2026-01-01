import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation';
import { usePropertiesDataStore } from '@/stores/propertiesStore/data.store';

import { Property } from '@/stores/propertiesStore/data.store'
import { ScrollView } from 'react-native';
import { ModifiedImage } from '@/components/sharedComponents/ModifiedImage';
import { ITextStringU } from '@/components/sharedComponents/ITextStringU';
import { ITextNumberU } from '@/components/sharedComponents/ITextNumberU';
import ModifiedButton from '@/components/sharedComponents/ModifiedButton';
import { TextAreaU } from '@/components/sharedComponents/TextAreaU';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon';
import { ITextString } from '@/components/sharedComponents/ITextString';
import { ITextNumber } from '@/components/sharedComponents/ITextNumber';
import { buttonClassName, buttonClassNameInverted, iconClassName, imageClassName, inputClassName, inputClassNameInverted, textButttonClassName, textClassName, textClassNameInverted } from '@/assets/styleConstants';


export function PropertyProfile() {
  //Route Section 👈
  type PropertyProfileRouteProp = RouteProp<RootStackParamList, 'PropertyProfile'>;
  const route = useRoute<PropertyProfileRouteProp>();
  const propertyId = route.params.propertyId; // <- same key you passed
  //Store Section 👈
  const propertiesStore = usePropertiesDataStore();
  const dataProperties = usePropertiesDataStore.getState().dataProperties
  const propertyD = dataProperties?.find(item => item.id === propertyId);

  //Add Offer Card 👈
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const snapPoints = ['50%', '85%'];
  const [cardIndex, setCardIndex] = useState(-1)
  //Card Constants
  const [description, setDescription] = useState<string>('')
  const [budget, setBudget] = useState<number>(0)
  const [Propertyid, setPropertyid] = useState<number>(0)
  const [Customerid, setCustomerid] = useState<number>(0)
  const [isActive, setIsActive] = useState<number>(0)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const owner_customer_comment = ""
  //Card Functions
  const addCustomerToCustoemrOffer = (id: number) => {
    const offer = { budget, description, endDate, Customerid, Propertyid, isActive, date, owner_customer_comment }
    console.log(id)
    console.log(offer)
    propertiesStore.addCustomerOffer(id, offer)
    closeMakeOfferCard()
  }

  const makeOfferCard = (id: number) => {
    bottomSheetRef.current?.expand(); // opens the sheet
  }
  const closeMakeOfferCard = () => {
    bottomSheetRef.current?.close(); // opens the sheet
  }


  //Front Section 
  if (!propertyD)
    return <Text>No data yet</Text>;
  else
    return (
      <GestureHandlerRootView >
        <View className='items-center justify-center flex-1 bg-secondary dark:bg-primary' >
          <ModifiedImage imageClassName={imageClassName} src={{uri:propertyD.image1}} mode='stretch' ></ModifiedImage>
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 40,
              alignItems: 'center',     // ✅ centers children horizontally
              justifyContent: 'center', // ✅ centers children vertically
              // ✅ allows vertical centering
            }}
            className='bg-secondary dark:bg-primary'>
            <TextAreaU text="" value={propertyD.description} inputClassName={inputClassName} textClassName={textClassName} />
            <ITextStringU text="type:" value={propertyD.type_of_property_specified} inputClassName={inputClassName} textClassName={textClassName} />
            <ITextStringU text="minimum budget:" value={propertyD.minimum_budget} inputClassName={inputClassName} textClassName={textClassName} />
            <ITextNumberU text="age:" value={propertyD.age} inputClassName={inputClassName} textClassName={textClassName} />
            <ITextNumberU text="area:" value={propertyD.area} inputClassName={inputClassName} textClassName={textClassName} />
            <ITextStringU text="place:" value={propertyD.place} inputClassName={inputClassName} textClassName={textClassName} />
            <ITextStringU text="direction:" value={propertyD.direction} inputClassName={inputClassName} textClassName={textClassName} />
            <ITextStringU text="location:" value={propertyD.location} inputClassName={inputClassName} textClassName={textClassName} />
            <ITextStringU text="height:" value={propertyD.height} inputClassName={inputClassName} textClassName={textClassName} />
            <ITextStringU text="minimum time:" value={propertyD.minimum_time} inputClassName={inputClassName} textClassName={textClassName} />

          </ScrollView>
          <ModifiedButtonNoIcon text='Add Offer' textClassName={textButttonClassName} buttonClassName={buttonClassName} handleClick={() => makeOfferCard(propertyD.id)}></ModifiedButtonNoIcon>
        </View>

        <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges} snapPoints={snapPoints} enablePanDownToClose index={cardIndex}
          backgroundComponent={() => (
            <View className='flex-1 bg-primary dark:bg-secondary flex-grow-0' />
          )}
        >
          <BottomSheetView className='bg-primary dark:bg-secondary block flex-grow-0'>
            <ModifiedButton icon='CircleX' text='' textClassName={textClassNameInverted} iconClassName={`text-center ml-[40] ${textClassNameInverted}`} buttonClassName="" handleClick={() => closeMakeOfferCard()}></ModifiedButton>
            <Text className={`text-center mb-[40] ${textClassNameInverted}`}>Adding Offer</Text>

            <View className='justify-center items-center w-[100%] bg-primary dark:bg-secondary '>
              <ITextString text='Description' value={description} textClassName={textClassNameInverted} inputClassName={inputClassNameInverted} onChange={(newVal) => setDescription(String(newVal))}></ITextString>
              <ITextNumber text='Budget' value={budget} textClassName={textClassNameInverted} inputClassName={inputClassNameInverted} onChange={(newVal) => setBudget(Number(newVal))}></ITextNumber>
              <ITextString text='End Date' value={endDate} textClassName={textClassNameInverted} inputClassName={inputClassNameInverted} onChange={(newVal) => setEndDate(Date(newVal))}></ITextString>

              <ModifiedButton text='Offer' icon='SquarePlus' textClassName={textClassNameInverted} buttonClassName={buttonClassNameInverted} iconClassName={iconClassName} handleClick={() => addCustomerToCustoemrOffer(propertyD.id)}></ModifiedButton>
            </View>
          </BottomSheetView>
        </BottomSheet>

      </GestureHandlerRootView>


    );
}
