import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';
import Header from '../components/Header';
import Catalog from '../pages/catalog';
import Cart from '../pages/cart';

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes(){
  return(
    <Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { backgroundColor: '#313746' },
      }}
      initialRouteName='Catalog'
    >
      <Screen
        name='Catalog'
        component={Catalog}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <Header />,
        }}
      />

      <Screen
        name='Cart'
        component={Cart}
        options={{
          headerTransparent: true,
          headerTitle: () => <Header />,
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Feather name="chevron-left" size={18} color="#f3f9ff" />
          )
        }}
      />
    </Navigator>
  );
}
