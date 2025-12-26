import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { CompanyCard } from '@/components/customerComponents/CompanyCard';
import { useCompanyDataStore } from '@/stores/companiesStore/data.store';
import { useFocusEffect } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { AppContext } from '../AppContext';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import IDropDown from '@/components/sharedComponents/IDropDown';
import { textClassNameInverted } from '@/assets/styleConstants';
import ModifiedButton from '@/components/sharedComponents/ModifiedButton';

export default function CustomerCompanies() {
  const { dataCompanies, getCompaniesData, getTypesOfCompanies, typesOfCompanies, loading, error } = useCompanyDataStore();
  const [typeOFCompany, setTypeOfCompany] = useState(0); // default: 0

  useFocusEffect(
    useCallback(() => {
      getCompaniesData();
    }, [getCompaniesData])
  );
  useFocusEffect(
    useCallback(() => {
      getTypesOfCompanies();
    }, [typesOfCompanies])
  );


  const { openDrawerCustomer, setOpenDrawerCustomer } = useContext(AppContext);
  const openDrawer = () => {
    setOpenDrawerCustomer(true)
  }
  const [searchQuery, setSearchQuery] = useState("");

  function onChangeSearch(searchQuery: string) {
    setSearchQuery(searchQuery);
  }


  const dataFiltered = dataCompanies?.filter(item =>
    item.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    &&item.typeOfCompanyId==typeOFCompany
  );


  //Add Offer Card 👈
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const snapPoints = ['100%'];
  const [cardIndex, setCardIndex] = useState(-1)


  let readData = dataCompanies;

  const openFilter = () => {
    bottomSheetRef.current?.expand();
  }

  const closeFilter = () => {
    readData = dataFiltered;
    console.log(readData)
    getCompaniesData();

    bottomSheetRef.current?.close();
  }
  const closeFilterWithIcon = () => {
    getCompaniesData();
    readData = dataCompanies;
    console.log(readData)
    bottomSheetRef.current?.close();
  }
  const [typesItems, setTypesItems] = useState<{ label: string; value: number }[]>([]);

  useEffect(() => {
    if (typesOfCompanies?.length) {
      setTypesItems(
        typesOfCompanies.map((item) => ({ label: item.name, value: item.id }))
      );
    }
  }, [typesOfCompanies]);



  return (
    <GestureHandlerRootView>
      <View className='h-full bg-secondary dark:bg-primary flex-1'>

        <View className='h-[90] w-[100%] justify-end bg-secondary dark:bg-primary pb-[10]'>
          <View className='bg-secondary dark:bg-primary h-[40] p-0 flex-row justify-center items-center w-[100%]'>

            <Pressable onPress={() => openFilter()}>
              <FontAwesome name="sliders" className='text-primary dark:text-secondary m-[10]' />
            </Pressable>
            <View className='flex-row items-center border-4 rounded-full 
                    w-[80%] mr-auto  h-[40]
                     ml-auto overflow-hidden border-primary bg-secondary'>
              <FontAwesome name="search" className='m-[10] text-primary' />
              <TextInput
                placeholder='Search'
                value={searchQuery}
                onChangeText={onChangeSearch}
                className='boreder-2  w-[100%] h-[30] text-body2 p-[0] text-primary'

              />
            </View>

            <Pressable
              onPress={() => openDrawer()}>
                <AntDesign name="menu" className='text-primary dark:text-secondary w-[24] h-[24]' />
            </Pressable>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 50
          }}
          className='bg-primary dark:bg-secondary'
        >
          {dataFiltered?.map((item, index) => (
            <CompanyCard
              key={item.id || index}
              id={item.id}
              description={item.description}
              location={item.location}
              firstName={item.firstName}
            />
          ))}
        </ScrollView>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}
        enableHandlePanningGesture={false}
        enableContentPanningGesture={false}
        index={cardIndex}
        backgroundComponent={() => (
          <View className='flex-1 h-[100%] flex bg-primary dark:bg-secondary' />
        )}
      >
        <BottomSheetView className='bg-primary dark:bg-secondary h-full flex-1 '>

          {/* Close Button */}
          <ModifiedButton
            text=''
            textClassName={textClassNameInverted}
            iconClassName={`text-center ml-[20] w-[30] h-[30] text-secondary dark:text-primary`}
            buttonClassName=""
            handleClick={() => closeFilterWithIcon()}
          />

          {/* Title */}
          <Text className={`text-center mb-[20] ${textClassNameInverted}`}>Filters</Text>

          {/* ✅ Type Filter UI moved to TOP */}
          <ScrollView
            contentContainerStyle={{
              alignItems: 'flex-start',     // ✅ centers children horizontally
              justifyContent: 'flex-start', // ✅ centers children vertically
              flexGrow: 1,              // ✅ allows vertical centering
            }}
            className='w-[98%] ml-0 mt-[10] mb-[10] pl-[10] pr-[10] h-[300]'>

            {/* Type Of Material Filter*/}
            <IDropDown text='type of property :' value={typeOFCompany} placeholder='select type of property'
              data={typesItems} onChange={(newVal) => setTypeOfCompany(newVal)} textClassName={textClassNameInverted}>
            </IDropDown>





          </ScrollView>

          {/* Other UI below here */}
          <View className='flex-1 justify-end mb-[50]'>

            <View className='justify-start items-center w-[100%] bg-secondary dark:bg-primary'>
              <ModifiedButton
                text='filter'
                textClassName={`text-secondary dark:text-primary mr-[20] text-body`}
                buttonClassName={`mt-[20] mb-[40] bg-primary dark:bg-secondary rounded-full h-[40] flex-row-reverse justify-between items-center`}
                iconClassName={`dark:text-primary text-secondary ml-[10] mr-[10]`}
                handleClick={() => closeFilter()}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
