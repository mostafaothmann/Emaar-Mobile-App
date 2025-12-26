import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { CustomerAddPropertyParamList } from '@/navigation'
import { ITextNumberU } from '@/components/sharedComponents/ITextNumberU'
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon'

export default function ChoosePstatus ()  {
  type ChooseTypeOfPropertyRouteProps = RouteProp<CustomerAddPropertyParamList,'ChooseTypeOfPropertyPage'>
  const route =useRoute<ChooseTypeOfPropertyRouteProps>()
  const property = route.params?.property;
  useEffect(()=>{
    console.log(property)
  })

  //navigation to the second
  const navigation =useNavigation<NavigationProp<CustomerAddPropertyParamList>>();
     const navigateToChooseDetailsPage=(pstatus:number) =>{
     const updatedProperty={...property,pstatus}
       navigation.navigate(`ChooseDetailsPage`);
        }
  return (
    <View className='bg-primary dark:bg-secondary flex-1 justify-center items-center'>
      <Text className='text-secondary dark:text-primary'>AddVideoAndPhotosPage</Text>
            <ModifiedButtonNoIcon text='move' textClassName='' buttonClassName='' handleClick={() => navigateToChooseDetailsPage(5)}>
              </ModifiedButtonNoIcon>
    </View>
  )
}


