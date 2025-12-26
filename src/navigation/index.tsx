import {
  createStaticNavigation,
  StaticParamList,
  useNavigation
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './screens/Customer/Login';
import { useAuthStore } from '../stores/customersStore/auth.store';
import CustomerHomeTabs from './screens/Customer/CustomerHomeTabs';
import { CustomerProperties } from './screens/Customer/CustomerProperties';
import CompanyHomeTabs from './screens/Company/CompanyHomeTabs';
import CompanyProfile from './screens/Company/CompanyProfile';
import { NotFound } from './screens/NotFound';
import CustomerProfile from './screens/Customer/CustomerProfile';
import CustomerHeader from './screens/Customer/CustomerHeader';
import CustomerCompanies from './screens/Customer/CustomerCompanies';
import CustomerProperty from './screens/Customer/CustomerProperty';
import { PropertyProfile } from './screens/Customer/PropertyProfile';
import { CustomerSignup } from './screens/Customer/CustomerSignup';
import { CustomerLogin } from './screens/Customer/CustomerLogin';

import { CustomerMaterials } from './screens/Customer/CustomerMaterials';
import { MaterialProfile } from './screens/Customer/MaterialProfile';
import ChooseTypeOfWorkPage from './screens/CustomerAddPropertyStack/ChooseTypeOfWorkPage';
import ChooseTypeOfOwnering from './screens/CustomerAddPropertyStack/ChooseTypeOfOwnering';
import ChooseTypeOfProperty from './screens/CustomerAddPropertyStack/ChooseTypeOfProperty';
import ChooseVideoAndPhotos from './screens/CustomerAddPropertyStack/ChooseVideoAndPhotos';
import ChoosePstatus from './screens/CustomerAddPropertyStack/ChoosePstatus';
import ChooseDetails from './screens/CustomerAddPropertyStack/ChooseDetails';
import ReviewingProperty from './screens/CustomerAddPropertyStack/ReviewingProperty';
import { createNavigationContainerRef } from '@react-navigation/native';
import { CompanyProfileForCustomer } from './screens/Customer/CompanyProfileForCustomer';
import { Signup } from './screens/Customer/Signup';
import { Drawer } from 'react-native-drawer-layout';
import { useContext, useState } from 'react';
import { AppContext, AppProvider } from './screens/AppContext';
import { View } from 'react-native';
import { CustomDrawerContent } from './screens/Customer/CustomerDrawerContent';
import { CustomerMyProperties } from './screens/Customer/CustomerMyProperties';
import { CustomerMySendOffers } from './screens/Customer/CustomerMySendOffers';
import UploadVerificatinoDocumentPage from './screens/Customer/CustomerProfilePages/UploadVerificatinoDocumentPage';
import CustomerPersonalDetailsPage from './screens/Customer/CustomerProfilePages/CustomerPersonalDetailsPage';
import CustomerLanguagesPage from './screens/Customer/CustomerProfilePages/CustomerLanguagesPage';
import CustomerAccountSettingsPage from './screens/Customer/CustomerProfilePages/CustomerAccountSettingsPage';
import CustomerPrivcyPage from './screens/Customer/CustomerProfilePages/CustomerPrivcyPage';
import CustomerCurrencyPage from './screens/Customer/CustomerProfilePages/CustomerCurrencyPage';
import CustomerRateUsPage from './screens/Customer/CustomerProfilePages/CustomerRateUsPage';
import CustomerAboutEmaarPage from './screens/Customer/CustomerProfilePages/CustomerAboutEmaarPage';
import CustomerApperancePage from './screens/Customer/CustomerProfilePages/CustomerApperancePage';
import CustomerSecurityPage from './screens/Customer/CustomerProfilePages/CustomerSecurityPage';
import CustomerAuthenticationPassPage from './screens/Customer/CustomerProfilePages/CustomerAuthenticationPassPage';
import CustomerSecurityPagePasswordChangable from './screens/Customer/CustomerProfilePages/CustomerSecurityPagePasswordChangable';
import CustoemeSecurityPagePhonesChangable from './screens/Customer/CustomerProfilePages/CustoemeSecurityPagePhonesChangable';


export const rootNavigationRef = createNavigationContainerRef();


const CustomerStack = createNativeStackNavigator({
  screens: {
    CustomerHomeTabs: { screen: CustomerHomeTabs, options: { title: 'Home', headerShown: false, }, },
    CustomerProfile: { screen: CustomerProfile, options: { headerShown: false } },
    CustomerMaterials: CustomerMaterials,
    CustomerCompanies: CustomerCompanies,
    CustomerProperty: { screen: CustomerProperty, options: { headerShown: false } },
    MaterialProfile: { screen: MaterialProfile, options: { headerShown: false } },
    PropertyProfile: { screen: PropertyProfile, options: { headerShown: false } },
    CompanyProfileForCustomer: { screen: CompanyProfileForCustomer, options: { headerShown: false } },
    CustomerProperties: { screen: CustomerProperties, options: { headerShown: false } },
    CustomerMyProperties: { screen: CustomerMyProperties, options: { headerShown: false } },
    CustomerMySendOffers: { screen: CustomerMySendOffers },
    CustomerPersonalDetailsPage: { screen: CustomerPersonalDetailsPage, options: { headerShown: false } },
    UploadVerificatinoDocumentPage: { screen: UploadVerificatinoDocumentPage, options: { headerShown: false } },
    CustomerLanguagesPage: { screen: CustomerLanguagesPage, options: { headerShown: false } },
    CustomerAccountSettingsPage: { screen: CustomerAccountSettingsPage, options: { headerShown: false } },
    CustomerPrivcyPage: { screen: CustomerPrivcyPage, options: { headerShown: false } },
    CustomerCurrencyPage: { screen: CustomerCurrencyPage, options: { headerShown: false } },
    CustomerRateUsPage: { screen: CustomerRateUsPage, options: { headerShown: false } },
    CustomerApperancePage: { screen: CustomerApperancePage, options: { headerShown: false } },
    CustomerAboutEmaarPage: { screen: CustomerAboutEmaarPage, options: { headerShown: false } },
    CustomerSecurityPage: { screen: CustomerSecurityPage, options: { headerShown: false } },
    CustomerAuthenticationPassPage: { screen: CustomerAuthenticationPassPage, options: { headerShown: false } },
    CustomerSecurityPagePasswordChangable: { screen: CustomerSecurityPagePasswordChangable, options: { headerShown: false } },
    CustoemeSecurityPagePhonesChangable:{screen:CustoemeSecurityPagePhonesChangable,options:{headerShown:false}}
  },
});

const CompanyStack = createNativeStackNavigator({
  HomeTabs: { CompanyHomeTabs, options: { title: 'Home', headerShown: false, } },
  screens: {
    CompanyProfile: { screen: CompanyProfile, options: { title: 'Home', headerShown: false } },
  },
});

const AuthStack = createNativeStackNavigator({
  screens: {
    CustomerSignup: { screen: CustomerSignup, options: { headerShown: false } },
    CustomerLogin: { screen: CustomerLogin, options: { headerShown: false } },
    SignUp: Signup,
  },
});


//Inside the Customer Add Property Page 👈
const CustomerAddPropertyStack = createNativeStackNavigator({
  screens: {
    ChooseTypeOfPropertyPage: {
      screen: ChooseTypeOfProperty,
      options: { headerShown: false },
    },
    ChooseTypeOfWorkPage: {
      screen: ChooseTypeOfWorkPage,
      options: { headerShown: false },
    },
    ChooseTypeOfOwneringPage: {
      screen: ChooseTypeOfOwnering,
      options: { headerShown: false },
    },
    ChooseVideoAndPhotosPage: {
      screen: ChooseVideoAndPhotos,
      options: { headerShown: false },
    },
    ChoosePstatusPage: {
      screen: ChoosePstatus,
      options: { headerShown: false },
    },
    ChooseDetailsPage: {
      screen: ChooseDetails,
      options: { headerShown: false },
    },
    ReviewingPropertyPage: {
      screen: ReviewingProperty,
      options: { headerShown: false },
    },
    CustomerProperties: {
      screen: CustomerProperties,
      options: { headerShown: false }
    }

  }
});

// Create static navigations for each
const CustomerNavigation = createStaticNavigation(CustomerStack);
const CompanyNavigation = createStaticNavigation(CompanyStack);
const AuthNavigation = createStaticNavigation(AuthStack);
const CustomerAddPropertyNavigation = createStaticNavigation(CustomerAddPropertyStack);

export function Navigation(props: any) {
  // 1️⃣ all hooks must be here, at the top
  const { signedIn, authData } = useAuthStore();
  const role = authData?.role;

  const { openDrawerCustomer, setOpenDrawerCustomer } = useContext(AppContext);

  // remove this, you don’t need another drawer state
  // const [open, setOpen] = useState(false);


  // 2️⃣ now render conditionally
  let content;
  if (!signedIn) {
    return <AuthNavigation {...props} />;
  } else {
    return <Drawer
      open={openDrawerCustomer}
      onOpen={() => setOpenDrawerCustomer(true)}
      onClose={() => setOpenDrawerCustomer(false)}
      drawerType="front"
      drawerStyle={
        {
          width: '50%',
          backgroundColor: '#6B1011',

        }
      }
      drawerPosition='right'
      renderDrawerContent={() => (
        <CustomDrawerContent navigation={rootNavigationRef} />
      )}
    >
      <CustomerNavigation {...props} />
    </Drawer>
      ;
  }



}

export type CustomerAddPropertyParamList = {
  ChooseTypeOfWorkPage: undefined
  ChooseTypeOfPropertyPage: undefined
  ChooseTypeOfOwneringPage: undefined
  ChoosePstatusPage: { property: Object }
  ChooseDetailsPage: undefined
  ReviewingPropertyPage: undefined
  ChooseVideoAndPhotosPage: undefined
}

export function NavigationCustomerAddProperty(props: any) {

  return <CustomerAddPropertyNavigation {...props} />;
}

type CustomerStackParamList = {
  CustomerMySendOffers: undefined;
  CustomerMyProperties: undefined;
  CustomerHomeTabs: undefined;
  CustomerProfile: undefined;
  CustomerMaterials: undefined;
  CustomerCompanies: undefined;
  CustomerProperty: undefined;
  PropertyProfile: { propertyId: number }; // ✅ expects a param
  MaterialProfile: { materialId: number }; // ✅ expects a param
  CompanyProfileForCustomer: { companyId: number }; // ✅ expects a param
  CustomerProperties: undefined;
  UploadVerificatinoDocumentPage: undefined;
  CustomerPrivcyPage: undefined;
  CustomerSecurityPage: undefined;
  CustomerApperancePage: undefined;
  CustomerCurrencyPage: undefined;
  CustomerRateUsPage: undefined;
  CustomerAboutEmaarPage: undefined;
  CustomerPersonalDetailsPage: undefined;
  CustomerAccountSettingsPage: undefined;
  CustomerLanguagesPage: undefined;
  CustomerAuthenticationPassPage:{type:number};
  CustoemeSecurityPagePhonesChangable:undefined;
  CustomerSecurityPagePasswordChangable:undefined;
};

type CompanyStackParamList = StaticParamList<typeof CompanyStack>;
type AuthStackParamList = {
  CustomerSignup: undefined;
  CustomerLogin: undefined;
  Login: undefined;
}

export type RootStackParamList =
  & CustomerStackParamList
  & CompanyStackParamList
  & AuthStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
    //  interface CustomerAddPropertyParamList {}
  }
}
