import React from 'react';
import PaymentScreen from '../Screens/profile/PaymentScreen';
import SettingScreen from '../Screens/profile/SettingScreen';
import ProfileDetailScreen from '../Screens/profile/ProfileDetailScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationSetting from '../Screens/profile/NotificationSetting';
import PaymentsMethod from '../Screens/profile/PaymentsMethod';

const Stack = createStackNavigator();

function StackNavigation () {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen
        name="NotificationSetting"
        component={NotificationSetting}
      />
      <Stack.Screen name="PaymentsMethod" component={PaymentsMethod} />
    </Stack.Navigator>
  );
}

const ProfileTopTabNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="ProfileDetail"
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: '#F87124'},
      }}>
      <Tab.Screen
        name="ProfileDetail"
        component={ProfileDetailScreen}
        options={{
          tabBarLabel: 'Profile Detail',
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
            color: '#000000',
          },
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
            color: '#000000',
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={StackNavigation}
        options={{
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
            color: '#000000',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default ProfileTopTabNavigator;
