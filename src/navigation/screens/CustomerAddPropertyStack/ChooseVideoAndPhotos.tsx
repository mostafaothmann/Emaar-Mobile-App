import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon'
import ModifiedButton from '@/components/sharedComponents/ModifiedButton'
import * as ImagePicker from "expo-image-picker"
import { ModifiedImage } from '@/components/sharedComponents/ModifiedImage'
import { buttonClassName, buttonClassNameInverted, imageClassName, inputClassName, textClassName, textClassNameInverted } from '@/assets/styleConstants'
import paint from '@/assets/images/paint.jpg'
import { Image } from 'react-native'
import axios from 'axios'
import { AddPropertyContext } from './AddPropertyProvider'
import { ITextString } from '@/components/sharedComponents/ITextString'
import { ITextStringU } from '@/components/sharedComponents/ITextStringU'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { CustomerAddPropertyParamList } from '@/navigation'
import { apiPropertyImage } from '@/stores/api'
const ChooseVideoAndPhotos = () => {
  //AddPropertyContext
  const { uri1, setUri1, image1, setImage1, image2, setImage2, uri2, setUri2, image3, setImage3, uri3, setUri3,
    image4, setImage4, uri4, setUri4, image5, setImage5, uri5, setUri5,
  } = useContext(AddPropertyContext);

  //Navigation
  const navigation = useNavigation<NavigationProp<CustomerAddPropertyParamList>>();
  const navigateToChooseDetailsPage = () => {
    navigation.navigate(`ChooseDetailsPage`);
  }

  const saveImage1 = async (image: any) => {
    setUri1(true)
    setImage1(image);
  }
  const saveImage2 = async (image: any) => {
    setUri2(true)
    setImage2(image);
  }
  const saveImage3 = async (image: any) => {
    setUri3(true)
    setImage3(image);
  }
  const saveImage4 = async (image: any) => {
    setUri4(true)
    setImage4(image);
  }
  const saveImage5 = async (image: any) => {
    setUri5(true)
    setImage5(image);
  }
  //photo6
  const [image6, setImage6] = useState();
  const [uri6, setUri6] = useState(false);

  const saveImage6 = async (image: any) => {
    setUri6(true)
    setImage6(image);
  }
  //photo7
  const [image7, setImage7] = useState();
  const [uri7, setUri7] = useState(false);

  const saveImage7 = async (image: any) => {
    setUri7(true)
    setImage7(image);
  }
  //photo8
  const [image8, setImage8] = useState();
  const [uri8, setUri8] = useState(false);

  const saveImage8 = async (image: any) => {
    setUri8(true)
    setImage8(image);
  }
  //photo1
  const uploadImage1 = async (mode: string) => {
    try {
      let result;
      if (mode == "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync(
          {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
          }
        )
      }
      else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1
        })
      }

      if (!result.canceled) {
        saveImage1({ uri: result.assets[0].uri });
      }
    } catch (error) {
      console.log(error)
    }
  }
  //photo2
  const uploadImage2 = async (mode: string) => {
    try {
      let result;
      if (mode == "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync(
          {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
          }
        )
      }
      else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1
        })
      }
      if (!result.canceled) {
        saveImage2({ uri: result.assets[0].uri });
      }
    } catch (error) {
      console.log(error)
    }
  }
  //photo3
  const uploadImage3 = async (mode: string) => {
    try {
      let result;
      if (mode == "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync(
          {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
          }
        )
      }
      else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1
        })
      }
      if (!result.canceled) {
        saveImage3({ uri: result.assets[0].uri });
      }
    } catch (error) {
      console.log(error)
    }
  }
  //photo4
  const uploadImage4 = async (mode: string) => {
    try {
      let result;
      if (mode == "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync(
          {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
          }
        )
      }
      else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1
        })
      }

      if (!result.canceled) {
        saveImage4({ uri: result.assets[0].uri });
        console.log({ uri: result.assets[0].uri })
      }
    } catch (error) {
      console.log(error)
    }
  }
  //photo5
  const uploadImage5 = async (mode: string) => {
    try {
      let result;
      if (mode == "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync(
          {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
          }
        )
      }
      else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1
        })
      }

      if (!result.canceled) {
        saveImage5({ uri: result.assets[0].uri });
        console.log({ uri: result.assets[0].uri })
      }
    } catch (error) {
      console.log(error)
    }
  }
  //photo6
  const uploadImage6 = async (mode: string) => {
    try {
      let result;
      if (mode == "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync(
          {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
          }
        )
      }
      else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1
        })
      }

      if (!result.canceled) {
        saveImage6({ uri: result.assets[0].uri });
        console.log({ uri: result.assets[0].uri })
      }
    } catch (error) {
      console.log(error)
    }
  }
  //photo7
  const uploadImage7 = async (mode: string) => {
    try {
      let result;
      if (mode == "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync(
          {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
          }
        )
      }
      else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1
        })
      }

      if (!result.canceled) {
        saveImage7({ uri: result.assets[0].uri });
        console.log({ uri: result.assets[0].uri })
      }
    } catch (error) {
      console.log(error)
    }
  }
  //photo8
  const uploadImage8 = async (mode: string) => {
    try {
      let result;
      if (mode == "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync(
          {
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
          }
        )
      }
      else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1
        })
      }

      if (!result.canceled) {
        saveImage8({ uri: result.assets[0].uri });
        console.log({ uri: result.assets[0].uri })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View className=' flex-1  w-[100%] bg-primary -mt-[60] dark:bg-secondary h-full'>

      <View className='h-[80%] '>
        <Text className='mt-[100] text-center text-body text-secondary dark:text-primary'>
          Some of its Images are ...</Text>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            flexGrow: 1,
            alignContent: 'center',
          }}
          className='flex-1 w-[100%] mt-[20]  '
        >
          <View className='flex-row flex-wrap justify-center w-full'>

            {/* Main Photo */}
            <View className='w-[40%] h-[120] border-4 rounded-[10]  border-secondary dark:border-primary p-0 m-[10] overflow-hidden
            bg-forty'>
              {
                uri1 ? (
                  <Pressable onPress={() => uploadImage1("gallery")}>
                    <ModifiedImage
                      src={image1 || paint}
                      mode="cover"
                      imageClassName="bg-primary w-[100%] h-[100%]"
                    />
                  </Pressable>
                ) : (
                  <ModifiedButton
                    text="Main Photo"
                    textClassName="h-[30%] w-[100%] text-center m-0 text-secondary dark:text-primary text-body"
                    buttonClassName="flex-col-reverse justify-center items-center"
                    icon="Camera"
                    iconClassName="w-[100%] h-[70%] dark:text-primary text-secondary m-0"
                    handleClick={() => uploadImage1("gallery")}
                  />
                )
              }
            </View>
            {/* Second Photo */}
            <View className='w-[40%]  h-[120] border-4 rounded-[10]  border-secondary dark:border-primary p-0  m-[10] overflow-hidden
            bg-forty'>
              {
                uri2 ? (
                  <Pressable onPress={() => uploadImage2("gallery")} >
                    <ModifiedImage
                      src={image2 || paint}
                      mode="cover"
                      imageClassName="bg-primary w-[100%] h-[100] rounded-[10] m-0 text-center"
                    />
                  </Pressable>
                ) : (
                  <ModifiedButton
                    text="2 Photo"
                    textClassName="h-[30%] w-[100%] text-center m-0 text-secondary dark:text-primary text-body"
                    buttonClassName="flex-col-reverse justify-center items-center"
                    icon="Camera"
                    iconClassName="w-[100%] h-[70%] dark:text-primary text-secondary m-0"
                    handleClick={() => uploadImage2("gallery")}
                  />
                )
              }

            </View>

            {/* Third Photo */}
            <View className='w-[40%] h-[120] border-4 rounded-[10]  border-secondary dark:border-primary p-0 m-[10] overflow-hidden
            bg-forty'>
              {
                uri3 ? (
                  <Pressable onPress={() => uploadImage3("gallery")} >
                    <ModifiedImage
                      src={image3 || paint}
                      mode="cover"
                      imageClassName="bg-primary w-[100%] h-[100%]"
                    />
                  </Pressable>
                ) : (
                  <ModifiedButton
                    text="3 Photo"
                    textClassName="h-[30%] w-[100%] text-center m-0 text-secondary dark:text-primary text-body"
                    buttonClassName="flex-col-reverse justify-center items-center"
                    icon="Camera"
                    iconClassName="w-[100%] h-[70%] dark:text-primary text-secondary m-0"
                    handleClick={() => uploadImage3("gallery")}
                  />
                )
              }
            </View>

            {/* Fourth Photo */}
            <View className='w-[40%] h-[120] border-4 rounded-[10]  border-secondary dark:border-primary p-0 m-[10] overflow-hidden
            bg-forty'>
              {
                uri4 ? (
                  <Pressable onPress={() => uploadImage4("gallery")}>
                    <ModifiedImage
                      src={image4 || paint}
                      mode="cover"
                      imageClassName="bg-primary w-[100%] h-[100%]"
                    />
                  </Pressable>
                ) : (
                  <ModifiedButton
                    text="4 Photo"
                    textClassName="h-[30%] w-[100%] text-center m-0 text-secondary dark:text-primary text-body"
                    buttonClassName="flex-col-reverse justify-center items-center"
                    icon="Camera"
                    iconClassName="w-[100%] h-[70%] dark:text-primary text-secondary m-0"
                    handleClick={() => uploadImage4("gallery")}
                  />
                )
              }
            </View>

            {/* fifth Photo */}
            <View className='w-[40%] h-[120] border-4 rounded-[10]  border-secondary dark:border-primary p-0 m-[10] overflow-hidden
            bg-forty'>
              {
                uri5 ? (
                  <Pressable onPress={() => uploadImage5("gallery")}>
                    <ModifiedImage
                      src={image5 || paint}
                      mode="cover"
                      imageClassName="bg-primary w-[100%] h-[100%]"
                    />
                  </Pressable>
                ) : (
                  <ModifiedButton
                    text="5 Photo"
                    textClassName="h-[30%] w-[100%] text-center m-0 text-secondary dark:text-primary text-body"
                    buttonClassName="flex-col-reverse justify-center items-center"
                    icon="Camera"
                    iconClassName="w-[100%] h-[70%] dark:text-primary text-secondary m-0"
                    handleClick={() => uploadImage5("gallery")}
                  />
                )
              }
            </View>

          </View>
        </ScrollView>

      </View>
      <View className='mb-[100] w-[100%] flex-1 justify-center items-center '>
        <ModifiedButtonNoIcon text='next' handleClick={() => navigateToChooseDetailsPage()}
          textClassName={textClassName} buttonClassName={buttonClassNameInverted}>
        </ModifiedButtonNoIcon>
      </View>

    </View>
  )
}

export default ChooseVideoAndPhotos

const styles = StyleSheet.create({})