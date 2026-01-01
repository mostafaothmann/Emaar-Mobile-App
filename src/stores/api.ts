// Apis
import axios from 'axios';
import { useAuthStore } from './customersStore/auth.store';
const url = `https://emaarbackend-production.up.railway.app`

//Api Customer 
export const apiCustomer = axios.create({
  baseURL: `${url}/customer`,
  headers: { 'Content-Type': 'application/json' },
});

// 🧠 Automatically attach the latest token before each request
apiCustomer.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().authData?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Api Customer Properties Offer (Offers Sent by Customers)
export const apiCPO = axios.create({
  baseURL: `${url}/customer-property-offer`,
  headers: { 'Content-Type': 'application/json' },
});

apiCPO.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().authData?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Api Property
export const apiProperty = axios.create({
  baseURL: `${url}/property`,
  headers: { 'Content-Type': 'application/json' },
});

apiProperty.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().authData?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Api Material
export const apiMaterial = axios.create({
  baseURL: `${url}/material`,
  headers: { 'Content-Type': 'application/json' },
});

apiMaterial.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().authData?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Api Type Of Property
export const apiTypeOfProperty = axios.create({
  baseURL: `${url}/typeofproperty`,
  headers: { 'Content-Type': 'application/json' },
});

apiTypeOfProperty.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().authData?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Api Type Of Ownering
export const apiTypeOfOwnering = axios.create({
  baseURL: `${url}/typeofownering`,
  headers: { 'Content-Type': 'application/json' },
});

apiTypeOfOwnering.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().authData?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Api Type Of Work
export const apiTypeOfWork = axios.create({
  baseURL: `${url}/typeofwork`,
  headers: { 'Content-Type': 'application/json' },
});

apiTypeOfWork.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().authData?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Api Company
export const apiCompany = axios.create({
  baseURL: `${url}/company`,
  headers: { 'Content-Type': 'application/json' },
});

apiCompany.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().authData?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Api Type Of Material
export const apiTypeOfMaterial = axios.create({
  baseURL: `${url}/typeofmaterial`,
  headers: { 'Content-Type': 'application/json' },
});

apiTypeOfMaterial.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().authData?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Api Type Of Company
export const apiTypeOfCompany = axios.create({
  baseURL: `${url}/typeofcompany`,
  headers: { 'Content-Type': 'application/json' },
});

apiTypeOfCompany.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().authData?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Api Property Image 
export const apiPropertyImage = axios.create({
  baseURL: `${url}/images/upload`,
});

apiPropertyImage.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().authData?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

