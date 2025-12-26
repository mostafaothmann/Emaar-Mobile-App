import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiMaterial, apiTypeOfMaterial } from '../api';


// 🧩 Interfaces
export interface Material {
  id: number;
  companyPhone: number;
  companyWhatsapp: number;
  description: string,
  TypeOfMaterialid: number,
  Companyid: number,
  price_for_one: number,
  isActive: number,
  type: string,
}

export interface TypeOfMaterial {
  id: number;
  name: string;
}
interface DataStore {
  dataM: Material[] | undefined;
  dataTypeOfMaterial: TypeOfMaterial[] | null;
  loading: boolean;
  materialD: Material,
  error: string | null;
  getMaterialsData: () => Promise<void>;
  getMaterialData: (id: number) => Promise<void>;
  getTypeOfMaterial: () => Promise<void>;
  // addCustomerOffer:(id:number,offer:offerCustomer) => Promise<void>;
}
//gettig the token from Auth Store 




export const useMaterialesDataStore = create<DataStore>()(
  persist(
    (set, get) => ({
      dataM: undefined,
      dataTypeOfMaterial: null,
      materialD: Object(),
      loading: false,
      error: null,
      // Get Materials Data
      getMaterialsData: async () => {
        set({ loading: true, error: null });
        try {
          const res = await apiMaterial.get(``);
          const dataM = res.data
          set({ dataM, loading: false });
          return dataM
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error Loading Materials',
            loading: false,
          });
        }
      },
      // Get Types of Materials Data
      getTypeOfMaterial: async () => {
        set({ loading: true, error: null });
        try {
          const res = await apiTypeOfMaterial.get(``);
          const dataTypeOfMaterial = res.data
          set({ dataTypeOfMaterial, loading: false });
          return dataTypeOfMaterial
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error Loading Materials',
            loading: false,
          });
        }
      },

      //getAll Materials 👈 used in CustomerMaterials,
      getMaterialData: async (id: number) => {
        set({ loading: true, error: null });
        try {
          const res = await apiMaterial.get(`/${id}`);
          const materialD = res.data
          set({ materialD, loading: false });
          return materialD
        } catch (err: any) {
          set({
            error: err.response?.data?.message || 'Error Loading Materials',
            loading: false,
          });
        }
      },
      //  getMaterials:

    }),
    {
      name: 'materiales-data-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ data: state.dataM })
    } // AsyncStorage (React Native)
  )
);
