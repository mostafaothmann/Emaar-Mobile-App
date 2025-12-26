import React from 'react'
import { ITextNumberU } from '../sharedComponents/ITextNumberU'
import { ITextStringU } from '../sharedComponents/ITextStringU';
import { ImageSourcePropType, ScrollView } from 'react-native';
import { ModifiedImage } from '../sharedComponents/ModifiedImage';
import ModifiedButton from '../sharedComponents/ModifiedButton';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '@/navigation';
import { usePropertiesDataStore } from '@/stores/propertiesStore/data.store';
import ModifiedButtonNoIcon from '../sharedComponents/ModifiedButtonNoIcon';
import { buttonClassName, imageClassName, inputClassName, textButttonClassName, textClassName } from '@/assets/styleConstants';


/* const navigation = useNavigation()
 const route = useRoute()
 */

interface PropertyCardProps {
  id: number;
  minimum_budget: string,
  minimum_time: string,
  age: number,
  area: number,
  height: string,
  src: ImageSourcePropType,

}

export function PropertyCard({ id, minimum_budget, area, height, minimum_time, age, src,  }: PropertyCardProps) {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigateToProperty = (id: number) => {
    navigation.navigate(`PropertyProfile`, { propertyId: id });
  }

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',     // ✅ centers children horizontally
        justifyContent: 'flex-start', // ✅ centers children vertically
        flexGrow: 1,              // ✅ allows vertical centering
      }}
      className='bg-secondary text-center dark:bg-primary  w-[270]  mr-[20] ml-[20] mb-[20] mt-[20] rounded-[10] h-[350]'>
      <ModifiedImage imageClassName='w-[100%] mb-[10] h-[130] ' src={src} mode='stretch' ></ModifiedImage>
      <ITextStringU text="minimum budget:" value={minimum_budget} inputClassName={inputClassName} textClassName={textClassName} />
      <ITextNumberU text="area:" value={area} inputClassName={inputClassName} textClassName={textClassName} />
      <ModifiedButtonNoIcon textClassName={textButttonClassName} buttonClassName={buttonClassName} text='see more' handleClick={() => navigateToProperty(id)}></ModifiedButtonNoIcon>
    </ScrollView>
  )
}



