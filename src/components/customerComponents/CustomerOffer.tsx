import React, { useCallback, useEffect } from 'react'
import { ITextStringU } from '../sharedComponents/ITextStringU';
import { ModifiedImage } from '../sharedComponents/ModifiedImage';
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation';
import ModifiedButtonNoIcon from '../sharedComponents/ModifiedButtonNoIcon';
import { buttonClassName, imageClassName, inputClassName, textButttonClassName, textClassName } from '@/assets/styleConstants';
import { ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';
import { TextAreaU } from '../sharedComponents/TextAreaU';
import villa from '@/assets/images/villa.jpg'
import { ITextNumberU } from '../sharedComponents/ITextNumberU';
import { usePropertiesDataStore } from '@/stores/propertiesStore/data.store';
import ModifiedButton from '../sharedComponents/ModifiedButton';
import { useCustomerDataStore } from '@/stores/customersStore/data.store';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';


/* const navigation = useNavigation()
 const route = useRoute()
 */

interface CompanyCardProps {
    description: string,
    owner_customer_comment: string,
    budget: number,
    propertyId: number
}



export function CustomerOffer({ description, owner_customer_comment, budget, propertyId }: CompanyCardProps) {
    const { dataProperties, getPropertiesData, getTypeOfPropertiesData, dataTypeOfProperties, deleteCustomerOffer } = usePropertiesDataStore();
    const { dataCustomer, customerOffers, getCustomerOffers, loading, error } = useCustomerDataStore();

    useFocusEffect(
        useCallback(() => {
            getCustomerOffers();
        }, [getCustomerOffers]));

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const navigateToCompany = (id: number) => {
        console.log("id", id)
        navigation.navigate(`CompanyProfileForCustomer`, { companyId: id });
    }
    const navigateToProperty = (id: number) => {
        navigation.navigate(`PropertyProfile`, { propertyId: id });
    }

    useFocusEffect(
        useCallback(() => {
            getPropertiesData();
        }, [getPropertiesData]));

    useFocusEffect(
        useCallback(() => {
            getTypeOfPropertiesData();
        }, [getTypeOfPropertiesData]))

    const deleteOffer = (propertyId: number) => {
        console.log(propertyId);
        getCustomerOffers();
        deleteCustomerOffer(propertyId);
    }

    let type;
    if (dataProperties) {
        const property = dataProperties?.find(item => item.id === propertyId);
        type = dataTypeOfProperties?.find(item => item.id === property?.typeOfPropertyId)
    }


    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(!visible);

    const closeMenu = () => setVisible(false);
    return (
        <PaperProvider>
            <View className='w-[300] m-4 items-center h-[500]'>
                <View className='bg-secondary  dark:bg-primary w-[300]  h-[500]
          items-center  rounded-[10] overflow-hidden'>
                    <View className='w-[100%] h-[150]'>
                        <ImageBackground
                            source={villa}            // your image
                            resizeMode="cover"        // like background-size: cover
                            className='w-full h-full opacity-90 justify-end items-start pl-[10] overflow-hidden ' // align content inside
                        >
                            <View
                            >
                                <Text className='text-secondary dark:text-primary text-center text-h1 '>
                                    {type?.name}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <ScrollView
                        contentContainerStyle={{
                            alignItems: 'center',     // ✅ centers children horizontally
                            justifyContent: 'flex-start', // ✅ centers children vertically
                            flexGrow: 1,              // ✅ allows vertical centering
                        }}
                        className='w-[98%] ml-0 mt-[10] mb-[5] p-0 h-[300]'>
                        <ITextStringU text='Owner Comment :' value={owner_customer_comment} textClassName={textClassName} inputClassName={inputClassName}></ITextStringU>
                        <ITextNumberU text='Budget :' value={budget} textClassName={textClassName} inputClassName={inputClassName}></ITextNumberU>
                        <TextAreaU text="Description :" value={description} inputClassName={inputClassName} textClassName={textClassName} />
                    </ScrollView>
                </View>
                <View className='mt-[10] bg-green-800 overflow-visible flex-row h-[0] w-[50%] justify-center items-center'>
                    <ModifiedButtonNoIcon textClassName={textButttonClassName} buttonClassName={`${buttonClassName}
               border-2 border-secondary dark:border-primary`} text='See the Property' handleClick={() => navigateToProperty(propertyId)}></ModifiedButtonNoIcon>

                </View>
                <View className='w-[40] h-[40] border-2 self-start rounded-full justify-center items-center 
                   bg-forty border-primary absolute top-[96%] -left-[14] '>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Button onPress={openMenu}>Show menu</Button>}>
                        <Menu.Item onPress={() => { }} title="Item 1" />
                        <Menu.Item onPress={() => { }} title="Item 2" />
                        <Divider />
                        <Menu.Item onPress={() => { }} title="Item 3" />
                    </Menu>
                </View>
                {/* 
            <Pressable
            
                onPress={() => deleteOffer(propertyId)}
            >
                <Trash2 className='text-primary'></Trash2>

            </Pressable> */}

            </View>
        </PaperProvider>
    )
}



