import { FlatList, ScrollView, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import {PropertyCard} from '@/components/customerComponents/PropertyCard'
import villa from '@/assets/images/villa.jpg'
import { useCustomerDataStore } from '@/stores/customersStore/data.store'
import { CustomerOffer } from '@/components/customerComponents/CustomerOffer'
import { useFocusEffect } from '@react-navigation/native'


export function CustomerMySendOffers()  {
  //Store Section 👈
  const { dataCustomer,customerOffers,getCustomerOffers, loading, error} = useCustomerDataStore();
  
  useFocusEffect(
  useCallback(() => {
    getCustomerOffers();
  }, [getCustomerOffers]));

  return (  
    <ScrollView  
    contentContainerStyle={{
    alignItems: 'center',     // ✅ centers children horizontally
    justifyContent: 'center', // ✅ centers children vertically
          // ✅ allows vertical centering
     }}
    className='bg-primary dark:bg-secondary '> 

     <FlatList
      data={customerOffers}
      horizontal
      inverted
      renderItem={({ item }) => (  
      <CustomerOffer  propertyId={item.Propertyid} owner_customer_comment={item.owner_customer_comment}
         description={item.description} budget={item.budget} 
         /> 
      )}
      showsHorizontalScrollIndicator={true}
      className='content-center flex-row pb-[70] pt-[10] '
    />   
    
{/*       <ModifiedButton icon='Activity' text='My Data' handleClick={getMyData}></ModifiedButton>
 */}  
    
    </ScrollView>
  )
}


