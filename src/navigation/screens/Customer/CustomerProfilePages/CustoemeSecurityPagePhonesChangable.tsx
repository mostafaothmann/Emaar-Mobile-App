import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useCustomerDataStore } from '@/stores/customersStore/data.store'
import { ITextString } from '@/components/sharedComponents/ITextString';
import { buttonClassName, iconClassName, inputClassName, textClassName, textClassNameInverted } from '@/assets/styleConstants';
import { ITextNumber } from '@/components/sharedComponents/ITextNumber';
import ModifiedButton from '@/components/sharedComponents/ModifiedButton';
import { Customer } from '@/stores/customersStore/data.store';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation';

export interface UpdateCustomer {
    phone: number;
    secondPhone: number;

}

export default function CustoemeSecurityPagePhonesChangable() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { dataCustomer, getCustomerData, updateCustomerData } = useCustomerDataStore()
    const [phone, setPhone] = useState(dataCustomer.phone);
    const [secondPhone, setSecondPhone] = useState(dataCustomer.secondPhone);
    const upload = async () => {
        try {
            const { offers, properties, ...rest } = dataCustomer;
            const updatedCustomer = { ...rest, phone, secondPhone };
            const status = updateCustomerData(updatedCustomer);
            // navigation.navigate('CustomerSecurityPage')
        } catch (error) { }
    }
    return (
        <View className='bg-secondary dark:bg-primary flex-1 items-center pt-[100]'>
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',     // ✅ centers children horizontally
                    justifyContent: 'center', // ✅ centers children vertically
                    // ✅ allows vertical centering
                }}
                className='w-[100%]'>
                <ITextNumber text='Main Phone :' value={phone} textClassName={textClassName}
                    inputClassName={inputClassName} onChange={newVal => setPhone(Number(newVal))}></ITextNumber>
                <ITextNumber text='Second Phone :' value={secondPhone} textClassName={textClassName}
                    inputClassName={inputClassName} onChange={newVal => setSecondPhone(Number(newVal))}></ITextNumber>

            </ScrollView>
            <View>
            </View>

            <ModifiedButton text='update' textClassName={`text-secondary dark:text-primary mr-[20] text-body`}
                buttonClassName={`mt-[20] mb-[40] bg-primary dark:bg-secondary rounded-full h-[40] flex-row-reverse justify-between items-center`} icon='UserPen'
                iconClassName={`dark:text-primary text-secondary ml-[10] mr-[10]`}
                handleClick={upload}>
            </ModifiedButton>
        </View>
    )
}


