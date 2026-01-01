import { Pressable, Text, View, ScrollView, TextInput } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { ModifiedImage } from '@/components/sharedComponents/ModifiedImage';
import { TextArea } from '@/components/sharedComponents/TextArea';
import { ITextNumber } from '@/components/sharedComponents/ITextNumber';
import { AddPropertyContext } from './AddPropertyProvider';
import ModifiedButton from '@/components/sharedComponents/ModifiedButton';
import * as ImagePicker from 'expo-image-picker';
import paint from '@/assets/images/paint.jpg';
import { CustomerAddPropertyParamList, rootNavigationRef } from '@/navigation';
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon';
import { usePropertiesDataStore } from '@/stores/propertiesStore/data.store';
import { buttonClassNameInverted, inputClassName, textClassName, textClassNameInverted } from '@/assets/styleConstants';
import { Dropdown } from 'react-native-element-dropdown';
import { ActivityIndicator } from 'react-native';
import IDropDown from '@/components/sharedComponents/IDropDown';
import { apiPropertyImage } from '@/stores/api';


export default function ReviewingProperty() {
  // --- Context ---
  const {
    area, setArea, maximum_time, minimum_budget,
    setMaximumTime, setMinimumBudget, setHeight, height,
    direction, setDirection,
    typeOfOwnering, setTypeOfOwnering,
    typeOfProperty, setTypeOfProperty,
    typeOfWork, setTypeOfWork,
    description, setDescription,
    age, setAge,
    uri1, uri2, uri3, uri4, uri5,
    image1, image2, image3, image4, image5,
    setImage1, setImage2, setImage3, setImage4, setImage5,
    setUri1, setUri2, setUri3, setUri4, setUri5, property, setProperty
  } = useContext(AddPropertyContext);


  // Check readiness
  const isLoaded =
    area !== undefined &&
    typeOfOwnering !== undefined &&
    typeOfProperty !== undefined &&
    typeOfWork !== undefined &&
    description !== undefined &&
    age !== undefined

  // --- Store ---
  const {
    dataTypeOfOwnerings, getTypeOfOwneringsData,
    addProperty,
    dataTypeOfProperties, getTypeOfPropertiesData,
    dataTypeOfWork, getTypeOfWorkData,
  } = usePropertiesDataStore();

  useEffect(() => {
    getTypeOfOwneringsData();
    getTypeOfPropertiesData();
    getTypeOfWorkData();
  }, []);

  //Photo Backend
  const FormData = globalThis.FormData

  async function sendPhotoToBackend(image: any) {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: image.uri,
        type: 'image/jpeg',
        name: 'profile.jpg',
      } as any);
      formData.append('folderName', 'properties');
      const response = await apiPropertyImage.post('https://emaarbackend-production.up.railway.app/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error sending image:', error);
      throw error;
    }
  }


  //Saving Photos 
  const savePhotos = async () => {
    if (!property) return;
    try {
      const image11 = await sendPhotoToBackend(image1);
      const image22 = await sendPhotoToBackend(image2);
      const image33 = await sendPhotoToBackend(image3);
      const image44 = await sendPhotoToBackend(image4);
      const image55 = await sendPhotoToBackend(image5);
      console.log(image11)
      property.image1 = image11;
      property.image2 = image22;
      property.image3 = image33;
      property.image4 = image44;
      property.image5 = image55;
    } catch (error) {
      console.error('Saving photos failed:', error);
    }
  };

  // --- Dropdown States ---
  const [openOwnering, setOpenOwnering] = useState(false);
  const [owneringItems, setOwneringItems] = useState<{ label: string; value: number }[]>([]);

  const [openProperty, setOpenProperty] = useState(false);
  const [propertyItems, setPropertyItems] = useState<{ label: string; value: number }[]>([]);

  const [openWork, setOpenWork] = useState(false);
  const [workItems, setWorkItems] = useState<{ label: string; value: number }[]>([]);

  // --- Map backend data to picker items ---
  useEffect(() => {
    if (dataTypeOfOwnerings?.length) {
      setOwneringItems(
        dataTypeOfOwnerings.map((item) => ({ label: item.name, value: item.id }))
      );
    }
  }, [dataTypeOfOwnerings]);


  useEffect(() => {
    if (dataTypeOfProperties?.length) {
      setPropertyItems(
        dataTypeOfProperties.map((item) => ({ label: item.name, value: item.id }))
      );
    }
  }, [dataTypeOfProperties]);


  useEffect(() => {
    if (dataTypeOfWork?.length) {
      setWorkItems(
        dataTypeOfWork.map((item) => ({ label: item.name, value: item.id }))
      );
    }
  }, [dataTypeOfWork]);


  // --- Image Upload Functions ---
  const saveImage = (index: number, image: any) => {
    switch (index) {
      case 1: setUri1(true); setImage1(image); break;
      case 2: setUri2(true); setImage2(image); break;
      case 3: setUri3(true); setImage3(image); break;
      case 4: setUri4(true); setImage4(image); break;
      case 5: setUri5(true); setImage5(image); break;
    }
  };


  const saveDescription = (description: string) => {
    if (property)
      property.description = description;
    setDescription(description);
  }

  const saveAge = (age: number) => {
    if (property)
      property.age = age;
    setAge(age);
  }

  const saveArea = (area: number) => {
    if (property)
      property.area = area;
    setArea(area);
  }

  const saveMinimumBudget = (minimum_budget: number) => {
    if (property)
      property.minimum_budget = minimum_budget;
    setMinimumBudget(minimum_budget);
  }

  const saveHeight = (height: number) => {
    if (property)
      property.height = String(height);
    setHeight(String(height));
  }

  const saveDirection = (direction: number) => {
    if (property)
      property.direction = direction;
    setDirection(direction);
  }


  const directionTimes = [
    { value: 1, label: "North" },
    { value: 2, label: "East" },
    { value: 3, label: "South" },
    { value: 4, label: "West" },

    // diagonals (original order preserved)
    { value: 5, label: "North-East" },
    { value: 6, label: "North-West" },
    { value: 7, label: "South-West" },
    { value: 8, label: "South-East" },

    // unusual directions
    { value: 9, label: "East-West" },
    { value: 10, label: "South-North" },

    // corrected names
    { value: 11, label: "West-North-East" },
    { value: 12, label: "North-East-South" },
    { value: 13, label: "East-South-West" },
    { value: 14, label: "South-West-North" },

    // last unique
    { value: 15, label: "North-West-South-East" },
  ];
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState(0);

  const unitOptions = [
    { label: "Day", value: 0 },
    { label: "Week", value: 1 },
    { label: "Month", value: 2 },
    { label: "Year", value: 3 },
  ];
  const saveMaximumTime = () => {
    if (property)
      property.maximum_time = `${value} ${unitOptions[unit].label}`;
    setMaximumTime(`${value} ${unitOptions[unit].label}`);
  }

  const saveTypeOfOwnering = (typeOfOwnering: number) => {
    if (property)
      property.typeOfOwneringId = typeOfOwnering;
    setTypeOfOwnering(typeOfOwnering);
  }

  const saveTypeOfProperty = (typeOfProperty: number) => {
    if (property)
      property.typeOfPropertyId = typeOfProperty;
    setTypeOfProperty(typeOfProperty);
  }

  const saveTypeOfWork = (typeOfWork: number) => {
    if (property)
      property.typeOfWorkId = typeOfWork;
    setTypeOfWork(typeOfWork);
  }



  const uploadImage = async (index: number, mode: 'gallery' | 'camera') => {
    try {
      let result;
      if (mode === 'gallery') {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }

      if (!result.canceled) {
        saveImage(index, { uri: result.assets[0].uri });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // --- Navigation ---
  const navigation = useNavigation<NavigationProp<CustomerAddPropertyParamList>>();
  const addPropertyAndMoveToCustomerProperties = async () => {
    if (property)
      property.statusId = 2;
    await savePhotos();
    console.log({ ...property });
    addProperty(property);
    if (rootNavigationRef.isReady()) {
      rootNavigationRef.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name: 'CustomerHomeTabs' }] })
      );
      navigation.dispatch(
        CommonActions.reset({ index: 0, routes: [{ name: 'ChooseTypeOfPropertyPage' }] })
      );
    }
  };

  // --- Render ---
  const renderPhoto = (index: number, uri: any, image: any, label: string) => (
    <View className='w-[40%] h-[120px] border-4 rounded-[10] border-secondary dark:border-primary m-[10] overflow-hidden bg-forty'>
      {uri ? (
        <Pressable onPress={() => uploadImage(index, 'gallery')}>
          <ModifiedImage src={image || paint} mode="cover" imageClassName="bg-primary w-[100%] h-[100%]" />
        </Pressable>
      ) : (
        <ModifiedButton
          text={label}
          textClassName="h-[30%] w-[100%] text-center m-0 text-secondary dark:text-primary text-body"
          buttonClassName="flex-col-reverse justify-center items-center"
          icon="Camera"
          iconClassName="w-[100%] h-[70%] dark:text-primary text-secondary m-0"
          handleClick={() => uploadImage(index, 'gallery')}
        />
      )}
    </View>
  );
  // Wait for context
  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  else
    return (
      <View className='flex-1 w-[100%] bg-primary dark:bg-secondary -mt-[60]'>
        <View className='h-[80%] '>
          <Text className='mt-[100] text-center text-body text-secondary dark:text-primary'>Review your property</Text>


          <ScrollView contentContainerStyle={{ paddingVertical: 40, alignItems: 'center' }}>


            <ITextNumber text='Area :' value={area} textClassName={textClassNameInverted}
              inputClassName={inputClassName} onChange={(newVal) => saveArea(Number(newVal))} />


            <ITextNumber
              text="Height :"
              value={Number(height)}
              textClassName={textClassNameInverted}
              inputClassName={inputClassName}
              onChange={(newVal) => saveHeight(Number(newVal))}
            />



            <ITextNumber text='Age :' value={age} textClassName={textClassNameInverted}
              inputClassName={inputClassName} onChange={(newVal) => saveAge(Number(newVal))} />





            <View className='w-[80%]'>
              <Text className='text-body text-secondary dark:text-primary'>Maximum Time :</Text>
              <View className="ml-[0] flex-row justify-between items-center ">




                <TextInput
                  value={value}
                  onChangeText={(val) => setValue(val)}
                  className="w-[68%] bg-forty rounded"
                  style={
                    { borderRadius: 5, }
                  }
                />

                <Dropdown
                  backgroundColor="rgba(217, 217, 217, 0.3)"
                  fontFamily='ElMessiri'
                  style={{
                    width: "30%",
                    height: 40,
                    borderColor: "#D9D9D9",
                    borderWidth: 3,
                    borderRadius: 5,
                    backgroundColor: "#D9D9D9",
                  }}
                  placeholderStyle={{
                    color: "#D9D9D9",
                    fontFamily: "ElMessiri",
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                  selectedTextStyle={{
                    color: "#6B1011",
                    fontFamily: "ElMessiri",
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                  data={unitOptions}
                  labelField="label"
                  valueField="value"
                  value={unit}
                  onChange={(val) => setUnit(val.value)}
                />
              </View>

            </View>



            <TextArea text='Description :' value={description} textClassName={textClassNameInverted}
              inputClassName={inputClassName} onChange={(newVal) => saveDescription(String(newVal))} />


            {/* Dropdowns */}

            <IDropDown
              text="Direction :"
              value={direction}
              placeholder="sele direction"
              data={directionTimes}
              onChange={(newVal) => saveDirection(newVal)}
              textClassName={textClassNameInverted}
            />
            <IDropDown text='type of property :' value={typeOfProperty} placeholder='select type of property'
              data={propertyItems} onChange={(newVal) => saveTypeOfProperty(newVal)} textClassName={textClassNameInverted}>
            </IDropDown>

            <IDropDown text='type of ownering :' value={typeOfOwnering} placeholder='select type of ownering'
              data={owneringItems} onChange={(newVal) => saveTypeOfOwnering(newVal)} textClassName={textClassNameInverted}>
            </IDropDown>

            <IDropDown text='type of work :' value={typeOfWork} placeholder='select type of work'
              data={workItems} onChange={(newVal) => saveTypeOfWork(newVal)} textClassName={textClassNameInverted}>
            </IDropDown>



            {/* Photos */}
            <View className='flex-row flex-wrap justify-center w-full'>
              {renderPhoto(1, uri1, image1, 'Main Photo')}
              {renderPhoto(2, uri2, image2, '2 Photo')}
              {renderPhoto(3, uri3, image3, '3 Photo')}
              {renderPhoto(4, uri4, image4, '4 Photo')}
              {renderPhoto(5, uri5, image5, '5 Photo')}
            </View>
          </ScrollView>
        </View>
        {/* Submit */}
        <View className='mb-[100] w-[100%] flex-1 justify-center items-center'>

          <ModifiedButtonNoIcon text='Add Property' handleClick={addPropertyAndMoveToCustomerProperties}
            textClassName={textClassName} buttonClassName={buttonClassNameInverted} />
        </View>
      </View>
    );
}
