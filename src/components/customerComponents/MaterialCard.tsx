import React from 'react'
import { ITextStringU } from '../sharedComponents/ITextStringU';
import { ImageSourcePropType, ScrollView } from 'react-native';
import { ModifiedImage } from '../sharedComponents/ModifiedImage';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '@/navigation';
import ModifiedButtonNoIcon from '../sharedComponents/ModifiedButtonNoIcon';
import { buttonClassName, imageClassName, inputClassName, textButttonClassName, textClassName } from '@/assets/styleConstants';
import { ITextNumberU } from '../sharedComponents/ITextNumberU';
import { View } from 'react-native';
import { TextAreaU } from '../sharedComponents/TextAreaU';

/* const navigation = useNavigation()
 const route = useRoute()
 */

interface MaterialCardProps {
  id: number;
  description: string,
  price_for_one: number,
  type: string,
  src: ImageSourcePropType,
}



export function MaterialCard({ id, description, price_for_one, type, src }: MaterialCardProps) {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigateToMaterial = (id: number) => {
    console.log("id", id)
    navigation.navigate(`MaterialProfile`, { materialId: id });
  }

  return (
    <View className='bg-secondary  dark:bg-primary  w-[340]  mr-[110] ml-[30] mb-[10] mt-[20] rounded-[10] h-[220] flex-row-reverse justify-center items-center overflow-visible p-0'>
      <View className='h-[200] w-[200] -mr-[100] rounded-[10] border-secondary border-4 p-[0] dark:border-primary overflow-hidden'>
        <ModifiedImage imageClassName="h-[100%] w-[100%]" src={src} mode='contain' ></ModifiedImage>

      </View>
      <View className='flex-col items-center justify-center m-0 overflow-visible'>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',     // ✅ centers children horizontally
            justifyContent: 'flex-start', // ✅ centers children vertically
            flexGrow: 1,              // ✅ allows vertical centering
          }}
          className='w-[250] ml-0 mt-[10] mb-[5]'>
          <TextAreaU text="description :" value={description} inputClassName={inputClassName} textClassName={textClassName} />
          <ITextNumberU text="price :" value={price_for_one} inputClassName={inputClassName} textClassName={textClassName} />
        </ScrollView>
        <ModifiedButtonNoIcon textClassName={textButttonClassName} buttonClassName={`${buttonClassName} -mb-[20] border-2 border-secondary dark:border-primary`} text='see more' handleClick={() => navigateToMaterial(id)}></ModifiedButtonNoIcon>
      </View>
    </View>
  )
}



