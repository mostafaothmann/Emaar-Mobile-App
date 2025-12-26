import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCustomerDataStore } from '@/stores/customersStore/data.store'

export default function UploadVerificatinoDocumentPage ()  {
    const {dataCustomer,getCustomerData} = useCustomerDataStore()
  return (
    <View>
            <Text>here you can see your documents</Text>
    </View>
  )
}


