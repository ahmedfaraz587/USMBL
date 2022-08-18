import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Invitation from '../Screens/Events/Invitation';
import MyEvents from '../Screens/Events/MyEvents';
import Wishlist from '../Screens/Events/Wishlist';
import Joined from '../Screens/Events/Joined';

const TopTabNavigatorEvents = () => {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator
      initialRouteName="MyEvents"
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: '#F87124'},
      }}>
      <TopTab.Screen
        name="MyEvents"
        component={MyEvents}
        options={{
          tabBarLabel:'My events',
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
            color: '#000000',
          },
        }}
      />
      <TopTab.Screen
        name="Joined"
        component={Joined}
        options={{
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
            color: '#000000',
          },
        }}
      />
      <TopTab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
            color: '#000000',
          },
        }}
      />
      <TopTab.Screen
        name="Invitation"
        component={Invitation}
        options={{
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
            color: '#000000',
          },
        }}
      />
    </TopTab.Navigator>
  );
};

export default TopTabNavigatorEvents;
