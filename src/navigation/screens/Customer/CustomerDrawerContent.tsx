import React, { useContext } from "react";
import { Linking, Pressable, Text, View } from "react-native";
import { AppContext } from "../AppContext";
import { useAuthStore } from "@/stores/customersStore/auth.store";

export function CustomDrawerContent({ navigation }: any
) {
  const { openDrawerCustomer, setOpenDrawerCustomer } = useContext(AppContext);
  const { logout } = useAuthStore();
  const logOut = () => {
    setOpenDrawerCustomer(false);
    logout();
  }
  const navigateToMyCustomerProperties = () => {
    setOpenDrawerCustomer(false);
    navigation?.navigate(`CustomerMyProperties`);
  }
  const navigateToMySendOffers = () => {
    setOpenDrawerCustomer(false);
    navigation.navigate(`CustomerMySendOffers`);
  }
  return (
    <View className="flex-1 bg-secondary ">
      <View className="mt-[100]  w-[100%] bg-secondary max-h-[700] h-full justify-between">
        <View>
        <View
          className="bg-primary h-[2] w-[100%] mt-[10] mb-[10]"
        />
        <Pressable
          className="h-[40] w-[100%] justify-center items-center"
          onPress={() => navigateToMyCustomerProperties()}>
          <Text className="text-body text-primary">My Properties</Text>
        </Pressable>
        <View
          className="bg-primary h-[2] w-[100%] mt-[10] mb-[10]"
        />
        <Pressable
          className="h-[40] w-[100%] justify-center items-center"
          onPress={() => navigateToMySendOffers()}>
          <Text className="text-body text-primary">My Send Offers</Text>
        </Pressable>
        <View
          className="bg-primary h-[2] w-[100%] mt-[10] mb-[10]"
        />
        </View>
        
        <Pressable
          className="h-[40] w-[100%]  justify-center items-center  bg-primary"
          onPress={() => logOut()}>
          <Text className="text-body-2 text-secondary">Log out</Text>
        </Pressable>

      </View>
    </View>

  );
}
