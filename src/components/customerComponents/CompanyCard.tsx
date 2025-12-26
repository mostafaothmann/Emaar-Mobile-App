import React from 'react'
import { ITextStringU } from '../sharedComponents/ITextStringU';
import { ModifiedImage } from '../sharedComponents/ModifiedImage';
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation';
import ModifiedButtonNoIcon from '../sharedComponents/ModifiedButtonNoIcon';
import { buttonClassName, imageClassName, inputClassName, textButttonClassName, textClassName } from '@/assets/styleConstants';
import { Text, View } from 'react-native';
import { TextAreaU } from '../sharedComponents/TextAreaU';
import villa from '@/assets/images/villa.jpg'

/* const navigation = useNavigation()
 const route = useRoute()
 */

interface CompanyCardProps {
    id: number;
    description: string,
    location: string,
    firstName: string,
}



export function CompanyCard({ id, description, location, firstName }: CompanyCardProps) {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const navigateToCompany = (id: number) => {
        console.log("id", id)
        navigation.navigate(`CompanyProfileForCustomer`, { companyId: id });
    }

    return (
        <View className='bg-secondary  dark:bg-primary w-[300]  rounded-[10] h-[430] -p-[200]
         justify-center items-center mb-[30]'>
            <View className='h-[100] max-w-[80%]  rounded-[10] overflow-hidden border-primary border-2 flex-row dark:border-secondary'>
                <ModifiedImage imageClassName="h-[100%] w-[50%]  overflow-hidden mr-[5]" src={villa} mode='cover' ></ModifiedImage>
                <View className='w-[50%] text-center'>
                    <Text className='m-auto dark:text-secondary text-primary text-body'>{firstName}</Text>
                </View>
            </View>
            <ITextStringU text='Location :' value={location} textClassName={textClassName} inputClassName={inputClassName}></ITextStringU>
            <TextAreaU text="description :" value={description} inputClassName={inputClassName} textClassName={textClassName} />
            <ModifiedButtonNoIcon textClassName={textButttonClassName} buttonClassName={`${buttonClassName}
               mt-[20] border-2 border-secondary dark:border-primary`} text='see more' handleClick={() => navigateToCompany(id)}></ModifiedButtonNoIcon>
        </View>
    )
}



