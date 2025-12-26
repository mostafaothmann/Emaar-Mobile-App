import { Text, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation';
import paint from '@/assets/images/paint.jpg'
import { useMaterialesDataStore } from '@/stores/materialesStore/data.store'
import { ScrollView } from 'react-native';
import { ModifiedImage } from '@/components/sharedComponents/ModifiedImage';
import { ITextStringU } from '@/components/sharedComponents/ITextStringU';
import { ITextNumberU } from '@/components/sharedComponents/ITextNumberU';
import { TextAreaU } from '@/components/sharedComponents/TextAreaU';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import ModifiedButtonNoIcon from '@/components/sharedComponents/ModifiedButtonNoIcon';
import { buttonClassName, buttonClassNameInverted, iconClassName, imageClassName, inputClassName, inputClassNameInverted, textButttonClassName, textClassName, textClassNameInverted } from '@/assets/styleConstants';
import { useEffect } from 'react';


export function MaterialProfile() {
  //Route Section 👈
  type MaterialProfileRouteProp = RouteProp<RootStackParamList, 'MaterialProfile'>;
  const route = useRoute<MaterialProfileRouteProp>();
  const materialId = route.params.materialId; // <- same key you passed
  //Store Section 👈
  const dataM = useMaterialesDataStore.getState().dataM
  const materialD = dataM?.find(item => item.id === materialId);

  useEffect(() => {

  }, [])

  //Functions 👈
  const Call = (id: number) => {

  }
  const Whatsapp = (id: number) => {

  }


  //Front Section 
  if (!materialD)
    return <Text>No data yet</Text>;
  else
    return (
        <View className='items-center justify-center flex-1 bg-secondary dark:bg-primary pt-[90]' >
          
          <ModifiedImage imageClassName={`rounded-[10] border-primary border-2 dark:border-secondary w-[250] h-[250]`} src={paint} mode='stretch' ></ModifiedImage>
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 40,
              alignItems: 'center',     // ✅ centers children horizontally
              justifyContent: 'center', // ✅ centers children vertically
              // ✅ allows vertical centering
            }}
            className='bg-secondary dark:bg-primary w-[400]'>
            <ITextStringU text="type :" value={materialD.type} inputClassName={inputClassName} textClassName={textClassName} />
            <TextAreaU text="description :" value={materialD.description} inputClassName={inputClassName} textClassName={textClassName} />
            <ITextNumberU text="price :" value={materialD.price_for_one} inputClassName={inputClassName} textClassName={textClassName} />

          </ScrollView>
          <View className='flex-row justify-between items-center'>
            <ModifiedButtonNoIcon text='Call' textClassName={textButttonClassName} buttonClassName={buttonClassName} handleClick={() => Call(materialD.companyPhone)}></ModifiedButtonNoIcon>
            <ModifiedButtonNoIcon text='Whatssapp' textClassName={textButttonClassName} buttonClassName={buttonClassName} handleClick={() => Whatsapp(materialD.companyWhatsapp)}></ModifiedButtonNoIcon>
          </View>
        </View>



    );
}
