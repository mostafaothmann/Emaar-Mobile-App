import { FlatList, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { PropertyCard } from '@/components/customerComponents/PropertyCard'
import villa from '@/assets/images/villa.jpg'
import { usePropertiesDataStore } from '@/stores/propertiesStore/data.store'
import { Searchbar } from 'react-native-paper';
import { red300, red600 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'
import { ITextString } from '@/components/sharedComponents/ITextString'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ITextNumber } from '@/components/sharedComponents/ITextNumber'
import ModifiedButton from '@/components/sharedComponents/ModifiedButton'
import { buttonClassNameInverted, iconClassName, textClassNameInverted } from '@/assets/styleConstants'
import { red } from 'react-native-reanimated/lib/typescript/Colors'



export function CustomerProperties() {
  //Store Section 👈
  const { dataProperties, dataTypeOfProperties, dataTypeOfOwnerings, getTypeOfOwneringsData, getTypeOfWorkData, dataTypeOfWork, getTypeOfPropertiesData, getPropertiesData, loading, error } = usePropertiesDataStore();
  const [searchQuery, setSearchQuery] = useState("");

  useFocusEffect(
    useCallback(() => {
      getPropertiesData();
    }, [dataProperties]));

  useFocusEffect(
    useCallback(() => {
      getTypeOfPropertiesData();
    }, [dataTypeOfProperties]));

  useFocusEffect(
    useCallback(() => {
      getTypeOfOwneringsData();
    }, [dataTypeOfOwnerings]));


  useFocusEffect(
    useCallback(() => {
      getTypeOfWorkData();
    }, [dataTypeOfWork]));


  function onChangeSearch(searchQuery: string) {
    setSearchQuery(searchQuery);
    console.log(searchQuery.toLowerCase())
  }

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

  const [typesOfTypes, setTypesOfTypes] = useState<(1 | 2 | 3)[]>([1, 2, 3]); // default: all
  const [typesOfOwnerings, setTypesOfOwnerings] = useState<(1 | 2 | 3 | 4 | 5 | 6 | 7)[]>([1, 2, 3, 4, 5, 6, 7]); // default: all
  const [typesOfIWorks, setTypesOfWorks] = useState<(1 | 2 | 3 | 4 | 5 | 6)[]>([1, 2, 3, 4, 5, 6]); // default: all
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMAxArea] = useState(1000);

  const closeFilter = () => {
    getPropertiesData();
    bottomSheetRef.current?.close();
  }
  const data = dataProperties?.filter(
    (item) =>
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
      typesOfTypes.includes(item.typeOfPropertyId) &&
      typesOfOwnerings.includes(item.typeOfOwneringId) &&
      typesOfIWorks.includes(item.typeOfWorkId) &&
      item.age <= maxAge && item.age >= minAge &&
      item.area <= maxArea && item.area >= minArea
  );
  const dataTypesOfPropertiesFiltered = dataTypeOfProperties?.filter(
    (item) =>
      typesOfTypes.includes(item.id)
  )
  const dataTypesOfOwneringsFiltered = dataTypeOfOwnerings?.filter(
    (item) =>
      typesOfOwnerings.includes(item.id)
  )
  const dataTypesOfWorksFiltered = dataTypeOfWork?.filter(
    (item) =>
      typesOfIWorks.includes(item.id)
  )
  const toggleTypeOfTypes = (value: 1 | 2 | 3) => {
    setTypesOfTypes(prev =>
      prev.includes(value)
        ? prev.filter(t => t !== value) // remove
        : [...prev, value]              // add
    );
  };

  const toggleTypeOfOwnerings = (value: 1 | 2 | 3 | 4 | 5 | 6 | 7) => {
    setTypesOfOwnerings(prev =>
      prev.includes(value)
        ? prev.filter(t => t !== value) // remove
        : [...prev, value]              // add
    );
  };

  const toggleTypeOfWorks = (value: 1 | 2 | 3 | 4 | 5 | 6) => {
    setTypesOfWorks(prev =>
      prev.includes(value)
        ? prev.filter(t => t !== value) // remove
        : [...prev, value]              // add
    );
  };
  return (
    <GestureHandlerRootView >
      <View className='flex-1 bg-primary dark:bg-secondary pb-[80]'>
        <View className='flex-row items-center h-[80] mt-[15]'>
          <Pressable onPress={() => openFilter()}>
            <FontAwesome name="sliders" className='text-primary dark:text-secondary m-[10]' />

          </Pressable>
          <View className='flex-row items-center border-4 rounded-full 
               w-[80%] mr-auto 
               ml-auto overflow-hidden border-primary bg-secondary'>
            <FontAwesome name="search" className='m-[10] text-primary' />
            <TextInput
              placeholder='Search'
              value={searchQuery}
              onChangeText={onChangeSearch}
              className='boreder-2  w-[100%] h-[40] text-body2 p-[10]'
            />

          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',     // ✅ centers children horizontally
            justifyContent: 'center', // ✅ centers children vertically
            // ✅ allows vertical centering
          }}
          className='bg-primary dark:bg-secondary '>
          {dataTypesOfPropertiesFiltered?.map((type, key) => (
            <View className='h-[440]  w-[100%] p-[10]' key={key}>
              <Text className='text-h1 text-secondary dark:text-primary'>{type.name} :</Text>
              <FlatList
                data={data?.filter(item => item.typeOfPropertyId == type.id)}
                horizontal
                renderItem={({ item }) => (
                  <PropertyCard id={item.id} src={{uri:item.image1}}
                    height={item.height} area={item.area} minimum_budget={String(item.minimum_budget)}
                    minimum_time={item.maximum_time} age={item.age} />
                )}
                showsHorizontalScrollIndicator={true}
                className='content-center flex-row mb-[10]'
              />
            </View>
          )
          )
          }
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
            handleClick={() => closeFilter()}
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

            {/* Type Of Property Filter*/}

            <Text className='text-secondary dark:text-primary text-body'>Type of Property :</Text>
            {dataTypeOfProperties?.map(item => (
              <TouchableOpacity
                key={item.id}

                onPress={() => toggleTypeOfTypes(item.id)}
                className='flex-row items-center w-[120] mb-[8] ml-[20]'
              >
                <View
                  className={typesOfTypes.includes(item.id) ? "dark:bg-primary bg-secondary w-[22] h-[22] rounded-[4] dark:border-primary border-secondary mr-[10] content-center items-center" : "border-2 w-[22] h-[22] rounded-[4] dark:border-primary border-secondary mr-[10] content-center items-center"}
                />
                <Text className={`text-body-2 dark:text-primary text-secondary`}> {item.name}</Text>
              </TouchableOpacity>
            ))}

            {/* Type Of Ownering Filter*/}

            <Text className='text-secondary dark:text-primary text-body'>Type of Property :</Text>
            {dataTypeOfOwnerings?.map(item => (
              <TouchableOpacity
                key={item.id}

                onPress={() => toggleTypeOfOwnerings(item.id)}
                className='flex-row items-center w-[120] mb-[8] ml-[20]'
              >
                <View
                  className={typesOfOwnerings.includes(item.id) ? "dark:bg-primary bg-secondary w-[22] h-[22] rounded-[4] dark:border-primary border-secondary mr-[10] content-center items-center" : "border-2 w-[22] h-[22] rounded-[4] dark:border-primary border-secondary mr-[10] content-center items-center"}
                />
                <Text className={`text-body-2 dark:text-primary text-secondary`}> {item.name}</Text>
              </TouchableOpacity>
            ))}


            {/* Type Of Works Filter*/}

            <Text className='text-secondary dark:text-primary text-body'>Type of Work :</Text>
            {dataTypeOfWork?.map(item => (
              <TouchableOpacity
                key={item.id}

                onPress={() => toggleTypeOfWorks(item.id)}
                className='flex-row items-center w-[120] mb-[8] ml-[20]'
              >
                <View
                  className={typesOfIWorks.includes(item.id) ? "dark:bg-primary bg-secondary w-[22] h-[22] rounded-[4] dark:border-primary border-secondary mr-[10] content-center items-center" : "border-2 w-[22] h-[22] rounded-[4] dark:border-primary border-secondary mr-[10] content-center items-center"}
                />
                <Text className={`text-body-2 dark:text-primary text-secondary`}> {item.name}</Text>
              </TouchableOpacity>
            ))}

            {/*Age of Property Filter */}

            <Text className='text-body text-secondary dark:text-primary'>Age of Building  :</Text>
            <View className='flex-row flex w-[100%] items-end justify-evenly '>
              <View className='w-[40%] '>
                <Text className='text-body-2 text-secondary dark:text-primary'>min age :</Text>
                <TextInput
                  value={String(minAge)}
                  onChangeText={newVAL => setMinAge(Number(newVAL))}
                  keyboardType="numeric"
                  className='border-2 rounded-[10] border-secondary dark:border-primary m-0'
                />
              </View>
              <View className='w-[40%]'>
                <Text className='text-body-2 text-secondary dark:text-primary'>max age :</Text>
                <TextInput
                  value={String(maxAge)}
                  onChangeText={newVAL => setMaxAge(Number(newVAL))}
                  keyboardType="numeric"
                  className='border-2 rounded-[10]  border-secondary dark:border-primary m-0'
                />
              </View>
            </View>


            {/*Area of Property Filter */}

            <Text className='text-body text-secondary dark:text-primary'>Area of Property  :</Text>
            <View className='flex-row flex w-[100%] items-end justify-evenly '>
              <View className='w-[40%] '>
                <Text className='text-body-2 text-secondary dark:text-primary'>min area :</Text>
                <TextInput
                  value={String(minArea)}
                  onChangeText={newVAL => setMinArea(Number(newVAL))}
                  keyboardType="numeric"
                  className='border-2 rounded-[10] border-secondary dark:border-primary m-0'
                />
              </View>
              <View className='w-[40%]'>
                <Text className='text-body-2 text-secondary dark:text-primary'>max area :</Text>
                <TextInput
                  value={String(maxArea)}
                  onChangeText={newVAL => setMAxArea(Number(newVAL))}
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
                icon='ListFilter'
                iconClassName={`dark:text-primary text-secondary ml-[10] mr-[10]`}
                handleClick={() => closeFilter()}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  )
}