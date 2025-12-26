import { FlatList, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {PropertyCard} from '@/components/customerComponents/PropertyCard'
import villa from '@/assets/images/villa.jpg'
import { usePropertiesDataStore } from '@/stores/propertiesStore/data.store'
import { useCustomerDataStore } from '@/stores/customersStore/data.store'


export function CustomerMyProperties()  {
  //Store Section 👈
  const { dataCustomer,getCustomerData, loading, error} = useCustomerDataStore();
  
  useEffect( () => {
     getCustomerData();
  }, []); 

  return (  
    <ScrollView  
    contentContainerStyle={{
    alignItems: 'center',     // ✅ centers children horizontally
    justifyContent: 'center', // ✅ centers children vertically
          // ✅ allows vertical centering
     }}
    className='bg-primary dark:bg-secondary '> 

     <FlatList
      data={dataCustomer.properties}
      horizontal
      inverted
      renderItem={({ item }) => (  
      <PropertyCard  id={item.id} src={villa} 
         height={item.height} area={item.area} minimum_budget={String(item.minimum_budget)} 
         minimum_time={item.maximum_time} age={item.age} /> 
      )}
      showsHorizontalScrollIndicator={true}
      className='content-center flex-row mb-[70]'
    />   
    
{/*       <ModifiedButton icon='Activity' text='My Data' handleClick={getMyData}></ModifiedButton>
 */}  
    
    </ScrollView>
  )
}


