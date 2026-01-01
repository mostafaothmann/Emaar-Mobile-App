import { FlatList, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { MaterialCard } from '@/components/customerComponents/MaterialCard'
import { useMaterialesDataStore } from '@/stores/materialesStore/data.store';
import { useFocusEffect } from '@react-navigation/native';
import { AppContext } from '../AppContext';
import { TextInput } from 'react-native-paper';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ModifiedButton from '@/components/sharedComponents/ModifiedButton';
import { textClassNameInverted } from '@/assets/styleConstants';
import IDropDown from '@/components/sharedComponents/IDropDown';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function CustomerMaterials() {
  //Store Section 👈
  const { dataM, getMaterialsData, getTypeOfMaterial, dataTypeOfMaterial, loading, error } = useMaterialesDataStore();
  const [searchQuery, setSearchQuery] = useState("");

  useFocusEffect(
    useCallback(() => {
      getMaterialsData();
    }, [dataM]));

  useFocusEffect(
    useCallback(() => {
      getTypeOfMaterial();
    }, [dataTypeOfMaterial]));

  const { openDrawerCustomer, setOpenDrawerCustomer } = useContext(AppContext);
  const openDrawer = () => {
    setOpenDrawerCustomer(true)
  }

  function onChangeSearch(searchQuery: string) {
    setSearchQuery(searchQuery);
    console.log(searchQuery.toLowerCase())
  }
  const [typeOfMaterial, setTypeOfMaterial] = useState(0); // default: 0
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [typesOfTypes, setTypesOfTypes] = useState<(1 | 2 | 3)[]>([1, 2, 3]); // default: all

  const dataFiltered = dataM?.filter(item =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
    && item.TypeOfMaterialid == typeOfMaterial
    && item.price_for_one >= minPrice && item.price_for_one <= maxPrice
  );

  //Add Offer Card 👈
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const snapPoints = ['100%'];
  const [cardIndex, setCardIndex] = useState(-1)

  const openFilter = () => {
    bottomSheetRef.current?.expand();
  }
  let readData = dataM;

  const closeFilter = () => {
    readData = dataFiltered;
    console.log(readData)
    getMaterialsData();

    bottomSheetRef.current?.close();
  }
  const closeFilterWithIcon = () => {
    getMaterialsData();
    readData = dataM;
    console.log(readData)
    bottomSheetRef.current?.close();
  }

  const [typesItems, setTypesItems] = useState<{ label: string; value: number }[]>([]);

  useEffect(() => {
    if (dataTypeOfMaterial?.length) {
      setTypesItems(
        dataTypeOfMaterial.map((item) => ({ label: item.name, value: item.id }))
      );
    }
  }, [dataTypeOfMaterial]);


  return (
    <GestureHandlerRootView >
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
            alignItems: 'center',     // ✅ centers children horizontally
            justifyContent: 'center', // ✅ centers children vertically
            // ✅ allows vertical centering
          }}
          className='bg-primary dark:bg-secondary pr-[30] overflow-visible '>
          <FlatList
            data={readData}
            horizontal
            renderItem={({ item }) => (
              <MaterialCard id={item.id} src={paint} description={item.description}
                price_for_one={item.price_for_one} type={item.type} />

            )}
            showsHorizontalScrollIndicator={true}
            className='content-center flex-row mb-[70] pb-[30]'

          />
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
            <IDropDown text='type of property :' value={typeOfMaterial} placeholder='select type of property'
              data={typesItems} onChange={(newVal) => setTypeOfMaterial(newVal)} textClassName={textClassNameInverted}>
            </IDropDown>

            {/*Price of Material Filter */}

            <Text className='text-body text-secondary dark:text-primary'>Price of Material  :</Text>
            <View className='flex-row flex w-[100%] items-end justify-evenly '>
              <View className='w-[40%] '>
                <Text className='text-body-2 text-secondary dark:text-primary'>min price :</Text>
                <TextInput
                  value={String(minPrice)}
                  onChangeText={newVAL => setMinPrice(Number(newVAL))}
                  keyboardType="numeric"
                  className='border-2 rounded-[10] border-secondary dark:border-primary m-0'
                />
              </View>
              <View className='w-[40%]'>
                <Text className='text-body-2 text-secondary dark:text-primary'>max price :</Text>
                <TextInput
                  value={String(maxPrice)}
                  onChangeText={newVAL => setMaxPrice(Number(newVAL))}
                  keyboardType="numeric"
                  className='border-2 rounded-[10]  border-secondary dark:border-primary m-0'
                />
              </View>
            </View>

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
    </GestureHandlerRootView >
  )
}


