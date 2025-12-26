import { create } from 'zustand';
import axios from 'axios';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiCPO, apiProperty, apiTypeOfOwnering, apiTypeOfProperty, apiTypeOfWork } from '../api';
import { useAuthStore } from '../customersStore/auth.store';
import { ImagePickerAsset } from 'expo-image-picker';


// 🧩 Interfaces
export interface CustomerOffer {
  Customerid?: number;
  Propertyid?: number;
  date?: Date;
  budget?: number;
  description?: string;
  endDate?: Date;
  owner_customer_comment?: string;
  isActive?: number;
}

export interface Property {
  id: number;
  image1:string;
  image2:string;
  image3:string;
  image4:string;
  image5:string;
  location: string;
  direction: number;
  maximum_time: string;
  minimum_budget: number;
  height: string;
  age: number;
  description: string;
  area: number;
  isActive: number;
  typeOfPropertyId: number;
  typeOfOwneringId: number;
  typeOfWorkId: number;
  statusId: number;
  customerId: number | null;
}
export interface TypeOfProperty {
  id: number,
  name: string,
  description: string,
  image: string,
}
export interface TypeOfWork {
  id: number,
  name: string,
  description: string,
}
export interface TypeOfOwnering {
  id: number,
  name: string,
  description: string,
}
interface DataStore {
  dataProperties: Property[] | null;
  dataTypeOfWork: TypeOfWork[] | null;
  dataTypeOfProperties: TypeOfProperty[] | null;
  dataTypeOfOwnerings: TypeOfOwnering[] | null;
  loading: boolean;
  propertyD: Property,
  error: string | null;
  getPropertiesData: () => Promise<void>;
  getTypeOfPropertiesData: () => Promise<void>;
  getTypeOfWorkData: () => Promise<void>;
  getTypeOfOwneringsData: () => Promise<void>;
  getPropertyData: (id: number) => Promise<void>;
  addCustomerOffer: (id: number, offer: CustomerOffer) => Promise<void>;
  addProperty: (property: Property | null) => Promise<void>;

  deleteCustomerOffer: (propertyId: number) => Promise<void>;
}
//gettig the token from Auth Store 




export const usePropertiesDataStore = create<DataStore>()(
  persist(
    (set, get) => ({
      dataProperties: null,
      dataTypeOfProperties: null,
      dataTypeOfOwnerings: null,
      dataTypeOfWork: null,
      propertyD: Object(),
      loading: false,
      error: null,
      // Get Properties Data
      getPropertiesData: async () => {
        set({ loading: true, error: null });
        try {
          const res = await apiProperty.get(``);
          const dataProperties = res.data
          set({ dataProperties, loading: false });
          return dataProperties
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error Loading Properties',
            loading: false,
          });
        }
      },
     
      // Get Type Of Properties Data
      getTypeOfPropertiesData: async () => {
        set({ loading: true, error: null });
        try {
          const res = await apiTypeOfProperty.get(``);
          const dataTypeOfProperties = res.data
          set({ dataTypeOfProperties, loading: false });
          return dataTypeOfProperties
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error Loading Properties',
            loading: false,
          });
        }
      },
      getTypeOfOwneringsData: async () => {
        set({ loading: true, error: null });
        try {
          const res = await apiTypeOfOwnering.get(``);
          const dataTypeOfOwnerings = res.data
          set({ dataTypeOfOwnerings, loading: false });
          return dataTypeOfOwnerings
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error Loading Properties',
            loading: false,
          });
        }
      },


      // Get Type Of Properties Data
      getTypeOfWorkData: async () => {
        set({ loading: true, error: null });
        try {
          const res = await apiTypeOfWork.get(``);
          const dataTypeOfWork = res.data
          set({ dataTypeOfWork, loading: false });
          return dataTypeOfWork
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error Loading Properties',
            loading: false,
          });
        }
      },

      // get One Property Data  👈

      getPropertyData: async (id: number) => {
        set({ loading: true, error: null });
        try {
          const res = await apiProperty.get(`/${id}`);
          const propertyD = res.data
          set({ propertyD, loading: false });
          return propertyD
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error Loading Properties',
            loading: false,
          });
        }
      },
      addCustomerOffer: async (id: number, offer: CustomerOffer) => {
        set({ loading: true, error: null });
        try {
          const { authData } = useAuthStore.getState();
          offer.Customerid = authData?.id
          offer.Propertyid = id;
          console.log(offer)
          const res = await apiCPO.post(``, offer);
          set({ loading: false });
          if (res.status == 201) {
            alert("Offer Added")
          }
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error Loading Properties',
            loading: false,
          });
        }
      },

      deleteCustomerOffer: async (proeprtyId: number) => {
        set({ loading: true, error: null });
        try {
          const { authData } = useAuthStore.getState();
          const customerId = authData?.id

          const res = await apiCPO.delete(`${customerId}/${proeprtyId}`);
          set({ loading: false });
          if (res.status == 201) {
            alert("Offer Deleted")
          }
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error Loading Properties',
            loading: false,
          });
        }
      },
      addProperty: async (property: Property | null) => {
        set({ loading: true, error: null });
        try {
          if (property !== null) {
            const { authData } = useAuthStore.getState(); // ✅ dynamically get latest auth data
            property.customerId = authData?.id || 0;
            console.log("added", property)
            const res = await apiProperty.post(``, property);
            set({ loading: false });
            if (res.status == 201) {
              alert("Offer Added")
            }
          }
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error Loading Properties',
            loading: false,
          });
        }
      },
      //  getProperties:

    }),
    {
      name: 'properties-data-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ data: state.dataProperties })
    } // AsyncStorage (React Native)
  )
);
