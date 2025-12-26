import { Button, Text } from '@react-navigation/elements';
import {View } from 'react-native';
import { useAuthStore } from '../../stores/customersStore/auth.store';
export function Home() {
    const {  authData, logout } = useAuthStore();
    const handleLogout = async () => {
         logout();
  };
  return (
    <View  className='text-yellow-600 dark:bg-red-300 '>
      <Text >Home Screen</Text>
      <Text>Open up 'src/App.tsx' to start working on your app!</Text>
      <Button  screen="Profile" params={{ user: 'jane' }}>
        Go to Profile
      </Button>
      <Button screen="Settings">Go to Settings</Button>
      <Text> {String(authData?.role)}</Text>
       <Text> {String(authData?.email)}</Text>
        <Text> {String(authData?.password)}</Text>
         <Text> {String(authData?.token)}</Text>
              <Button variant='filled' onPress={handleLogout} > logout</Button>
      
    </View>
  );
}
