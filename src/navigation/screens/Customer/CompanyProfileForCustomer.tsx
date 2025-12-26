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
import { useCompanyDataStore } from '@/stores/companiesStore/data.store';


export function CompanyProfileForCustomer() {
  //Route Section 👈
  type MaterialProfileRouteProp = RouteProp<RootStackParamList, 'CompanyProfileForCustomer'>;
  const route = useRoute<MaterialProfileRouteProp>();
  const companyId = route.params.companyId; // <- same key you passed
  //Store Section 👈
  const dataM = useCompanyDataStore.getState().dataCompanies
  const companyD = dataM?.find(item => item.id === companyId);

  useEffect(() => {

  }, [])

  //Functions 👈
  const Call = (id: number) => {

  }
  const Whatsapp = (id: number) => {

  }


  //Front Section 
  if (!companyD)
    return <Text>No data yet</Text>;
  else
    return (
        <View className='items-center justify-center flex-1 bg-secondary dark:bg-primary pt-[90]' >
          
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 40,
              alignItems: 'center',     // ✅ centers children horizontally
              justifyContent: 'center', // ✅ centers children vertically
              // ✅ allows vertical centering
            }}
            className='bg-secondary dark:bg-primary w-[400]'>
            <ITextStringU text="Name :" value={companyD.firstName} inputClassName={inputClassName} textClassName={textClassName} />
            <TextAreaU text="Description :" value={companyD.description} inputClassName={inputClassName} textClassName={textClassName} />
            <ITextStringU text="Email :" value={companyD.email} inputClassName={inputClassName} textClassName={textClassName} />

          </ScrollView>
          <View className='flex-row justify-between items-center'>
            <ModifiedButtonNoIcon text='Call' textClassName={textButttonClassName} buttonClassName={buttonClassName} handleClick={() => Call(companyD.phone)}></ModifiedButtonNoIcon>
            <ModifiedButtonNoIcon text='Whatssapp' textClassName={textButttonClassName} buttonClassName={buttonClassName} handleClick={() => Whatsapp(companyD.phone)}></ModifiedButtonNoIcon>
          </View>
        </View>



    );
}
